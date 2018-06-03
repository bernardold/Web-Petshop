
getStoreProducts = (cb = () => {}) => {
    products = [];
    var request = db.transaction("products").objectStore("products").openCursor();

    request.onerror = function(event) {
        alert("Erro ao obter produtos");
    };
    request.onsuccess = function(event) {
        let cursor = event.target.result;
        if (cursor) {
            products.push(cursor.value);
            cursor.continue();
        } else {
            // Não há mais registro de produtos
            cb(products);
        }
    };
}

countProducts = (cb = () => {}) => {
    const objectStore = db.transaction("products").objectStore("products");
    const request = objectStore.count();
    request.onsuccess = () => {
        cb(request.result);
    }
}

removeProduct = (id, cb = () => {}) => {
    var request = db.transaction(["products"], "readwrite").objectStore("products").delete(id);
    request.onsuccess = function(event) {
        getStoreProducts(cb);
    };
}