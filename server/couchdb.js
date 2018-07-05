var nano = require('nano');
module.exports = nano(process.env.COUCHDB_URL || 'http://192.168.0.114:5984');
//module.exports = nano(process.env.COUCHDB_URL || 'localhost:5984');