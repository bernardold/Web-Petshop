
getServices = (cb = () => {}) => {
    services = [];
    var request = db.transaction("services").objectStore("services").openCursor();

    request.onerror = function(event) {
        alert("Erro ao obter serviços");
    };
    request.onsuccess = function(event) {
        let cursor = event.target.result;
        if (cursor) {
            services.push(cursor.value);
            cursor.continue();
        } else {
            // Não há mais registro de serviços
            cb(services);
        }
    };
}

countServices = (cb = () => {}) => {
    const objectStore = db.transaction("services").objectStore("services");
    const request = objectStore.count();
    request.onsuccess = () => {
        cb(request.result);
    }
}

removeService = (id, cb = () => {}) => {
    var request = db.transaction(["services"], "readwrite").objectStore("services").delete(id);
    request.onsuccess = function(event) {
        getServices(cb);
    };
}