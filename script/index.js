$(document).ready(function() {
    $(window).scroll(function(){
        if(window.scrollY >= 40){
            $('.navbar').addClass('navbar-scrolled');
        } else {
            $('.navbar').removeClass('navbar-scrolled');
        }
    });
});
