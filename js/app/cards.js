/**
 * ------------------------------------------------------------------------
 * Cards
 * ------------------------------------------------------------------------
 */

$(document).ready(function() {

  // Initialze the Cards Carousel
  initCardsCarousel($(document).width());

  $(window).resize(function() {
    // Initialze the Cards Carousel on resize
    initCardsCarousel($(document).width());
  });

  function initCardsCarousel(viewWidth) {

    var owl = $('.owl-carousel.cards-list').owlCarousel({
      loop: false,
      margin: 10,
      nav: true,
      center: false,
      responsive: {
        0: {
          loop: true,
          center: true,
          margin: 10,
          items: 3,
          nav: false,
          dots: false
        },
        767: {
          loop: true,
          center: true,
          margin: 10,
          items: 5,
          nav: false,
          dots: false
        }
      }
    });

    if (viewWidth > 1024) {
      // remove owl carousel for large screens
      owl.addClass('off').trigger('destroy.owl.carousel');
    }
  }

  //   $('.owl-carousel.product-list').owlCarousel({
  //     loop: false,
  //     margin: 10,
  //     nav:true,
  //     center:false,
  //     responsive:{
  //         0:{
  //             loop:true,
  //             center:true,
  //             margin:60,
  //             items:3,
  //             nav:false,
  //             dots: false
  //         },
  //         600:{
  //             items:4
  //         },
  //         1000:{
  //             items:4
  //         }
  //     }
  // });

  // Events
  $(".owl-carousel.cards-event.cards-slider").owlCarousel({
    //stagePadding: 100,
    loop: false,
    margin: 20,
    nav: false,
    autoplay: false,
    dots: false,
    autoWidth: true,
    responsive: {
      0: {
        items: 1
      },
      360: {
        items: 1
      },
      600: {
        items: 2
      },
      767: {
        items: 2
      },
      1024: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });

  $('.owl-carousel.cards-slider-wide').owlCarousel({
    loop: true,
    center: false,
    margin: 20,
    items: 1,
    nav: false,
    dots: true,
    autoWidth: false,
    autoHeight: true,
    responsive: {
      1000: {
        items: 2,
        nav: true,
      }
    },
    // onInitialized: (event) => normalizeItemHeight(event),
    // onResized: (event) => normalizeItemHeight(event),
    onInitialized: function(event) {
      normalizeItemHeight(event);
    },
    onResized: function(event) {
      normalizeItemHeight(event);
    },

  });

  function normalizeItemHeight(event) {
    var maxHeight = 0;
    var $container = $(event.target);
    var $items = $container.find('.owl-item');

    $items.find('.card').height('auto');

    $items.each(function() {
      var h = $(this).height();
      if (h > maxHeight) {
        maxHeight = h;
      }
    });

    $items.find('.card').height(maxHeight);
  }

});
