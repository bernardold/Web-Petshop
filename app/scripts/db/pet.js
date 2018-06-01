
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
