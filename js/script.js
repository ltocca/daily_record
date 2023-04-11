$(document).ready(function () {
    $(".toggle-mnu").on("click", function () {
        $(this).toggleClass("on");
        $("hidden_menu").toggleClass("menu-mobile");
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
});