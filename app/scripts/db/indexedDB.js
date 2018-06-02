// população inicial de usuários
const initialUsers = [
    { id: 0, role: 'admin', profile_image: {}, image_id: 0, name: "Adminstrador", lastname: "do Sistema", email: "admin@t.co", password: 'admin', telephone: "(16)98888-8888", address: "Av. Brasil, 1111 - Centro, São Carlos - SP" },
    { id: 1, role: 'user', profile_image: {}, image_id: 5, name: "Rafael", lastname: "Bastos", email: "rb@t.co", password: 'qwe123', telephone: "(16)3553-5521", address: "Av. São Carlos, 2911 - Centro, São Carlos - SP" },
    { id: 2, role: 'user', profile_image: {}, image_id: 0, name: "Dummy", lastname: "User", email: "dummy@t.co", password: 'qwe123', telephone: "(16)3553-5521", address: "Av. São Carlos, 2911 - Centro, São Carlos - SP" },
    { id: 3, role: 'user', profile_image: {}, image_id: 1, name: "Bernardo", lastname: "Duarte", email: "berna@t.co", password: 'qwe123', telephone: "(16)3553-5521", address: "Av. São Carlos, 2911 - Centro, São Carlos - SP" },
    { id: 4, role: 'user', profile_image: {}, image_id: 3, name: "Giovani", lastname: "Ortolani", email: "gepeto@t.co", password: 'qwe123', telephone: "(16)3553-5521", address: "Av. São Carlos, 2911 - Centro, São Carlos - SP" },
    { id: 5, role: 'user', profile_image: {}, image_id: 4, name: "Jorge", lastname: "Vilaça", email: "jorge@t.co", password: 'qwe123', telephone: "(16)3553-5521", address: "Av. São Carlos, 2911 - Centro, São Carlos - SP" },
    { id: 6, role: 'user', profile_image: {}, image_id: 0, name: "Nicolas", lastname: "Leite", email: "gg@t.co", password: 'qwe123', telephone: "(16)3553-5521", address: "Av. São Carlos, 2911 - Centro, São Carlos - SP" },
];

// população inicial de pets
const initialPets = [
    { id: 0, owner_id: 1, image_id: 7, name: "Bilu", species: "Cão - Poodle", age: 4, unit: 'anos' },
    { id: 1, owner_id: 1, image_id: 6, name: "Orley", species: "Pássaro - Calopsita", age: 7, unit: 'anos' },
    { id: 2, owner_id: 1, image_id: 8, name: "Nemo", species: "Peixe - Beta", age: 6, unit: 'meses' },
    { id: 3, owner_id: 1, image_id: 9, name: "Hantaro", species: "Hamster", age: 1, unit: 'anos' },
    { id: 4, owner_id: 1, image_id: 10, name: "Carlos", species: "Cobra", age: 5, unit: 'anos' },
    { id: 5, owner_id: 2, image_id: 7, name: "Nina", species: "Cão - Poodle", age: 2, unit: 'anos' },
    { id: 6, owner_id: 3, image_id: 7, name: "Bastião", species: "Cão - Bulldog", age: 10, unit: 'anos' },
    { id: 7, owner_id: 3, image_id: 7, name: "Zé", species: "Cão - Cocker", age: 17, unit: 'anos' },
    { id: 8, owner_id: 3, image_id: 7, name: "Bráulio", species: "Cão - Pincher", age: 2, unit: 'anos' },
];

const initialProducts = [
    { id: 0, image_id: 12, name: 'Gaiola Aberta', price: 250.0, amount: 50 },
    { id: 1, image_id: 13, name: 'Brinquedo para cães - Osso', price: 25.0, amount: 200 },
    { id: 2, image_id: 14, name: 'Ração para cães - Adulto - Pedigree', price: 100.0, amount: 1337 },
    { id: 3, image_id: 15, name: 'Aquário para peixes - Pequeno', price: 70.0, amount: 20 },
    { id: 4, image_id: 16, name: 'Caixa de areia para gatos', price: 80.0, amount: 30 },
]

