/**
 * ------------------------------------------------------------------------
 * Push Nav
 * ------------------------------------------------------------------------
 */

$(document).ready(function() {

  var item = $('.push-nav__item').not('.push-nav__item--ad');
  // check if it has child menu and add class if so
  item.each(function() {
    if (this.children.length > 1) {
      $(this).addClass('has-child-menu');
    }
  });

  // Add Icon to back link
  $(".push-nav__item.has-child-menu > .push-nav__link").append("<span class='icon--arrow-right icon--md'></span");

  // Show Child Menu
  $('.push-nav__item.has-child-menu').on('click', function(e) {
    $(this).children('.push-nav__list').addClass('active');
    $(this).closest(".push-nav__list").removeClass('active').addClass('inactive');
  });

  // Change menu state
  $(document).on("click", ".js-sub-nav-dropdown.nav-active", function(e) {
    e.preventDefault();
    e.stopPropagation();

    if ($(".push-nav__list--l2").hasClass("active")) {
      // Level 2 Active
      $(".push-nav__list--l2").removeClass('active');
      $(".push-nav__list--l1").removeClass('inactive');
    } else if ($(".push-nav__list--l1").hasClass("active")) {
      // Level 1 Active
      $(".push-nav__list--l1").removeClass('active');
      $(".push-nav__list--l0").removeClass('inactive');
      $(".mobile__toolbar .js-sub-nav-dropdown")
        .removeClass("nav-active")
        .find("[class*='icon--']")
        .removeClass("icon--arrow-left")
        .addClass("icon--cross");
    }

  });

  $('.push-nav__item.has-child-menu > a').on('click', function(e) {
    e.preventDefault();
  });

});
