let async = require('async');  
let couch = require('./couchdb');
let databases = ['users', 'pets', 'products', 'services', 'carts'];

module.exports = initCouch;
function initCouch(cb) {  
	createDatabases(cb);
}

function createDatabases(cb) {  
	async.each(databases, createDatabase, cb);
}

function createDatabase(db, cb) {  
	couch.db.create(db, function(err) {
		if (err && err.statusCode == 412) {
			err = null;
		}
		cb(err);
	});
}
