$(() => {
    // load pages dynamically
    $(".nav-home").click(() => {
        $("#page-content").load("home.html", () => reload());
    });
    $(".nav-store").click(() => {
        $("#page-content").load("store.html", () => reload());
    });
    $(".nav-services").click(() => {
        $("#page-content").load("services.html", () => reload());
    });
    $(".nav-management").click(() => {
        $("#page-content").load("management.html", () => reload());
    });
    $(".nav-manage-users").click(() => {
        $("#page-content").load("management-users.html", () => reload());
    });
    $(".nav-manage-produts").click(() => {
        $("#page-content").load("management-products.html", () => reload());
    });
    $(".nav-manage-services").click(() => {
        $("#page-content").load("management-services.html", () => reload());
    });
    $(".nav-account").click(() => {
        $("#page-content").load("account.html", () => reload());
    });
    $(".nav-cart").click(() => {
        $("#page-content").load("shopping-cart.html", () => reload());
    });
    $(".nav-login").click(() => {
        $("#page-content").load("login.html", () => reload());
    });
})

reload = () => $.getScript("scripts/navigation.js");