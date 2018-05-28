$(() => {
    
    // load pages dynamically
    $(".nav-home").click(() => {
        $("#page-content").load("home.html");
    });
    $(".nav-store").click(() => {
        $("#page-content").load("store.html");
    });
    $(".nav-services").click(() => {
        $("#page-content").load("services.html");
    });
    $(".nav-management").click(() => {
        $("#page-content").load("management.html");
    });
    $(".nav-manage-users").click(() => {
        $("#page-content").load("management-users.html");
    });
    $(".nav-manage-produts").click(() => {
        $("#page-content").load("management-products.html");
    });
    $(".nav-manage-services").click(() => {
        $("#page-content").load("management-services.html");
    });
    $(".nav-account").click(() => {
        $("#page-content").load("account.html");
    });
    $(".nav-cart").click(() => {
        $("#page-content").load("shopping-cart.html");
    });
    $(".nav-login").click(() => {
        $("#page-content").load("login.html");
    });
})
