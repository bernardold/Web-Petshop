//população inicial de usuários
const initialUsers = [
    {id: 1, name: "Rafael", surname: "Bastos", email: "rs@tutorialspoint.com",
    telephone: "(16)3553-5521", address: "Av. São Carlos, 2911 - Centro, São Carlos - SP" }
];

//população inicial de pets
const initialPets = [
    {id: 1, name: "Bilu", species: "Cão - Poodle", age: 4}
];

var db;
var dbname = "petshop"
var request = window.indexedDB.open(dbname, 1);

//erro na request de abrir o db
request.onerror = function(err) {
    console.log("error: " + err);
};

//sucesso na abertura do db
request.onsuccess = function(event) {
    db = request.result;
};

//função chamada quando o bd precisa ser atualizado
//sempre chamada quando o bd é criado, costuma ser usada pra estruturar e dar o povoamento inicial
request.onupgradeneeded = function(event) {
    var db = event.target.result;
    var userStore = db.createObjectStore("users", {keyPath: "id"});
   
    var petStore = db.createObjectStore("pets", {keyPath: "id"});
   
    for (var i in initialUsers) {
        userStore.add(initialUsers[i]);
    }
    for (var i in initialPets) {
        petStore.add(initialPets[i]);
    }
}

//busca usuário por id
function readUser(id) {
    //transaction é pq a operação n pode parar no meio, a lá BD relacional
    var transaction = db.transaction(["users"]);
    var objectStore = transaction.objectStore("users");
    var request = objectStore.get(id);
   
    request.onerror = function(event) {
        alert("Não foi possível resgatar dados do banco.");
    };
   
    request.onsuccess = function(event) {
        // Do something with the request.result!
        if(request.result) {
            alert(Object.values(request.result));
        } else {
            alert("Usuário não encontrado");
        }
    };
}

//le todos os usuários 
function readAllUser() {
    var objectStore = db.transaction("users").objectStore("users");
   
    //O cursor serve para percorrer o bd, em ideia parecida com o iterator do java, creio eu    
    objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;
      
        if (cursor) {
            alert(Object.values(cursor.value));
            cursor.continue();
        } else {
            alert("No more entries!");
        }
    };
}

//adiciona um novo usuário no sistema
//user deve ser um objeto JSON
function addUser(user) {
    var request = db.transaction(["users"], "readwrite")
    .objectStore("users")
    .add(user);
   
    request.onsuccess = function(event) {
        alert("Usuário adicionado.");
    };
   
    request.onerror = function(event) {
        alert("Operação de registro falhou!");
    }
}

//remove um usuário do sistema
function removeUser(id) {
    var request = db.transaction(["users"], "readwrite")
    .objectStore("users")
    .delete(id);
   
    request.onsuccess = function(event) {
        alert("Usuário deletado.");
    };
}

//as funções seguintes são totalmente análogas às anteriores

//busca animal por id
function readPet(id) {
    var transaction = db.transaction(["pets"]);
    var objectStore = transaction.objectStore("pets");
    var request = objectStore.get(id);
   
    request.onerror = function(event) {
        alert("Não foi possível resgatar dados do banco.");
    };
   
    request.onsuccess = function(event) {
        // Do something with the request.result!
        if(request.result) {
            alert(Object.values(request.result));
        } else {
            alert("Animal não encontrado");
        }
    };
}

//le todos os animais 
function readAllPet() {
    var objectStore = db.transaction("pets").objectStore("pets");
   
    objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;
      
        if (cursor) {
            alert(Object.values(cursor.value));
            cursor.continue();
        } else {
            alert("No more entries!");
        }
    };
}

//adiciona um novo animal no sistema
//pet deve ser um objeto JSON
function addPet(pet) {
    var request = db.transaction(["pets"], "readwrite")
    .objectStore("pets")
    .add(pet);
   
    request.onsuccess = function(event) {
        alert("Animal adicionado.");
    };
   
    request.onerror = function(event) {
        alert("Operação de registro falhou!");
    }
}

//remove um animal do sistema
function removePet(id) {
    var request = db.transaction(["pets"], "readwrite")
    .objectStore("pets")
    .delete(id);
   
    request.onsuccess = function(event) {
        alert("Animal deletado.");
    };
}

//limpa o bd
function clear() {
    db.close();
    var req = indexedDB.deleteDatabase(dbname);
    req.onsuccess = () => {
        console.log("Deleted database successfully");
    };
    req.onerror = () => {
        console.log("Couldn't delete database");
    };
    req.onblocked = () => {
        console.log("Couldn't delete database due to the operation being blocked");
    };    
}