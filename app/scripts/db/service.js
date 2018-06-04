
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

getService = (cb = () => {}) => {
    services = [];
    var request = db.transaction("services").objectStore("services").get(id_service);

    request.onerror = function(event) {
        alert("Erro ao obter serviço");
    };
    request.onsuccess = function(event) {
        let service = event.target.result;
        services.push(service);
    };
}

countServices = (cb = () => {}) => {
    const objectStore = db.transaction("services").objectStore("services");
    const request = objectStore.count();
    request.onsuccess = () => {
        cb(request.result);
    }
}

setService = () => {
}

removeService = (id, cb = () => {}) => {
    var request = db.transaction(["services"], "readwrite").objectStore("services").delete(id);
    request.onsuccess = function(event) {
        getServices(cb);
    };
}
