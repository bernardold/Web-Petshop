let express = require("express");
let path = require("path");
let app = express();
let initCouch = require('./init_couch');
let bodyparser = require('body-parser');
let users = require('./db/users');
let pets = require('./db/pets');


//initilializing the couch
initCouch(function(err) {  
	if (err) {
		throw err;
	}
	else {
		console.log('CouchDB initialized!');
	}
});

app.use(bodyparser.json());

app.post("/api/login", function(request, response){
	req = request.body;
	
	users.login(req.username, (err, body) => {

		if(!err){
			if (req.password == body.password){
				response.send(body);
			}

			else {
				let erro = {"message": "senha incorreta", "statusCode": 404};
				response.status(404).send(erro);
			}
		}

		else{
			let erro = {"message": "e-mail incorreto", "statusCode": 404};
			response.status(404).send(erro);
		}
	});
});

app.get("/api/getAllUsers", function(request, response){
	req = request.body;
	
	users.getAllUsers((err) => {

		if(err){
			console.log(err);
		}
	});
});

 /* serves main page */
app.get("/", function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../app/index.html'))
});

 /* serves all the static files */
app.get(/^(.+)$/, function(req, res){ 
     console.log('static file request : ' + req.params);
     res.sendFile(path.resolve(__dirname + '/../app' + req.params[0])); 
});

let port = process.env.PORT || 5000;
app.listen(port, function() {
   	console.log("Listening on " + port);
});	
