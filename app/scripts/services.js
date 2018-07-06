var api = {
    //baseUrl: 'http://192.168.0.114:5000/api/',
    baseUrl: 'http://localhost:5000/api/',
    endpoints: {
        login: 'login'
    }
}

getEndpoint = (key, params = []) => {
    let endpoint = api.baseUrl + api.endpoints[key]

    return endpoint;
}

tryLogin = (username, password) => {
    console.log('tentando login');
    const body = {
        username: username,
        password: password
    }

    $.post(getEndpoint('login'), body, function(data, status) { console.log('status', status, data); })
    .done((data, status) => {
        console.log(data);
        console.log(status);
        let loggedUser = data;
        persistLoggedUser(loggedUser);
        //updateNavbar();
        //location.reload();
    })
    .fail((data, status) => {
        console.log(data);
        console.log(status);
    });
}

persistLoggedUser = (user) => {
    sessionStorage.setItem('loggedUser', JSON.stringify(user));
}
getLoggedUser = () => {
    sessionStorage.getItem('loggedUser')
}