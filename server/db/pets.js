var pets = require('../couchdb').use('pets');

exports.create = function create(pet, cb) {  
  	pets.insert(pet, pet.id, cb);
};

exports.read = function read(cb) {  
  	pets.insert(pet, pet.id, cb);
};
