let cart = require('../couchdb').use('cart');

exports.create = function create(cartItem, cb) {  
    cart.insert(cartItem, cartItem.id, cb);
};

exports.countCartProductsByUserId = function countCartProductsByUserId(cb){
    cart.list({include_docs: true}, cb);
}