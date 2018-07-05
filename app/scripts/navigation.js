$(() => {
    // default page to load
    $("#page-content").load("home.html");
    //checkLogin();
    updateNavbar();

    // Set mobile sidenav
    $('.sidenav').sidenav();

    // load pages dynamically
    $(".nav-home").click(() => {
        console.log(1231);
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

updateNavbar = () => {
    $(".nav-home").show();
    $(".nav-management").hide();

    //if (loggedUser) {
        $(".nav-account").show();
        $(".nav-store").show();
        $(".nav-services").show();
        $(".nav-cart").show();
        $(".nav-login").hide();
        
    //    if (loggedUser.role == 'admin') {
            $(".nav-management").show();
    //    }
        
    //    countCartProductsByUserId(loggedUser.id);
    //} else {
    //    $(".nav-store").hide();
    //    $(".nav-services").hide();
    //    $(".nav-account").hide();
    //    $(".nav-cart").hide();
    //    $(".nav-login").show();
    //}

}
