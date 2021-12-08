/**
 * ------------------------------------------------------------------------
 * LRP
 * ------------------------------------------------------------------------
 */

$(function() {

  $("[data-js-lrp-add-product]").on("click", function(e) {
    e.preventDefault();
    // Hide the 'Cancel LRP' link when search is active
    $(".lrp-manage__cancel").hide();
    $("#lrp_products_grid").hide();
    $("#lrp_add_products").fadeIn();

    // Scroll to top of screen
    var progressHeight = 0;
    if ($(window).width() < 768) {
      if ($(".progress-steps__progress").length) {
        progressHeight = $(".progress-steps__progress").height();
      } else {
        progressHeight = 0;
      }

    }

    $([document.documentElement, document.body]).animate({
      scrollTop: $("#lrp_add_products").offset().top - ($("#header").height() + progressHeight + 20)
    }, 500);

  });

  $("[data-js-lrp-add-product-back]").on("click", function(e) {
    e.preventDefault();
    // Show the 'Cancel LRP' link when search is inactive
    $(".lrp-manage__cancel").show();
    $("#lrp_add_products").hide();
    $("#lrp_products_grid").fadeIn();

    resestLrpView();

  });

  // Search
  $("[data-js-product-search], .lrp-add-products__switch--search").on("focus", function(e) {
    e.preventDefault();

    if (!$("[data-js-product-search-results]").is(':visible')) {
      $("[data-js-product-search-history]").css('display', 'flex');
      $(this).parent().next('.search__button-close').show();
      //console.dir($(this).parent().next('.search__button-close'));
      ///$(this).closest('.search__button-close').show();
    }

    // Update the DOM
    $(".lrp-add-products__browse-section, .lrp-add-products__products, .bag__wrapper, .lrp-add-products__products").hide();
    $(".lrp-add-products__search").fadeIn();

    // Show the Browse Link
    $(".lrp-add-products__switch--browse").show();
    $(".lrp-add-products__switch--search").hide();

    // Scroll to top of screen
    var progressHeight = 0;
    if ($(window).width() < 768) {
      if ($(".progress-steps__progress").length) {
        progressHeight = $(".progress-steps__progress").height();
      } else {
        progressHeight = 0;
      }
    }
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#lrp_add_products").offset().top - ($("#header").height() + progressHeight + 20)
    }, 500);

  });

  // Browse
  $(".lrp .shop-bybrand__carousel-item, .lrp-add-products__switch--browse").on("click", function(e) {
    e.preventDefault();

    // Update the DOM
    $(".lrp-add-products__or, .lrp-add-products__browse-section .h5, .lrp-add-products__search, .search-results.search-results__product").hide();
    $("[data-js-product-search]").val("");
    $(".lrp-add-products__browse-section:not(.lrp-add-products__or)").fadeIn();

    // Scroll to top of screen
    var progressHeight = 0;
    var titleOffset = 50;
    if ($(window).width() > 768) {
      titleOffset = 80;
    }
    if ($(window).width() < 768) {
      if ($(".progress-steps__progress").length) {
        progressHeight = $(".progress-steps__progress").height();
        titleOffset = progressHeight + 60;
      } else {
        progressHeight = 0;
      }
    }
    // Carousel Item Click Event & Scroll depending on
    if ($(this).hasClass("shop-bybrand__carousel-item")) {
      $(".lrp-add-products__products").fadeIn(); // show products & scroll to them
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".lrp-add-products__products").offset().top - titleOffset
      }, 500);
    } else { // Link Item Click Event // dont show products - alt scroll
      $([document.documentElement, document.body]).animate({
        scrollTop: $("#lrp_add_products").offset().top - ($("#header").height() + progressHeight + 20)
      }, 500);
    }

    // Show the Browse Link
    $(".lrp-add-products__switch--browse").hide();
    $(".lrp-add-products__switch--search").show();

  });

  $('.search__button-close').on('click', function(e) {
    e.preventDefault();

    $('.search-results.search-results__product').hide();
    $(".lrp-add-products__browse-section").hide();
    $("[data-js-product-search]").val("");
    $(".bag__wrapper").fadeIn();
  });

  var historyLinkClicked = false;
  $("[data-js-product-search]").on("blur", function(e) {
    e.preventDefault();

    if (historyLinkClicked) // cancel the blur event
    {
      historyLinkClicked = false;
    } else // blur event is okay
    {
      $("[data-js-product-search-history]").css('display', 'none');
      if (!$("[data-js-product-search-results]").is(':visible')) {
        $(".lrp-add-products__browse-section").fadeIn();
        $(".bag__wrapper").fadeIn();
        $('.search__button-close').hide();
      }
    }
  });

  $("[data-js-product-search-history-link]").on("mousedown", function(e) {
    historyLinkClicked = true;
  });

  $("[data-js-product-search-history-link]").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    $("[data-js-product-search-history]").css('display', 'none');
    $("[data-js-product-search-results]").css('display', 'block');
    $("[data-js-product-search]").val($(this).text());
  });

  $("[data-js-product-search]").on("keyup", function(e) {
    e.preventDefault();

    if ($(this).val() === "") {
      $("[data-js-product-search-history]").css('display', 'flex');
      $("[data-js-product-search-results]").css('display', 'none');
    } else {
      $("[data-js-product-search-history]").css('display', 'none');
      $(this).closest('.search').find('[data-js-product-search-results]').css('display', 'block');
      $("[data-js-product-search-results]").css('display', 'block');
    }

  });

  $(".lrp [data-js-loyalty-add]").on("click", function(e) {
    e.preventDefault();
    $("#lrp_products_grid").append(LRP_PRODUCT_CARD_HTML); // update JS TPL

    // loader icon to item in bag
    $("#lrp_products_grid .product-lrp:last-child [data-bag-loader]").addClass('bag__loader--active');
    setTimeout(function() {
      $('[data-bag-loader]').removeClass('bag__loader--active');
    }, 5500);

    // loader icon - order summary
    $('[data-order-summary-loader]').addClass('order-summary__loader--active');
    setTimeout(function() {
      $('[data-order-summary-loader]').removeClass('order-summary__loader--active');
    }, 5500);

    setTimeout(function() {
      $("#lrp_add_products").hide();
      $("#lrp_products_grid").fadeIn();

      $('html, body').animate({
        scrollTop: $("#lrp_products_grid").offset().top - 100
      }, 500);

      resestLrpView();
    }, 2500);
  });

  // Remove Product
  $(document).on("click", '[data-js-lrp-remove-product]', function(e) {
    e.preventDefault();
    // Gets the number of closable products
    //var remainingProductsNo = $('.product-lrp__remove').length;
    var remainingProductsNo = $(".product__actions--rmv-btn").length;

    // Checks if there is one remaining closable product
    if (remainingProductsNo > 1) {
      $element = $(this).closest(".product");
      $element.delay(1000).fadeOut(500, function() {
        $element.remove();
      });

      // loader icon outer
      // $('[data-bag-loader-outer]').addClass('bag__loader--active');
      // setTimeout(function(){
      //   $('[data-bag-loader-outer]').removeClass('bag__loader--active');
      // }, 1500);

      // loader icon local
      $element.find('[data-bag-loader]').addClass('bag__loader--active');
      setTimeout(function() {
        $element.find('[data-bag-loader]').removeClass('bag__loader--active');
      }, 1500);

      // loader icon - order summary
      $('[data-order-summary-loader]').addClass('order-summary__loader--active');
      setTimeout(function() {
        $('[data-order-summary-loader]').removeClass('order-summary__loader--active');
      }, 1500);

    } else {
      // Shows 'Don't Miss Out' modal if it exists
      if ($('#js-ltr-dmo-modal').length) {
        $('#js-ltr-dmo-modal').modal({
          selector: {
            close: '.close',
            approve: '.ok',
            deny: '.cancel'
          },
        }).modal('show');
      }
    }
  });

  $("[data-js-product-add-to-bag]").on("click", function(e) {
    e.preventDefault();

    $('.search__button-close').css('display', 'none');
    resestLrpView();
  });

  function resestLrpView() {

    $("[data-js-product-search-history]").css('display', 'none');
    $(".lrp-add-products__browse-section").show();
    $("[data-js-product-search-history]").css('display', 'none');
    $("[data-js-product-search-results]").css('display', 'none');
    $(".lrp-add-products__search").show();
    $(".lrp-add-products__or").show();
    $(".lrp-add-products__browse-section h5").show();
    $(".lrp-add-products__products").hide();
    $("[data-js-product-search]").val("");
    $(".bag__wrapper").fadeIn();
    $(".lrp-manage__cancel").show();
    $(".lrp-add-products__switch--browse").hide();
    $(".lrp-add-products__switch--search").hide();

  }

  // LRP Manage tabs
  if ($('.lrp-manage-tabs__items').length) {
    $('.lrp-manage-tabs .ui .item').tab();
    $('.js-lrp-manage-tabs__item').on('click', function() {
      if ($(window).width() < 1024) {
        $([document.documentElement, document.body]).animate({
          scrollTop: $(".bag__toggle").offset().top - 140
        }, 1000);

      }
    });
  }

  // Toggle button - as seen on the My Bag page
  var toggleTriggerElem = $("#toggle-lrp-points"),
    bagItemsContainer = $("#lrp_products_grid"),
    pointsElems = bagItemsContainer.find(".product-lrp__points"),
    pointsElemsPromo = bagItemsContainer.find(".product-lrp__points--promo"),
    orderSummaryElements = $("[data-js-points-toggle]");

  function togglePoints() {
    if (toggleTriggerElem.length > 0) {
      if (toggleTriggerElem.is(':checked')) {
        $(".product-lrp__inner > .product-lrp__details__footer:not(.product-lrp__details__footer--promo)").hide();
        bagItemsContainer.addClass("bag__items--points-active");
        pointsElems.slideDown(100);
        pointsElemsPromo.slideDown(100);
        $('.bag__toggle-note').slideDown(300);
        orderSummaryElements.slideDown(100);
      } else {
        $(".product-lrp__inner > .product-lrp__details__footer:not(.product-lrp__details__footer--promo)").show();
        bagItemsContainer.removeClass("bag__items--points-active");
        pointsElems.slideUp(100);
        pointsElemsPromo.slideUp(100);
        $('.bag__toggle-note').slideUp(300);
        orderSummaryElements.slideUp(100);
      }
    }
  }

  $(document).ready(function() {
    togglePoints();

    $("#js-toggle-lrp-switch").checkbox({
      onChange: function() {
        togglePoints();
      },
    });
  });

  // // 'Don't miss out' modal (can be found in LRP Manage)
  $('#js-ltr-dmo-modal.demo').modal({
    selector: {
      close: '.close',
      approve: '.ok',
      deny: '.cancel'
    },
  }).modal('show');

  // // 'Don't miss out' modal (with products) - appears on LRP Manage 2+
  $('[data-js-cancel-loyalty-order]').on('click', function(e) {
    e.preventDefault();

    $('#js-ltr-dmo-modal-products').modal('show');
  });

  // // 'Cancelling your Loyalty Order' modal (with products) - appears on LRP Manage Single
  $('[data-js-cancel-loyalty-order-single]').on('click', function(e) {
    e.preventDefault();

    $('#js-ltr-dmo-modal-cancel').modal('show');
  });

  // // 'Cancelling your Loyalty Order' modal (with products) - appears on LRP Manage Single
  $('[data-js-cancel-loyalty-order-multi]').on('click', function(e) {
    e.preventDefault();
    $('#js-ltr-dmo-modal-multi-cancel').modal('show');
  });

  // // 'Save' modal - .init class to demo
  $('#js-lrp-manage-save-modal.init').modal({
    selector: {
      close: '.close',
      approve: '.ok',
      deny: '.cancel'
    },
  }).modal('show');

  // Mobile Products Carousel - mob only
  function mobileProductsCarousel() {
    if (window.innerWidth < 767) {
      $('[data-js-mobile-products-carousel]').addClass('owl-carousel carousel-basic').owlCarousel({
        items: 2,
        margin: 0,
      });
    } else {
      $('[data-js-mobile-products-carousel]').removeClass('owl-carousel carousel-basic owl-loaded').trigger('destroy.owl.carousel');
    }
  }
  mobileProductsCarousel();
  $(window).resize(mobileProductsCarousel);

  // Show/hide rewards toggle - Seen on mobile only
  $(".rewards").each(function(i, element) {
    var $this = $(element);
    var $rewardsItemsContainer = $this.find("[data-js-show-rewards-container]"),
      $rewardsItemsTrigger = $this.find("[data-js-show-rewards-trigger]"),
      $hideText = $rewardsItemsTrigger.data("hide-text");
    $originalText = $rewardsItemsTrigger.text();

    $rewardsItemsTrigger.on("click", function(e) {
      e.preventDefault();

      if ($rewardsItemsContainer.hasClass("u--hidden-sm")) {
        $rewardsItemsContainer.removeClass("u--hidden-sm");
        $(this).text($hideText);
      } else {
        $rewardsItemsContainer.addClass("u--hidden-sm");
        $(this).text($originalText);
      }
    });
  });

});

$(document).ready(function() {
  $('.orders__table').DataTable({
    paging: false,
    searching: false,
    info: false
  });
});
