
getServices = () => {
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
            updateServices(services);
        }
    };
}