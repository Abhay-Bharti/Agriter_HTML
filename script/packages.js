$(document).ready(function () {
    $(window).scroll(function () {
        if (window.scrollY >= 40) {
            $('.navbar').addClass('navbar-scrolled');
        } else {
            $('.navbar').removeClass('navbar-scrolled');
        }
    });

    $('#list-btn').click(function () {
        $('.ltg').addClass("list");
    });

    $('#grid-btn').click(function () {
        $('.ltg').removeClass("list");
    });

});
