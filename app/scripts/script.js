$(() => {
})

var loggedUser;
const storeUserKey = 'loggedUser'

tryLogin = (email, password) => {
    var request = db.transaction("users").objectStore("users").index('email').openCursor(email);
    
    request.onerror = function(event) {
        alert("Email inválido");
    };
    request.onsuccess = function(event) {
        let cursor = event.target.result;
        if (cursor) {
            if (cursor.value.password == password) {
                loggedUser = cursor.value;
                sessionStorage.setItem(storeUserKey, JSON.stringify(loggedUser));
                updateNavbar();
                location.reload();
            } else {
                alert("Senha inválida");
            }
        } else {
            alert('Email inválido');    
        }
    };
}

checkLogin = () => {
    const user = JSON.parse(sessionStorage.getItem(storeUserKey));
    if (user) {
        loggedUser = user;
    }
    updateNavbar();
}

logOut = () => {
    let conf = confirm("Tem certeza que deseja sair?")
    if (conf){
        sessionStorage.clear();
        loggedUser = undefined;
        updateNavbar();
        location.reload();
    }
}