var api = {
    //baseUrl: 'http://192.168.0.114:5000/api/',
    baseUrl: 'http://localhost:5000/api/',
    endpoints: {
        // user services
        login: ':username/:password/login',
        countUsers: 'countUsers',
        getUsers: 'getAllUsers',
        removeUser: 'removeUser/:id',
        // pet service
        getUserPets: ':userId/getPetsByUser',
        // product services
        getStoreProducts: 'getProducts',
        countStoreProducts: 'countProducts',
        // services services
        getServices: 'getServices',
        countServices: 'countServices',
        // cart services
    }
}

getEndpoint = (key) => {
    let endpoint = api.baseUrl + api.endpoints[key]

    return endpoint;
}

tryLogin = (username, password) => {
    let url = getEndpoint('login').split(':username').join(username).split(':password').join(password);
    const body = {
        'username': username,
        'password': password
    }

    $.ajax({
        type: "POST",
        url: url,    
        processData: false,
        data: body,
        success: (data, status) => {
            console.log(data);
            let loggedUser = data;
            persistLoggedUser(loggedUser);
            location.reload();
        },
        error: (data) => {
            let error = getError(data);
            alert(error.message);
        },
        dataType: "json"
    });

}

countUsers = (cb) => {
    $.ajax({
        type: "GET",
        url: getEndpoint('countUsers'),
        success: (data, status) => {
            cb(data)
        },
        error: (data) => {
            let error = getError(data);
            alert(error.message);
        },
        dataType: "json"
    })
}

getUsers = () => {
    $.ajax({
        type: "GET",
        url: getEndpoint('getUsers'),
        success: (data, status) => {
            console.log('status', status, data);
        },
        dataType: "json"
    })
}

removeUser = (user) => {
    let url = getEndpoint('removeUser').split(':id').join(user.id);
    $.ajax({
        type: "DELETE",
        url: url,
        success: (data, status) => {
            console.log('status', status, data);
        },
        dataType: "json"
    })
}

getUserPets = (user, cb) => {
    let url = getEndpoint('getUserPets').split(':userId').join(user._id);
    $.ajax({
        type: "GET",
        url: url,
        success: (data) => {
            cb(data)
        },
        error: (data) => {
            let error = getError(data);
            alert(error.message);
        },
        dataType: "json"
    });
}

getStoreProducts = (cb) => {
    $.ajax({
        type: "GET",
        url: getEndpoint('getStoreProducts'),
        success: (data, status) => {
            cb(data);
        },
        error: (data) => {
            let error = getError(data);
            alert(error.message);
        },
        dataType: "json"
    });
}

countStoreProducts = (cb) => {
    $.ajax({
        type: "GET",
        url: getEndpoint('countStoreProducts'),
        success: (data, status) => {
            cb(data)
        },
        error: (data) => {
            let error = getError(data);
            alert(error.message);
        },
        dataType: "json"
    })
}

getServices = (cb) => {
    $.ajax({
        type: "GET",
        url: getEndpoint('getServices'),
        success: (data) => {
            cb(data);
        },
        error: (data) => {
            let error = getError(data);
            alert(error.message);
        },
        dataType: "json"
    });
}

countServices = (cb) => {
    $.ajax({
        type: "GET",
        url: getEndpoint('countServices'),
        success: (data) => {
            cb(data)
        },
        error: (data) => {
            let error = getError(data);
            alert(error.message);
        },
        dataType: "json"
    })
}

persistLoggedUser = (user) => {
    sessionStorage.setItem('loggedUser', JSON.stringify(user));
}
getLoggedUser = () => {
    return JSON.parse(sessionStorage.getItem('loggedUser'));
}
getError = (data) => {
    return JSON.parse(data.responseText);
}