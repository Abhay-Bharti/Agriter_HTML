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

  $(".SignUp").click(function () {
    var formHTML = `<form action="Login.html" ><div class="mb-3 form-group">   <label for="name" class="form-label">Name</label>   <input type="text" class="form-control" id="name" placeholder="Enter your name" required></div><div class="mb-3 form-group">   <label for="email" class="form-label">Email</label>   <input type="email" class="form-control" id="email" placeholder="Enter your email" required></div><div class="mb-3 form-group">   <label for="phone" class="form-label">Phone Number</label>   <input type="tel" class="form-control" id="phone" placeholder="Enter your phone number" required></div><div class="mb-3 form-group">   <label for="address" class="form-label">Address</label>   <textarea class="form-control" id="address" placeholder="Enter your address" rows="3" required></textarea></div><div class="mb-3 form-group">   <label for="password" class="form-label">Password</label>   <input type="password" class="form-control" id="password" placeholder="Enter your password" required></div><div class="mb-3 form-group form-check">   <input type="checkbox" class="form-check-input" id="exampleCheck1" required>   <label class="form-check-label" for="exampleCheck1">I agree to Terms & Conditions.</label></div><button type="submit" class="btn btn-primary">Submit</button></form>`;

    $(".background-right form").hide(1000);

    setTimeout(function () {
      $(".background-right form").html(formHTML).show(1000);
    }, 2000);
  });
});
