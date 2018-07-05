var users = require('./db/users');
var pets = require('./db/pets');

var initialPets= [
    {
    	id: 0, 
    	owner_id: 1, 
    	name: "Bilu", 
    	species: "Cão - Poodle", 
    	age: 4, unit: 'anos' 
    },
    { 
    	id: 1, 
    	owner_id: 1, 
    	name: "Orley", 
    	species: "Pássaro - Calopsita", 
    	age: 7, 
    	unit: 'anos' 
    },
    { 
    	id: 2, 
    	owner_id: 1, 
    	name: "Nemo", 
    	species: "Peixe - Beta", 
    	age: 6, 
    	unit: 'meses' 
    },
    { 
    	id: 3, 
    	owner_id: 1, 
    	name: "Hantaro", 
    	species: "Hamster", 
    	age: 1, 
    	unit: 'anos' 
    },
    { 
    	id: 4, 
    	owner_id: 1, 
    	name: "Carlos", 
    	species: "Cobra", 
    	age: 5, 
    	unit: 'anos' 
    },
    { 
    	id: 5, 
    	owner_id: 2, 
    	name: "Nina", 
    	species: "Cão - Poodle", 
    	age: 2, 
    	unit: 'anos' 
    },
    { 
    	id: 6, 
    	owner_id: 3, 
    	name: "Bastião", 
    	species: "Cão - Bulldog", 
    	age: 10, 
    	unit: 'anos' 
    },
    { 
    	id: 7, 
    	owner_id: 3, 
    	name: "Zé", 
    	species: "Cão - Cocker", 
    	age: 17, 
    	unit: 'anos' 
    },
    { 
    	id: 8, 
    	owner_id: 3, 
    	name: "Bráulio", 
    	species: "Cão - Pincher", 
    	age: 2, 
    	unit: 'anos' 
    },
];

var initialUsers = [
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