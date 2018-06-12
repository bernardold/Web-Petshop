
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

getProductById = (id, cb = () => {}) => {
    var request = db.transaction("products").objectStore("products").get(id);

    request.onerror = function(event) {
        alert("Erro ao obter produto");
    };
    request.onsuccess = function(event) {
        cb(request.result);
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

updateProduct = (product, cb = () => {}) => {
    // update the product
    let objectStore = db.transaction(["products"], "readwrite").objectStore("products");
    const request = objectStore.put(product);

    request.onerror = function(event) {
        alert("Erro ao atualizar produto");
    };
    request.onsuccess = function(event) {
        cb();
    };
}