let products = require('../couchdb').use('products');

exports.create = function create(product, cb) {  
    products.insert(product, product.id, cb);
};

//pronto
exports.countProducts = function countProducts(cb){
    products.list(cb);
}

//mais ou menos pronto (dar uma olhada)
exports.getProducts = function getProducts(cb){
    products.list({include_docs: true}, cb);
}

//pronto
exports.getProductById = function getProductById(id, cb){
    products.get(id, cb);
}

//pronto
exports.removeProduct = function removeProduct(id, rev, cb){
    products.destroy(id, rev, cb);
}

exports.updateProduct = function updateProduct(product, cb) {  
    products.insert(product, product.id, cb);
};