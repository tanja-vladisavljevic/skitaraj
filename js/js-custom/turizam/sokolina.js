//Resize window
window.onresize = function() {
  location.reload();
};
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

  //Collapsible init
  $(".collapsible").collapsible();

  //Scrollspy
  $(".scrollspy").scrollSpy({
    scrollOffset: 50
  });

  //Materialbox init
  $(".materialboxed").materialbox();

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
