/**
 * ------------------------------------------------------------------------
 * Carousels
 * ------------------------------------------------------------------------
 */

// Generic Carousel - With data-* options
$(document).ready(function() {

  $(".owl-carousel.carousel-basic").each(function(index) {
    var items = $(this).data('owl-items');
    var margin = $(this).data('owl-margin');
    var nav = $(this).data('owl-nav');
    var loop = $(this).data('owl-loop');
    var autoStart = $(this).data('owl-auto');
    $(this).owlCarousel({ // use $(this)
      items: items,
      margin: margin,
      nav: nav,
      loop: loop,
      autoplay: autoStart,
      autoplayHoverPause: true,
      autoplayTimeout: 9000, // 9s delay if autoplay
    });
  });

});

// Hero Carousel
// DEV NOTE!: important - this has been renamed from .hero to .hero__caro-wrap because the .hero block element class is used on each slide within this
$(document).ready(function() {
  $('.hero__caro-wrap .owl-carousel').owlCarousel({
    autoplay: true,
    items: 1,
    nav: false,
    dots: true,
    loop: true,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplayTimeout: 7000,
    mouseDrag: false,
    onDrag: function(event) {
      // Reset the AutoScroll timeout on drag
      $(event.currentTarget).trigger('stop.owl.autoplay');

      // Prevent vertical scroll when dragging
      document.ontouchmove = function(e) {
        e.preventDefault();
      };
    },
    onDragged: function(event) {
      // Re-enable vertical scroll
      document.ontouchmove = function(e) {
        return true;
      };
    }
  });
});

// Advert carousel - as seen on the My Bag page
$('.advert-carousel').each(function() {
  var rightArrow = $(this).data('right-arrow');
  var leftArrow = $(this).data('left-arrow');
  $(this).owlCarousel({
    items: 1,
    autoplay: true,
    nav: true,
    dots: true,
    loop: true,
    responsive: {
      768: {
        animateOut: 'fadeOut',
        mouseDrag: false,
        touchDrag: false,
      }
    },
    navText: [
      '<img src="' + leftArrow + '"/>',
      '<img src="' + rightArrow + '"/>',
    ],
  });
});

