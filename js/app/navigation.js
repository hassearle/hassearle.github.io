/**
 * ------------------------------------------------------------------------
 * Navigation
 * ------------------------------------------------------------------------
 */

$(document).ready(function() {

  // Toggle Nav on Click - Help
  $('.js-help-dropdown, .js-nav-close').click(function(event) {
    event.preventDefault();

    $("#header_search").removeClass("open");
    $('#site-wrapper').removeClass('show-search');
    var reopen = $("#offcanvas-menu").hasClass("cart-dropdown-active") || $("#offcanvas-menu").hasClass("nav-dropdown-active") || $("#offcanvas-menu").hasClass("account-dropdown-active");
    var timeout = reopen ? 300 : 0;

    toggleNav($(this), reopen, "right");
    setTimeout(function() {
      $('#offcanvas-menu').addClass('help-dropdown-active');
      $('#offcanvas-menu').removeClass('nav-dropdown-active').removeClass('cart-dropdown-active').removeClass('account-dropdown-active');
    }, timeout);
  });

  // Toggle Nav on Click - Account / User
  $('.js-user-dropdown, .js-nav-close').click(function(event) {
    event.preventDefault();

    $("#header_search").removeClass("open");
    $('#site-wrapper').removeClass('show-search');
    var reopen = $("#offcanvas-menu").hasClass("cart-dropdown-active") || $("#offcanvas-menu").hasClass("nav-dropdown-active") || $("#offcanvas-menu").hasClass("help-dropdown-active");
    var timeout = reopen ? 300 : 0;

    toggleNav($(this), reopen, "right");
    setTimeout(function() {
      $('#offcanvas-menu').addClass('account-dropdown-active');
      $('#offcanvas-menu').removeClass('nav-dropdown-active').removeClass('help-dropdown-active').removeClass('cart-dropdown-active');
    }, timeout);
  });

  // Toggle Nav on Click - Account / User
  $('.js-user-dropdown-loggedin').click(function(event) {
    event.preventDefault();

    $("#header_search").removeClass("open");
    $('#site-wrapper').removeClass('show-search').addClass('show-user');
    var reopen = $("#offcanvas-menu").hasClass("cart-dropdown-active") || $("#offcanvas-menu").hasClass("nav-dropdown-active") || $("#offcanvas-menu").hasClass("help-dropdown-active");
    var timeout = reopen ? 300 : 0;

    toggleNav($(this), reopen, "right");
    setTimeout(function() {
      $('#offcanvas-menu').addClass('account-dropdown-active');
      $('#offcanvas-menu').removeClass('nav-dropdown-active').removeClass('cart-dropdown-active offcanvas-menu-left').removeClass('help-dropdown-active');

    }, timeout);

  });

  // Canvas slide in:
  // Toggle Nav on Click - Account / User
  $('.js-cart-dropdown, .js-nav-close').click(function(event) {
    event.preventDefault();

    $("#header_search").removeClass("open");
    $('#site-wrapper').removeClass('show-search');
    var reopen = $("#offcanvas-menu").hasClass("account-dropdown-active") || $("#offcanvas-menu").hasClass("nav-dropdown-active") || $("#offcanvas-menu").hasClass("help-dropdown-active");
    var timeout = reopen ? 300 : 0;

    toggleNav($(this), reopen, "right");
    setTimeout(function() {
      $('#offcanvas-menu').addClass('cart-dropdown-active');
      $('#offcanvas-menu').removeClass('nav-dropdown-active').removeClass('account-dropdown-active').removeClass('help-dropdown-active');

    }, timeout);

  });

  // Toggle Nav on Click - Account / User
  $(document).on("click", ".js-nav-dropdown:not(.nav-active), .js-nav-close", function(event) {
    event.preventDefault();

    $("#header_search").removeClass("open");
    $('#site-wrapper').removeClass('show-search');

    toggleNav($(this), false, "left");
    $('#offcanvas-menu').addClass('nav-dropdown-active').addClass("offcanvas-menu-left");
    $('#offcanvas-menu').removeClass('account-dropdown-active');

  });

});

// Canvas slide in:
function toggleNav(toggleElement, reopen, position) {

  if (reopen) {
    // stays open
    if (position === "right") {
      $('#offcanvas-menu').removeClass("offcanvas-menu-left").addClass("offcanvas-menu-right");
    } else {
      $('#offcanvas-menu').removeClass("offcanvas-menu-right").addClass("offcanvas-menu-left");
    }

    $(".js-nav-dropdown").addClass("close").removeClass("open").find("[class*='icon--']").removeClass("icon--burger").addClass("icon--cross");
    $('#site-wrapper').removeClass('show-cart').removeClass('show-user').removeClass('show-nav').removeClass('show-help');

    if (toggleElement.hasClass('js-cart-dropdown')) {
      $('#site-wrapper').addClass('show-cart');
    } else if (toggleElement.hasClass('js-user-dropdown') || toggleElement.hasClass('js-user-dropdown-loggedin')) {
      $('#site-wrapper').addClass('show-user');
    } else if (toggleElement.hasClass('js-help-dropdown')) {
      $('#site-wrapper').addClass('show-help');
    }
    $('#site-wrapper').addClass('show-nav');

    $('body').addClass('overflow-lock');

  } else if ($('#site-wrapper').hasClass('show-nav') || $('#site-wrapper').hasClass('show-search') || $(toggleElement).hasClass("close")) {

    $(".js-nav-dropdown").addClass("open").removeClass("close").find("[class*='icon--']").addClass("icon--burger").removeClass("icon--cross");
    $('#site-wrapper').removeClass('show-nav').removeClass("show-search").removeClass('show-cart').removeClass('show-user').removeClass('show-help');

    $('body').removeClass('overflow-lock');

    setTimeout(function() {
      $('#offcanvas-menu').removeClass("offcanvas-menu-right offcanvas-menu-left").removeClass('nav-dropdown-active').removeClass('cart-dropdown-active').removeClass('account-dropdown-active').removeClass('help-dropdown-active');
    }, 300);

    setTimeout(function() {
      $(".mobile-menu__main").removeClass('mobile-menu__main--active');
      $(".mobile-menu__langs").removeClass('mobile-menu__langs--active');
    }, 500);

  } else {

    if (position === "right") {
      $('#offcanvas-menu').removeClass("offcanvas-menu-left").addClass("offcanvas-menu-right");
    } else {
      $('#offcanvas-menu').removeClass("offcanvas-menu-right").addClass("offcanvas-menu-left");
    }

    setTimeout(function() {
      $(".js-nav-dropdown").addClass("close").removeClass("open").find("[class*='icon--']").removeClass("icon--burger").addClass("icon--cross");

      if (toggleElement.hasClass('js-cart-dropdown')) {
        $('#site-wrapper').addClass('show-cart');
      } else if (toggleElement.hasClass('js-user-dropdown') || toggleElement.hasClass('js-user-dropdown-loggedin')) {
        $('#site-wrapper').addClass('show-user');
      } else if (toggleElement.hasClass('js-help-dropdown')) {
        $('#site-wrapper').addClass('show-help');
      }
      $('#site-wrapper').addClass('show-nav');

      $('body').addClass('overflow-lock');

    }, 100);

  }

  // Close search
  $(".menu-dropdown--search").removeClass("active");

}
