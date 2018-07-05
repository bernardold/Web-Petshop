var users = require('../couchdb').use('users');

exports.create = function create(user, cb) {  
  	users.insert(user, user.id, cb);
};

exports.login = function login(username, cb) {
	users.get(username, cb);
};

exports.getAllUsers = function getAllUsers(cb){
	users.list(function(err, body){
		if (!err) {
			body.rows.forEach(function(row){
				console.log(row);
			})
		}
	});
}