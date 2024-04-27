$(document).ready(function () {
  var windowWidth = $(window).width();
  if (windowWidth <= 991) {
    $(".offcanvas").addClass("bg-change");
  } else {
    $(".offcanvas").removeClass("bg-change");
  }

  $(window).scroll(function () {
    if (window.scrollY >= 40) {
      $(".navbar").addClass("navbar-scrolled");
    } else {
      $(".navbar").removeClass("navbar-scrolled");
    }
  });
});
