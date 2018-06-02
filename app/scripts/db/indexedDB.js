// população inicial de usuários
const initialUsers = [
    { id: 0, role: 'admin', name: "Adminstrador", lastname: "do Sistema", email: "admin@t.co", password: 'admin', telephone: "(16)98888-8888", address: "Av. Brasil, 1111 - Centro, São Carlos - SP" },
    { id: 1, role: 'user', name: "Rafael", lastname: "Bastos", email: "rb@t.co", password: 'qwe123', telephone: "(16)3553-5521", address: "Av. São Carlos, 2911 - Centro, São Carlos - SP" },
    { id: 2, role: 'user', name: "Dummy", lastname: "User", email: "dummy@t.co", password: 'qwe123', telephone: "(16)3553-5521", address: "Av. São Carlos, 2911 - Centro, São Carlos - SP" },
    { id: 3, role: 'user', name: "Bernardo", lastname: "Duarte", email: "berna@t.co", password: 'qwe123', telephone: "(16)3553-5521", address: "Av. São Carlos, 2911 - Centro, São Carlos - SP" },
    { id: 4, role: 'user', name: "Giovani", lastname: "Ortolani", email: "gepeto@t.co", password: 'qwe123', telephone: "(16)3553-5521", address: "Av. São Carlos, 2911 - Centro, São Carlos - SP" },
    { id: 5, role: 'user', name: "Jorge", lastname: "Vilaça", email: "jorge@t.co", password: 'qwe123', telephone: "(16)3553-5521", address: "Av. São Carlos, 2911 - Centro, São Carlos - SP" },
    { id: 6, role: 'user', name: "Nicolas", lastname: "Leite", email: "gg@t.co", password: 'qwe123', telephone: "(16)3553-5521", address: "Av. São Carlos, 2911 - Centro, São Carlos - SP" },
];

// população inicial de pets
const initialPets = [
    { id: 0, owner_id: 1, name: "Bilu", species: "Cão - Poodle", age: 4, unit: 'anos' },
    { id: 1, owner_id: 1, name: "Orley", species: "Pássaro - Calopsita", age: 7, unit: 'anos' },
    { id: 2, owner_id: 1, name: "Nemo", species: "Peixe - Beta", age: 6, unit: 'meses' },
    { id: 3, owner_id: 1, name: "Hantaro", species: "Hamster", age: 1, unit: 'anos' },
    { id: 4, owner_id: 1, name: "Carlos", species: "Cobra", age: 5, unit: 'anos' },
    { id: 5, owner_id: 2, name: "Nina", species: "Cão - Poodle", age: 2, unit: 'anos' },
    { id: 6, owner_id: 3, name: "Bastião", species: "Cão - Bulldog", age: 10, unit: 'anos' },
    { id: 7, owner_id: 3, name: "Zé", species: "Cão - Cocker", age: 17, unit: 'anos' },
    { id: 8, owner_id: 3, name: "Bráulio", species: "Cão - Pincher", age: 2, unit: 'anos' },
];

var db
const dbname = "petshop_Grupo2"
const request = window.indexedDB.open(dbname, 1);

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

    for (let i in initialUsers) {
        userStore.add(initialUsers[i]);
    }
    for (let i in initialPets) {
        petStore.add(initialPets[i]);
    }
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