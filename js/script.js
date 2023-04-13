/* $(document).ready(function () {
    $(".toggle-mnu").on("click", function () {
        $(this).toggleClass("on");
        $("#hide").toggleClass("menu-mobile");
        return false;
    });
    $(".cross_news").on("click", function () {
        $(this).toggleClass("on_m");
        $("#submenu_m_off_news").toggleClass("submenu_m");
        return false;
    });
    $(".cross_fb").on("click", function () {
        $(this).toggleClass("on_m");
        $("#submenu_m_off_fb").toggleClass("submenu_m");
        return false;
    });
    $(".cross_sport").on("click", function () {
        $(this).toggleClass("on_m");
        $("#submenu_m_off_sport").toggleClass("submenu_m");
        return false;
    });
    $(".cross_tv").on("click", function () {
        $(this).toggleClass("on_m");
        $("#submenu_m_off_tv").toggleClass("submenu_m");
        return false;
    });
}); */

$(document).ready(function(){
    $("#hamburger").on("click", function() {
        $("#hidden_menu").toggleClass("side-menu")
        $("#navbar").toggleClass("toBlur")
        $("#news").toggleClass("toBlur")
        $("#overlay").toggleClass("grayOverlay")
        return false;
    });
});

$(document).ready(function(){
    $("#cross").on("click", function() {
        $("#hiddenMenu").toggleClass("side-menu")
        $("#page").toggleClass("toBlur")
        $("#overlay").toggleClass("grayOverlay")
        return false;
    });
});