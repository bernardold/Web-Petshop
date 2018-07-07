var api = {
    //baseUrl: 'http://192.168.0.114:5000/api/',
    baseUrl: 'http://localhost:5000/api/',
    endpoints: {
        // user services
        login: ':username/:password/login',
        countUsers: 'countUsers',
        getUsers: 'getAllUsers',
        removeUser: ':id/removeUser',
        // pet service
        getUserPets: ':userId/getPetsByUser',
        // product services
        getStoreProducts: 'getProducts',
        getStoreProduct: ':id/getProductById',
        countStoreProducts: 'countProducts',
        removeStoreProduct: ':id/removeProduct',
        // services services
        getServices: 'getServices',
        countServices: 'countServices',
        removeService: ':id/removeService',
        // cart services
        addToCart: ':userId/:productId/:productName/:productPrice/addToCart',
        countCartProducts: ':userId/countCartProductsByUserId',
        getCartProducts: ':userId/getCartProductsByUserId',
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
        success: (data) => {
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

// User
countUsers = (cb) => {
    $.ajax({
        type: "GET",
        url: getEndpoint('countUsers'),
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

getAllUsers = (cb) => {
    $.ajax({
        type: "GET",
        url: getEndpoint('getUsers'),
        success: (data) => {
            cb(data);
        },
        error: (data) => {
            let error = getError(data);
            alert(error.message);
        },
        dataType: "json"
    })
}

removeUser = (userId, cb) => {
    let url = getEndpoint('removeUser').split(':id').join(userId);
    $.ajax({
        type: "DELETE",
        url: url,
        success: (data) => {
            cb(data);
        },
        error: (data) => {
            let error = getError(data);
            alert(error.message);
        },
        dataType: "json"
    })
}

// Pets
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

// Products
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

getStoreProduct = (productId, cb) => {
    let url = getEndpoint('getStoreProduct').split(':id').join(productId);
    $.ajax({
        type: "GET",
        url: url,
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

countStoreProducts = (cb) => {
    $.ajax({
        type: "GET",
        url: getEndpoint('countStoreProducts'),
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

removeStoreProduct = (productId, cb) => {
    let url = getEndpoint('removeStoreProduct').split(':id').join(productId);
    $.ajax({
        type: "DELETE",
        url: url,
        success: (data) => {
            cb(data);
        },
        error: (data) => {
            let error = getError(data);
            alert(error.message);
        },
        dataType: "json"
    })
}

// Services
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

removeService = (serviceId, cb) => {
    let url = getEndpoint('removeService').split(':id').join(serviceId);
    $.ajax({
        type: "DELETE",
        url: url,
        success: (data) => {
            cb(data);
        },
        error: (data) => {
            let error = getError(data);
            alert(error.message);
        },
        dataType: "json"
    })
}

// cart
addToCart = (userId, product, cb) => {
    let url = getEndpoint('addToCart').split(':userId').join(userId).split(':productId').join(product._id).split(':productName').join(product.name).split(':productPrice').join(product.price);
    $.ajax({
        type: "PUT",
        url: url,
        success: (data) => {
            cb(data);
        },
        error: (data) => {
            let error = getError(data);
            alert(error.message);
        },
        dataType: "json"
    })
}

countCartProductsByUserId = (userId, cb) => {
    let url = getEndpoint('countCartProducts').split(':userId').join(userId)
    $.ajax({
        type: "GET",
        url: url,
        success: (data) => {
            cb(data);
        },
        error: (data) => {
            let error = getError(data);
            alert(error.message);
        },
        dataType: "json"
    })
}

getCartProductsByUserId = (userId, cb) => {
    let url = getEndpoint('getCartProducts').split(':userId').join(userId)
    $.ajax({
        type: "GET",
        url: url,
        success: (data) => {
            cb(data);
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