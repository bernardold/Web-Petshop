let users = require('./db/users');
let pets = require('./db/pets');
let products = require('./db/products');
let services = require('./db/services');
let cart = require('./db/cart');

let initCouch = require('./init_couch');

//initilializing the couch
initCouch(function(err) {  
    if (err) {
        throw err;
    }
    else {
        console.log('CouchDB initialized!');
    }
});

let initialPets= [
    {
    	_id: "0", 
    	owner_id: "rb@t.co", 
    	name: "Bilu", 
    	species: "Cão - Poodle", 
    	age: 4, unit: 'anos' 
    },
    { 
    	_id: "1", 
    	owner_id: "rb@t.co", 
    	name: "Orley", 
    	species: "Pássaro - Calopsita", 
    	age: 7, 
    	unit: 'anos' 
    },
    { 
    	_id: "2", 
    	owner_id: "rb@t.co", 
    	name: "Nemo", 
    	species: "Peixe - Beta", 
    	age: 6, 
    	unit: 'meses' 
    },
    { 
    	_id: "3", 
    	owner_id: "rb@t.co", 
    	name: "Hantaro", 
    	species: "Hamster", 
    	age: 1, 
    	unit: 'anos' 
    },
    { 
    	_id: "4", 
    	owner_id: "rb@t.co", 
    	name: "Carlos", 
    	species: "Cobra", 
    	age: 5, 
    	unit: 'anos' 
    },
    { 
    	_id: "5", 
    	owner_id: "dummy@t.co", 
    	name: "Nina", 
    	species: "Cão - Poodle", 
    	age: 2, 
    	unit: 'anos' 
    },
    { 
    	_id: "6", 
    	owner_id: "berna@t.co", 
    	name: "Bastião", 
    	species: "Cão - Bulldog", 
    	age: 10, 
    	unit: 'anos' 
    },
    { 
    	_id: "7", 
    	owner_id: "berna@t.co", 
    	name: "Zé", 
    	species: "Cão - Cocker", 
    	age: 17, 
    	unit: 'anos' 
    },
    { 
    	_id: "8", 
    	owner_id: "berna@t.co", 
    	name: "Bráulio", 
    	species: "Cão - Pincher", 
    	age: 2, 
    	unit: 'anos' 
    },
];

let initialUsers = [
    { _id: "admin@t.co", role: 'admin', name: "Adminstrador", lastname: "do Sistema", email: "admin@t.co", password: 'admin', telephone: "(16)98888-8888", address: "Av. Brasil, 1111 - Centro, São Carlos - SP" },
    { _id: "rb@t.co", role: 'user', name: "Rafael", lastname: "Bastos", email: "rb@t.co", password: 'qwe123', telephone: "(16)3553-5521", address: "Av. São Carlos, 2911 - Centro, São Carlos - SP" },
    { _id: "dummy@t.co", role: 'user', name: "Dummy", lastname: "User", email: "dummy@t.co", password: 'qwe123', telephone: "(16)3553-5521", address: "Av. São Carlos, 2911 - Centro, São Carlos - SP" },
    { _id: "berna@t.co", role: 'user', name: "Bernardo", lastname: "Duarte", email: "berna@t.co", password: 'qwe123', telephone: "(16)3553-5521", address: "Av. São Carlos, 2911 - Centro, São Carlos - SP" },
    { _id: "gepeto@t.co", role: 'user', name: "Giovani", lastname: "Ortolani", email: "gepeto@t.co", password: 'qwe123', telephone: "(16)3553-5521", address: "Av. São Carlos, 2911 - Centro, São Carlos - SP" },
    { _id: "jorge@t.co", role: 'user', name: "Jorge", lastname: "Vilaça", email: "jorge@t.co", password: 'qwe123', telephone: "(16)3553-5521", address: "Av. São Carlos, 2911 - Centro, São Carlos - SP" },
    { _id: "gg@t.co", role: 'user', name: "Nicolas", lastname: "Leite", email: "gg@t.co", password: 'qwe123', telephone: "(16)3553-5521", address: "Av. São Carlos, 2911 - Centro, São Carlos - SP" },
];

let initialProducts = [
    { _id: "0", name: 'Gaiola Aberta', price: 250.0, amount: 50 },
    { _id: "1", name: 'Brinquedo para cães - Osso', price: 25.0, amount: 200 },
    { _id: "2", name: 'Ração para cães - Adulto - Pedigree', price: 100.0, amount: 1337 },
    { _id: "3", name: 'Aquário para peixes - Pequeno', price: 70.0, amount: 20 },
    { _id: "4", name: 'Caixa de areia para gatos', price: 80.0, amount: 30 },
];

let initialServices = [
    { _id: "0", name: 'Banho + Tosa - Gatos', price: 40.0, duration: 1, unit: 'horas' },
    { _id: "1", name: 'Banho + Tosa - Cães', price: 40.0, duration: 1, unit: 'horas' },
    { _id: "2", name: 'Vacina', price: 20.0, duration: 30, unit: 'minutos' },
    { _id: "3", name: 'Atendimento veterinários', price: 150.0, duration: 1, unit: 'horas' },
];

let initialCart = [
    { _id: "0", user_id: "rb@t.co", product_id: "2", product_name: 'Ração para cães - Adulto - Pedigree', product_price: 100.0, amount: 1 },
    { _id: "1", user_id: "rb@t.co", product_id: "1", product_name: 'Brinquedo para cães - Osso', product_price: 25.0, amount: 2 },
];

initialUsers.forEach((u) => {
    users.create(u, (err) => {  
		if (err) {
			throw err;
		}
		else {
			console.log('user inserted');
		}
	});
});

initialPets.forEach((p) => {
	pets.create(p, (err) => {
		if (err) {
			throw err;
		}
		else {
			console.log('pet inserted');
		}	
	});
});

initialProducts.forEach((p) => {
    products.create(p, (err) => {
        if (err) {
            throw err;
        }
        else {
            console.log('product inserted');
        }   
    });
});

initialServices.forEach((s) => {
    services.create(s, (err) => {
        if (err) {
            throw err;
        }
        else {
            console.log('service inserted');
        }   
    });
});

initialCart.forEach((c) => {
    cart.create(c, (err) => {
        if (err) {
            throw err;
        }
        else {
            console.log('cart inserted');
        }   
    });
});