$(function() {

  // slideBy option isn't available for touch trag so override the 
  // drag event and trigger the owl.next()/owl.prev() event
  var transient = {};

  var events = {
    onDrag: onDrag.bind(transient),
    onDragged: onDragged.bind(transient)
  };

  function onDrag(event) {
    this.initialCurrent = event.relatedTarget.current();

    // Reset the AutoScroll timeout on drag
    $(event.currentTarget).trigger('stop.owl.autoplay');

    // Prevent vertical scroll when dragging
    document.ontouchmove = function(e) {
      e.preventDefault();
    };

  }

  function onDragged(event) {
    var owl = event.relatedTarget;
    var draggedCurrent = owl.current();

    if (draggedCurrent > this.initialCurrent) {
      owl.current(this.initialCurrent);
      owl.next();
    } else if (draggedCurrent < this.initialCurrent) {
      owl.current(this.initialCurrent);
      owl.prev();
    }

    // Re-enable vertical scroll
    document.ontouchmove = function(e) {
      return true;
    };
  }

  // Product Carousel
  $('.js-product-list-carousel').each(function() {
    var rightArrow = $(this).data('right-arrow');
    var leftArrow = $(this).data('left-arrow');

    var options = {
      autoplay: true,
      nav: true,
      loop: false,
      autoplayHoverPause: true,
      autoplayTimeout: 7000,
      mouseDrag: true,
      margin: 10,
      items: 1,
      slideBy: 'page',
      navText: [
        '<img src="' + leftArrow + '"/>',
        '<img src="' + rightArrow + '"/>',
      ],
      responsive: {
        425: {
          items: 2,
        },
        520: {
          items: 3,
        },
        1024: {
          margin: 60,
          items: 2,
        },
        1200: {
          items: 3,
        },
        1600: {
          items: 3,
        }
      }
    };
    $(this).owlCarousel(Object.assign(options, events));
  });

  // Monthlys Carousel
  $('.owl-carousel.js-carousel-monthlys').each(function() {
    var rightArrow = $(this).data('right-arrow');
    var leftArrow = $(this).data('left-arrow');

    var options = {
      autoplay: false,
      nav: false,
      loop: true,
      autoplayHoverPause: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      autoplayTimeout: 7000,
      mouseDrag: true,
      margin: 10,
      items: 1,
      slideBy: 'page',
      navText: [
        '<img src="' + leftArrow + '"/>',
        '<img src="' + rightArrow + '"/>',
      ],
      responsive: {
        375: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1024: {
          margin: 20,
          items: 4,
        }
      }
    };
    $(this).owlCarousel(Object.assign(options, events));
  });

  // Brand Carousel
  $('.owl-carousel.js-shop-bybrand-carousel').each(function() {
    var rightArrow = $(this).data('right-arrow');
    var leftArrow = $(this).data('left-arrow');
    var options = {
      dots: true,
      autoplay: false,
      nav: true,
      mouseDrag: true,
      items: 2,
      slideBy: 'page',
      margin: 5,
      navText: [
        '<img src="' + leftArrow + '"/>',
        '<img src="' + rightArrow + '"/>',
      ],
      responsive: {
        480: {
          items: 3,
        },
        768: {
          margin: 5,
          items: 3,
        },
        1024: {
          margin: 5,
          items: 5,
        },
        1200: {
          items: 6,
        },
      }
    };
    $(this).owlCarousel(Object.assign(options, events));

  });

  // Recommended Products Carousel
  $('.js-product-recommended').each(function() {
    var rightArrow = $(this).data('right-arrow');
    var leftArrow = $(this).data('left-arrow');
    var options = {
      items: 1,
      margin: 20,
      nav: false,
      slideBy: 'page',
      responsive: {
        600: {
          items: 2,
        },
        1200: {
          items: 3,
          nav: true,
        }
      },
      navText: [
        '<img src="' + leftArrow + '"/>',
        '<img src="' + rightArrow + '"/>',
      ],
    };
    $(this).addClass('owl-carousel');
    $(this).owlCarousel(Object.assign(options, events));
  });

  // Infinite Product Carousel
  $('.infinite-product-carousel').owlCarousel(Object.assign({
    //center: true,
    items: 2,
    slideBy: 2,
    loop: true,
    dots: true,
    margin: 20,
    responsive: {
      1200: {
        items: 4,
        slideBy: 4
      },
      800: {
        items: 3,
        slideBy: 3
      },
      400: {
        items: 2,
        slideBy: 1
      }
    }
  }, events));

  // Infinite Product Carousel - if less than 6 do not init

  var $productCaroLength = $('.infinite-product-carousel--limit').children().length;

  if ($productCaroLength > 6) {

    $('.infinite-product-carousel--limit').owlCarousel(Object.assign({
      //center: true,
      items: 2,
      slideBy: 2,
      loop: true,
      dots: true,
      margin: 20,
      responsive: {
        1200: {
          items: 4,
          slideBy: 3
        },
        800: {
          items: 3,
          slideBy: 3
        },
        400: {
          items: 2,
          slideBy: 1
        }
      }
    }, events));

  }

  $('#js-essential-products-carousel').each(function() {
    var rightArrow = $(this).data('right-arrow');
    var leftArrow = $(this).data('left-arrow');
    var options = {
      items: 2,
      slideBy: 2,
      loop: true,
      dots: true,
      nav: true,
      margin: 20,
      responsive: {
        1200: {
          items: 4,
          slideBy: 4
        },
        800: {
          items: 3,
          slideBy: 3
        },
        400: {
          items: 2,
          slideBy: 2
        }
      },
      navText: [
        '<img src="' + leftArrow + '"/>',
        '<img src="' + rightArrow + '"/>',
      ],
    };
    $(this).addClass('owl-carousel');
    $(this).owlCarousel(Object.assign(options, events));
  });
  /*
    $('.').owlCarousel(Object.assign({
      //center: true,
      items: 2,
      slideBy: 2,
      loop: false,
      dots: true,
      margin: 20,
      responsive: {
        1200: {
          items: 4,
          slideBy: 3
        },
        800: {
          items: 3,
          slideBy: 3
        },
        400: {
          items: 2,
          slideBy: 1
        }
      }
    }, events));
  */
  // Infinite Product Carousel
  $('.infinite-product-carousel--narrow').owlCarousel(Object.assign({
    //center: true,
    items: 1,
    slideBy: 'page',
    //loop: true,
    dots: true,
    margin: 0,
    responsive: {
      1200: {
        items: 4,
      },
      800: {
        items: 3,
      },
      500: {
        items: 2,
      }
    }
  }, events));

  // Date Picker Carousel
  $('.js-datepicker-carousel').addClass('owl-carousel').owlCarousel({
    dots: true,
    autoplay: false,
    nav: true,
    mouseDrag: true,
    items: 1,
    responsive: {}
  });

  // Kit Select Carousel
  $('.js-kit-select__carousel').each(function() {
    var rightArrow = $(this).data('right-arrow');
    var leftArrow = $(this).data('left-arrow');
    $(this).addClass('owl-carousel').owlCarousel({
      autoplay: false,
      nav: true,
      mouseDrag: true,
      items: 1,
      dots: true,
      navText: [
        '<img src="' + leftArrow + '"/>',
        '<img src="' + rightArrow + '"/>',
      ],
      responsive: {
        600: {
          items: 2,
          slideBy: 2,
        },
        1200: {
          items: 3,
          slideBy: 3,
          dots: false
        }
      }
    });
  });

  // Product Blends Carousel
  $('.js-product-blends-carousel').owlCarousel({
    items: 1,
    margin: 20,
    responsive: {
      900: {
        items: 2,
        slideBy: 2,
      }
    }
  });

  // Product Foundation Carousel
  $(document).ready(function() {
    $('.owl-carousel.js-carousel-product-foundation').each(function() {
      var rightArrow = $(this).data('right-arrow');
      var leftArrow = $(this).data('left-arrow');
      $(this).owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: true,
        navText: [
          '<img src="' + leftArrow + '"/>',
          '<img src="' + rightArrow + '"/>',
        ],
      });
    });
  });

  // How it Works Carousel (Mobile Only)
  function howItWorksCaro() {
    if (window.innerWidth < 767) {
      $('.js-hiw-carousel-mob').addClass('owl-carousel carousel-basic').owlCarousel({
        items: 1,
        margin: 20,
      });
    } else {
      $('.js-hiw-carousel-mob').removeClass('owl-carousel carousel-basic owl-loaded').trigger('destroy.owl.carousel');
    }
  }
  howItWorksCaro();
  $(window).resize(howItWorksCaro);

  // Hero Card Carousel - mob only
  function mobileHeroCardCarousel() {
    if (window.innerWidth < 767) {
      $('#hero-card-carousel').addClass('owl-carousel carousel-basic').owlCarousel({
        items: 1,
        margin: 0,
      });
    } else {
      $('#hero-card-carousel').removeClass('owl-carousel carousel-basic owl-loaded').trigger('destroy.owl.carousel');
    }
  }
  mobileHeroCardCarousel();
  $(window).resize(mobileHeroCardCarousel);

  $('#js-add-products-carousel').each(function() {
    var rightArrow = $(this).data('right-arrow');
    var leftArrow = $(this).data('left-arrow');
    $(this).owlCarousel(Object.assign({
      items: 2,
      slideBy: 2,
      nav: true,
      loop: true,
      dots: true,
      margin: 15,
      navText: [
        '<img src="' + leftArrow + '"/>',
        '<img src="' + rightArrow + '"/>',
      ],
      responsive: {
        1200: {
          items: 5,
          slideBy: 5,
          margin: 20,
        },
        800: {
          items: 4,
          slideBy: 4,
        },
        600: {
          items: 3,
          slideBy: 3,
        }
      }
    }, events));
  });

});
