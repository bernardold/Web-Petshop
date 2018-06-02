
getStoreProducts = () => {
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
            updateProducts(products);
        }
    };
}