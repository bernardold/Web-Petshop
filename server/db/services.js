let services = require('../couchdb').use('services');

exports.create = function create(service, cb) {  
    services.insert(service, service.id, cb);
};

//pronto
exports.countServices = function countServices(cb){
    services.list(cb);
}

//mais ou menos pronto (dar uma olhada)
exports.getServices = function getServices(cb){
    services.list({include_docs: true}, cb);
}

// auxiliar de removeService
exports.getServiceById = function getServiceById(id, cb){
    services.get(id, cb);
}

exports.removeService = function removeService(id, rev, cb){
    services.destroy(id, rev, cb);
}