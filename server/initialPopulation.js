let users = require('./db/users');
let pets = require('./db/pets');
let products = require('./db/products');
let services = require('./db/services');
//let cart = require('./db/cart');

let initialPets= [
    {
    	_id: "0", 
    	owner_id: "1", 
    	name: "Bilu", 
    	species: "Cão - Poodle", 
    	age: 4, unit: 'anos' 
    },
    { 
    	_id: "1", 
    	owner_id: "1", 
    	name: "Orley", 
    	species: "Pássaro - Calopsita", 
    	age: 7, 
    	unit: 'anos' 
    },
    { 
    	_id: "2", 
    	owner_id: "1", 
    	name: "Nemo", 
    	species: "Peixe - Beta", 
    	age: 6, 
    	unit: 'meses' 
    },
    { 
    	_id: "3", 
    	owner_id: "1", 
    	name: "Hantaro", 
    	species: "Hamster", 
    	age: 1, 
    	unit: 'anos' 
    },
    { 
    	_id: "4", 
    	owner_id: "1", 
    	name: "Carlos", 
    	species: "Cobra", 
    	age: 5, 
    	unit: 'anos' 
    },
    { 
    	_id: "5", 
    	owner_id: "2", 
    	name: "Nina", 
    	species: "Cão - Poodle", 
    	age: 2, 
    	unit: 'anos' 
    },
    { 
    	_id: "6", 
    	owner_id: "3", 
    	name: "Bastião", 
    	species: "Cão - Bulldog", 
    	age: 10, 
    	unit: 'anos' 
    },
    { 
    	_id: "7", 
    	owner_id: "3", 
    	name: "Zé", 
    	species: "Cão - Cocker", 
    	age: 17, 
    	unit: 'anos' 
    },
    { 
    	_id: "8", 
    	owner_id: "3", 
    	name: "Bráulio", 
    	species: "Cão - Pincher", 
    	age: 2, 
    	unit: 'anos' 
    },
];

let initialUsers = [
	{  
		_id: 'r@b.com',
		name: 'Rafael Bastos',
		password: 'qwe123',
        address: '1 Sesame Street'
	},
	{  
		_id: 'gob@example.com',
		name: 'Giovani Ortolani Barbosa',
		password: 'qwe123',
        address: '1 Sesame Street'
	},
	{  
		_id: 'jlsv@example.com',
		name: 'Jorge Lewis',
		password: 'qwe123',
        address: '1 Sesame Street'
	},
	{  
		_id: 'bd@example.com',
		name: 'Bernard Duarte',
		password: 'qwe123',
        address: '1 Sesame Street'
	},
	{  
		_id: 'nm@example.com',
		name: 'Nichols Milk',
		password: 'qwe123',
        address: '1 Sesame Street'
	},
	{  
		_id: 'fultal@example.com',
		name: 'Fulano de Tal',
		password: 'qwe123',
        address: '1 Sesame Street'
	},
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
    { _id: "0", user_id: "1", product_id: "2", product_name: 'Ração para cães - Adulto - Pedigree', product_price: 100.0, amount: 1 },
    { _id: "1", user_id: "1", product_id: "1", product_name: 'Brinquedo para cães - Osso', product_price: 25.0, amount: 2 },
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

// initialCart.forEach((p) => {
//     cart.create(c, (err) => {
//         if (err) {
//             throw err;
//         }
//         else {
//             console.log('cart inserted');
//         }   
//     });
// });