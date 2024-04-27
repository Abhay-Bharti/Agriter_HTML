$(document).ready(function () {
  $(window).scroll(function () {
    if (window.scrollY >= 40) {
      $(".navbar").addClass("navbar-scrolled");
    } else {
      $(".navbar").removeClass("navbar-scrolled");
    }
  });

  var windowWidth = $(window).width();
  if (windowWidth <= 991) {
    $(".offcanvas").addClass("bg-change");
  } else {
    $(".offcanvas").removeClass("bg-change");
  }

  $("#list-btn").click(function () {
    $(".ltg").addClass("list");
  });

  $("#grid-btn").click(function () {
    $(".ltg").removeClass("list");
  });
});
