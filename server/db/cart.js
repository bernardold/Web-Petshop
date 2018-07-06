let cart = require('../couchdb').use('cart');

exports.create = function create(cartItem, cb) {  
    cart.insert(cartItem, cartItem.id, cb);
};

// pronto
exports.countCartProductsByUserId = function countCartProductsByUserId(cb){
    cart.list({include_docs: true}, cb);
}

// pronto
exports.getCartProductsByUserId = function getCartProductsByUserId(cb){
    cart.list({include_docs: true}, cb);
}

exports.addToCart = function addToCart(cartItem, cb) {  
    cart.insert(cartItem, cartItem.id, cb);
};

exports.updateCart = function addToCart(cartItem, cb) {  
    cart.insert(cartItem, cartItem.id, cb);
};