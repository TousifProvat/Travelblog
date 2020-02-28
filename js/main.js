const responsive = {
  0: {
    items: 1
  },
  320: {
    items: 1
  },
  560: {
    items: 2
  },
  960: {
    items: 3
  }
};

$(document).ready(function() {
  //owl-carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    responsive: responsive
  });

  //click-to-scroll-top

  $(".move-up span").click(function() {
    $("html,body").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });

  $(".burger").click(function() {
    $(".nav-links").toggleClass("nav-active");
    $(".burger").toggleClass("toggle");
  });

  // animation on scroll

  AOS.init();
});
