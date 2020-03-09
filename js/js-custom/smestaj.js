//Resize window
window.onresize = function() {
  location.reload();
};
//Maps
var mymap = L.map("mapid").setView([43.9518434, 19.3986583], 12);
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

//jQuery
$(document).ready(function() {
  //Sidenav init
  $(".sidenav").sidenav();

  //Carousel init
  $(".carousel.carousel-slider").carousel({
    //fullWidth: true,
    indicators: true
  });

  //Prevent reload
  $("#booking-form").submit(function(e) {
    e.preventDefault();
  });

  //Dropdown init
  $(".dropdown-trigger").dropdown({
    // hover: true
  });

  //Collapsible init
  $(".collapsible").collapsible();

  //Parallax init
  $(".parallax").parallax();

  //Scrollspy
  $(".scrollspy").scrollSpy({
    scrollOffset: 50
  });

  //Datepicker init
  $(".datepicker").datepicker();

  //Select init
  $("select").formSelect();

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
  //Pretrazi
  $("#search-btn").click(function() {
    $("#search-results").removeClass("hide");
  });
});