const initialServices = [
    { id: 0, image_id: 17, name: 'Banho + Tosa - Gatos', price: 40.0, duration: 1, unit: 'horas' },
    { id: 1, image_id: 18, name: 'Banho + Tosa - Cães', price: 40.0, duration: 1, unit: 'horas' },
    { id: 2, image_id: 19, name: 'Vacina', price: 20.0, duration: 30, unit: 'minutos' },
    { id: 3, image_id: 20, name: 'Atendimento veterinários', price: 150.0, duration: 1, unit: 'horas' },
]

// Caminho para imagens iniciais a serem transformadas em array buffer no indexedDB
const initialImageSrc = [
    'images/profile/default.jpg',
    'images/profile/bernardo.jpg',
    'images/profile/dilvan.jpg',
    'images/profile/giovani.jpg',
    'images/profile/jorge.jpg',
    'images/profile/rafael.jpg',    // 5
    'images/pets/bird.jpg',
    'images/pets/dog.jpg',
    'images/pets/fish.jpg',
    'images/pets/hamster.jpg',
    'images/pets/snake.jpg',    // 10
    'images/pets/default.jpg',
    'images/products/bird-cage.jpg',
    'images/products/dog-bone-toy.jpg',
    'images/products/dog-food.jpg',
    'images/products/fish-bowl.jpg',    // 15
    'images/products/litter-box.jpg',
    'images/services/cat-grooming.jpg',
    'images/services/dog-grooming.png',
    'images/services/vaccine.jpg',
    'images/services/veterinarian.png', // 20
    'images/default.jpg',
];

var db
const dbname = "petshop_Grupo2"
const request = window.indexedDB.open(dbname, 1);

// Initialize user images
addArrayBufferToUsers = () => {
    for (let user of initialUsers) {
        imageToArrayBuffer(initialImageSrc[user.image_id], (arrBuff) => {
            user['profile_image'] = arrBuff;

            // update user image (as array buffer)
            let objectStore = db.transaction(["users"], "readwrite").objectStore("users");
            objectStore.put(user);
        });
    }
}

//erro na request de abrir o db
request.onerror = function(err) {
    console.log("error: " + err);
};
//sucesso na abertura do db
request.onsuccess = function(event) {
    db = request.result;
};
//função chamada quando o bd precisa ser atualizado
//sempre chamada quando o bd é criado, costuma ser usada pra estruturar e dar o povoamento inicial
request.onupgradeneeded = (event) => {
    db = event.target.result;

    const userStore = db.createObjectStore("users", {keyPath: "id"});
    userStore.createIndex('email', 'email', {unique: true});

    const petStore = db.createObjectStore("pets", {keyPath: "id"});
    petStore.createIndex('owner_id', 'owner_id', {unique: false});

    const productStore = db.createObjectStore("products", {keyPath: "id"});
    const serviceStore = db.createObjectStore("services", {keyPath: "id"});

    for (let i in initialUsers) {
        userStore.add(initialUsers[i]);
    }
    for (let i in initialPets) {
        petStore.add(initialPets[i]);
    }
    for (let i in initialProducts) {
        productStore.add(initialProducts[i]);
    }
    for (let i in initialServices) {
        serviceStore.add(initialServices[i]);
    }

    // To save images as Array Buffer in indexedDB
    // Não consegui fazer funcionar dessa formaS
    addArrayBufferToUsers();
}

//limpa o bd
clear = () => {
    db.close();
    const req = indexedDB.deleteDatabase(dbname);
    req.onsuccess = () => {
        console.log("Deleted database successfully");
    };
    req.onerror = () => {
        console.log("Couldn't delete database");
    };
    req.onblocked = () => {
        console.log("Couldn't delete database due to the operation being blocked");
    };    
}
