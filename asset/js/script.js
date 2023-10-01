$("document").ready(function () {

  // mobile menu
  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
 });


  // roadmap-carousel
  $(".roadmap-carousel").owlCarousel({
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
  // team-members-items
  $(".team-members-items").owlCarousel({
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
  // bitastar-carousel
  $(".bitastar-carousel").owlCarousel({
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
});

window.addEventListener("load", (event) => {
  var Scrollbar = window.Scrollbar;
  Scrollbar.init(document.querySelector("#my-scrollbar"), {
    damping: 0.05,
    thumbMinSize: 0.05,
    renderByPixels: false,
    alwaysShowTracks: true,
    continuousScrolling: false,
  });
});

// mobile menu
const menuBars = document.querySelector(".menu-bars");
const minMenu = document.querySelector(".min-menu");
menuBars.addEventListener("click", function () {
  menuBars.classList.toggle("active");
  minMenu.classList.toggle("active");
});

// Cursor
// let cursor = document.querySelector(".cursor");
// document.addEventListener("mousemove", (e) => {
//   cursor.style.left = e.pageX - 10 + "px";
//   cursor.style.top = e.pageY - 10 + "px";
// });
// document.addEventListener("click", () => {
//   cursor.classList.add("expend");
//   setTimeout(() => {
//     cursor.classList.remove("expend");
//   }, 500);
// });
