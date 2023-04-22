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
    $("#text_menu").on("click", function() {
        $("#text_submenu").toggleClass("mobile")
        $("#text_menu").toggleClass("mobile")
        return false;
    });
    $("#issues_menu").on("click", function() {
        $("#issues_submenu").toggleClass("mobile")
        $("#issues_menu").toggleClass("mobile")
        return false;
    });
    $("#topic_menu").on("click", function() {
        $("#topic_submenu").toggleClass("mobile")
        $("#topic_menu").toggleClass("mobile")
        return false;
    });
    $("#motives_menu").on("click", function() {
        $("#motives_submenu").toggleClass("mobile")
        $("#motives_menu").toggleClass("mobile")
        return false;
    });
    $("#words_menu").on("click", function() {
        $("#words_submenu").toggleClass("mobile")
        $("#words_menu").toggleClass("mobile")
        return false;
    });
});

