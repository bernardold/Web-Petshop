let users = require('../couchdb').use('users');

exports.create = function create(user, cb) {  
  	users.insert(user, user.id, cb);
};

//pronto
exports.login = function login(username, cb) {
	users.get(username, cb);
};

//mais ou menos pronto (dar uma olhada)
exports.getAllUsers = function getAllUsers(cb){
	users.list({include_docs: true}, cb);
}

//pronto
exports.countUsers = function countUsers(cb){
    users.list(cb);
}

// pronto
exports.getUserById = function getUserById(id, cb){
    users.get(id, cb);
}

// pronto
exports.removeUser = function removeUser(id, rev, cb){
    users.destroy(id, rev, cb);
}