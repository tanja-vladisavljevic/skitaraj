//Resize window
window.onresize = function() {
  location.reload();
};

//check for Navigation Timing API support

if (window.performance) {
  console.info("window.performance works fine on this browser");
}
if (performance.navigation.type == 1) {
  console.info("This page is reloaded");
} else {
  console.info("This page is not reloaded");
  $(document).ready(function() {
    //  Modal init
    $(".modal").modal({
      dissmissable: false
    });
    $(".modal").modal("open");
  });
}

//jQuery
$(document).ready(function() {
  //Sidenav init
  $(".sidenav").sidenav();

  //Carousel init
  $(".carousel.carousel-slider").carousel({
    //fullWidth: true,
    indicators: true
  });

  //Dropdown init
  $(".dropdown-trigger").dropdown({
    // hover: true
  });

  //Modal init
  // $(".modal").modal({
  //   dissmissable: false
  // });
  // $(".modal").modal("open");

  //Collapsible init
  $(".collapsible").collapsible();

  //Scrollspy
  $(".scrollspy").scrollSpy({
    scrollOffset: 50
  });

  //Table of contents
  var headerHeight = $(".section-header").outerHeight();
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= headerHeight) {
      $("#toc").addClass("pinned");
    } else {
      $("#toc").removeClass("pinned");
    }
  });
});
