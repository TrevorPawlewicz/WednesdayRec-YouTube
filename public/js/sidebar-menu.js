//---------JQuery-----------------------------------------------------
$(document).ready(function(){

    // close the open sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // open the sidebar menu:
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
});





























//-----------------------------------------
console.log("---> javascript loaded! <---");
