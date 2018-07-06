let pets = require('../couchdb').use('pets');

exports.create = function create(pet, cb) {  
  	pets.insert(pet, pet.id, cb);
};

// pronto (TROCAR PARA GET)
exports.getPetsByUser = function getPetsByUser(cb){
    pets.list({include_docs: true}, cb);
}

// pronto 
exports.getPetById = function getPetById(id, cb){
    pets.get(id, cb);
}

// pronto (cascade do removeUser)
exports.removePet = function removePet(id, rev, cb){
    pets.destroy(id, rev, cb);
}