var loggedUser;
const storeUserKey = 'loggedUser'

tryLogin = (email, password) => {
    var request = db.transaction("users").objectStore("users").index('email').openCursor(email);
    
    request.onerror = function(event) {
        alert("Email inválido");
    };
    request.onsuccess = function(event) {
        let cursor = event.target.result;
        if (cursor) {
            if (cursor.value.password == password) {
                loggedUser = cursor.value;
                sessionStorage.setItem(storeUserKey, JSON.stringify(loggedUser));
                updateNavbar();
                location.reload();
            } else {
                alert("Senha inválida");
            }
        } else {
            alert('Email inválido');    
        }
    };
}

checkLogin = () => {
    const user = JSON.parse(sessionStorage.getItem(storeUserKey));
    if (user) {
        loggedUser = user;
    }
    updateNavbar();
}

logOut = () => {
    let conf = confirm("Tem certeza que deseja sair?")
    if (conf){
        sessionStorage.clear();
        loggedUser = undefined;
        updateNavbar();
        location.reload();
    }
}

/*
//busca usuário por id
function readUserById(id) {
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

function countUsers() {
    const objectStore = db.transaction("users").objectStore("users");
    const request = objectStore.count();

    request.onsuccess = () => {
        console.log(request.result);
    }
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
*/