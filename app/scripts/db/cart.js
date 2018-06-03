
addToCart = (cartProduct) => {
    // update the product
    let objectStore = db.transaction(["cart"], "readwrite").objectStore("cart");
    const request = objectStore.add(cartProduct);

    request.onerror = function(event) {
        alert("Erro ao adicionar ao carrinho");
    };
    request.onsuccess = function(event) {
        alert('Produto adicionado ao carrinho com sucesso');
    };
}

getCartProductsByUserId = (userId, cb = () => {}) => {
    let cartProducts = [];
    const request = db.transaction("cart").objectStore("cart").index('user_id').openCursor(userId);

    request.onerror = function(event) {
        alert("Erro ao obter carrinho");
    };
    request.onsuccess = function(event) {
        let cursor = event.target.result;
        if (cursor) {
            cartProducts.push(cursor.value)
            cursor.continue();
        } else {
            cb(cartProducts);
        }
    };
}

countCartProductsByUserId = (userId, cb = () => {}) => {
    let count = 0;
    const request = db.transaction("cart").objectStore("cart").index('user_id').openCursor(userId);
    request.onerror = function(event) {
        alert("Erro ao obter carrinho");
    };
    request.onsuccess = function(event) {
        let cursor = event.target.result;
        if (cursor) {
            count += cursor.value.amount;
            cursor.continue();
        } else {
            $('span.badge.cart-count').html(count)
            cb(count);
        }
    };
}

updateProductInCart = (productCart) => {
    // update the product
    let objectStore = db.transaction(["cart"], "readwrite").objectStore("cart");
    const request = objectStore.put(productCart);

    request.onerror = function(event) {
        alert("Erro ao atualizar carrinho");
    };
    request.onsuccess = function(event) {
        // Atualizado com sucesso
    };
}

removeFromCart = (id, userId, cb = () => {}) => {
    const request = db.transaction(["cart"], "readwrite").objectStore("cart").delete(id);
    request.onsuccess = function(event) {
        getCartProductsByUserId(userId, cb);
    };
}