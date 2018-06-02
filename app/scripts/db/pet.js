var userPets = []

getPetsByUser = (userId) => {
    userPets = [];
    var request = db.transaction("pets").objectStore("pets").index('owner_id').openCursor(userId);

    request.onerror = function(event) {
        alert("Erro ao ler obter pets");
    };
    request.onsuccess = function(event) {
        let cursor = event.target.result;
        if (cursor) {
            userPets.push(cursor.value);
            cursor.continue();
        } else {
            // Não há mais registro de animais
            updatePets(userPets);
        }
    };
}

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
