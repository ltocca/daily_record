$(document).ready(function(){
    $(".hamburger").on("click", function() {
        $(".hamburger").toggleClass("close")
        $("#hidden_menu").toggleClass("mobile")
        $("body").toggleClass("mobile")
        $(".menu").toggleClass("mobile")
        $(".secondary_nav").toggleClass("mobile")
        // $(".submenu").toggleClass("mobile")
        $(".search").toggleClass("mobile")
        $(".social").toggleClass("mobile")
        $(".logo").toggleClass("mobile")
        return false;
    });
});

$(document).ready(function(){
    $("#news_menu").on("click", function() {
        $("#news_submenu").toggleClass("mobile")
        $("#news_menu").toggleClass("mobile")

        return false;
    });
    $("#football_menu").on("click", function() {
        $("#football_submenu").toggleClass("mobile")
        return false;
    });
    $("#sport_menu").on("click", function() {
        $("#sport_submenu").toggleClass("mobile")
        return false;
    });
    $("#celeb_menu").on("click", function() {
        $("#celeb_submenu").toggleClass("mobile")
        return false;
    });
    $("#more_menu").on("click", function() {
        $("#more_submenu").toggleClass("mobile")
        return false;
    });
});