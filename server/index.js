let express = require("express");
let path = require("path");
let app = express();
let bodyparser = require('body-parser');
//dbs
let initCouch = require('./init_couch');

let users = require('./db/users');
let pets = require('./db/pets');
let products = require('./db/products');
let services = require('./db/services');
let cart = require('./db/cart');


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

//LOGIN: -x-
app.post("/api/login/:username/:password", function(request, response){
	let req = request.params;
	
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

//COUNT USERS: feito
app.get("/api/countUsers", function(request, response){
	
	users.countUsers((err, body) => {

		if(err){
			console.log(err);
		}

		else{
			response.send({"userCount": body.total_rows});
		}
	});
});

//GET ALL USERS: feito (dar uma olhada nos parâmetros retornados)
app.get("/api/getAllUsers", function(request, response){
	
	users.getAllUsers(function(err, body){
		let usersList = []
		if (!err) {
			body.rows.forEach(function(row){
				usersList.push(row.doc);
			});
		}
		response.send(usersList);
	});
});

// REMOVE USER: feito
app.delete("/api/removeUser/:id", function(request, response){
	let req = request.params;

	users.getUserById(req.id, (err, body) => {

		if(err) {
			console.log("user nao existe");
			response.send({"ok": false});
		}
		else {
			let rev = body._rev;
			
			pets.getPetsByUser(function(err, body){
				if (!err) {
					body.rows.forEach(function(row){
						if(row.doc.owner_id === req.id) {
							pets.removePet(row.doc._id, row.doc._rev, (err, body) => {
								if(err) {
									console.log("erro na remocao dos pets de um user");
								}
							});
						}
					});
				}
			});

			users.removeUser(req.id, rev, (err, body) => {
				if(!err){
					response.send(body);
				}
			});
		}
	});
});

//GET PETS BY USER: feito (TROCAR PARA GET)
app.get("/api/getPetsByUser/:owner_id", function(request, response){
	let req = request.params

	pets.getPetsByUser(function(err, body){
		let petsList = []
		if (!err) {
			body.rows.forEach(function(row){
				console.log(row.doc.owner_id,  req.owner_id);
				if(row.doc.owner_id === req.owner_id) {
					petsList.push(row.doc);
				}
			});
		}
		response.send(petsList);
	});
});

//COUNT PRODUCTS: feito
app.get("/api/countProducts", function(request, response){
	
	products.countProducts((err, body) => {

		if(err) {
			console.log(err);
		}

		else {
			response.send({"productsCount": body.total_rows});
		}
	});
});

//GET PRODUCTS: feito (dar uma olhada nos parâmetros retornados)
app.get("/api/getProducts", function(request, response){
	
	products.getProducts(function(err, body){
		let productsList = []
		if (!err) {
			body.rows.forEach(function(row){
				productsList.push(row.doc);
			});
		}
		response.send(productsList);
	});
});

//GET PRODUCTS BY ID: feito mais ou menos (incluir caso de erro, TROCAR PARA GET)
app.get("/api/getProductById/:id", function(request, response){
	let req = request.params;

	products.getProductById(req.id, (err, body) => {

		if(!err){
			response.send(body);
		}
		else{
			// erro
		}
	});
});

// REMOVE PRODUCT: feito
app.delete("/api/removeProduct/:id", function(request, response){
	let req = request.params;

	products.getProductById(req.id, (err, body) => {

		if(err) {
			console.log("produto nao existe");
			response.send({"ok": false});
		}
		else {
			let rev = body._rev;
			products.removeProduct(req.id, rev, (err, body) => {
				if(!err){
					response.send(body);
				}
			});
		}
	});
});

// UPDATE PRODUCT: -x-
app.put("/api/updateProduct", function(request, response){
	let req = request.body;


	products.getProductById(req._id, (err, body) => {

		if(err) {
			console.log("produto nao existe");
			response.send({"ok": false});
		}
		else {
			let rev = body._rev;
			console.log(rev);
			req._rev = rev;
			products.updateProduct(req, (err, body) => {
				if(!err){
					response.send(body);
				}
			});
		}
	});
});

//COUNT SERVICES: feito
app.get("/api/countServices", function(request, response){

	services.countServices((err, body) => {

		if(err) {
			console.log(err);
		}

		else {
			response.send({"servicesCount": body.total_rows});
		}
	});
});

//GET SERVICES: feito (dar uma olhada nos parâmetros retornados)
app.get("/api/getServices", function(request, response){
	
	services.getServices(function(err, body){
		let servicesList = []
		if (!err) {
			body.rows.forEach(function(row){
				servicesList.push(row.doc);
			});
		}
		response.send(servicesList);
	});
});

// REMOVE SERVICE: feito
app.delete("/api/removeService/:id", function(request, response){
	let req = request.params;

	services.getServiceById(req.id, (err, body) => {

		if(err) {
			console.log("serviço nao existe");
			response.send({"ok": false});
		}
		else {
			let rev = body._rev;
			services.removeService(req.id, rev, (err, body) => {
				if(!err){
					response.send(body);
				}
			});
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

var port = process.env.PORT || 5000;
app.listen(port, function() {
   	console.log("Listening on " + port);
});	
