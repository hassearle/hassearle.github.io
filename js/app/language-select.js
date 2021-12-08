/**
 * ------------------------------------------------------------------------
 * Language Select
 * ------------------------------------------------------------------------
 */

$(document).ready(function() {

  // Main language selector
  $("[data-js-language-selector]").on("click", function(e) {
    e.preventDefault();

    // hide search if open
    $("#header_search").removeClass("open");
    $("#language_select").slideToggle("400");
    $("body").toggleClass("fs-lang-open");
  });

  $("[data-js-language-select-close]").on("click", function(e) {
    e.preventDefault();

    $("#language_select").fadeOut(200);
    $("body").removeClass("fs-lang-open");
  });

  // Mini language selector menu (desktop)
  function miniLangSelect(e) {

    $("body").toggleClass("menu-lang-open");
    //
    if ($('body').hasClass('menu-lang-open')) {
      $('.nav-dropdown__language-link').addClass('nav-dropdown__language-link--active');
      $('.nav-dropdown__language [class*="icon--"]').removeClass('icon--arrow-down').addClass('icon--arrow-up').addClass('icon--brand');
      $('.nav-dropdown__list--account').hide();
    } else {
      $('.nav-dropdown__language-link').removeClass('nav-dropdown__language-link--active');
      $('.nav-dropdown__language [class*="icon--"]').addClass('icon--arrow-down').removeClass('icon--arrow-up').removeClass('icon--brand');
      $('.nav-dropdown__list--account').fadeIn();
    }
    //
    $('.nav-dropdown__list--language').toggleClass('nav-dropdown__list--language-active');

  }
  // Mini language menu toggler btn  (desktop)
  $("[data-js-language-selector-menu]").on("click", miniLangSelect);
  // Mini language menu items  (desktop)
  $('.nav-dropdown__list--language:not(.nav-dropdown__list--language-mobile) .nav-dropdown__item').on('click', function(e) {
    var $languageListItem = $(e.target.parentElement);
    if ($languageListItem.hasClass('nav-dropdown__item--active')) {
      e.preventDefault();
      miniLangSelect();
      // hide/reset menu too
      $('.nav-dropdown--account').hide();
      setTimeout(function() {
        $('.nav-dropdown--account').show();
      }, 500);
    }
  });

  // Mini language menu items  (mobile)
  $(".nav-dropdown__list--language-mobile").on("click", function(e) {
    var $languageListItemMob = $(e.target.parentElement);
    if ($languageListItemMob.hasClass('nav-dropdown__item--active')) {
      e.preventDefault();
      $(".mobile-menu__main").removeClass('mobile-menu__main--active');
      $(".mobile-menu__langs").removeClass('mobile-menu__langs--active');

      $('.js-nav-dropdown [class*="icon--"]').removeClass('icon--cross').addClass('icon--burger');
      $('.js-nav-dropdown').removeClass('close').addClass('open');

      setTimeout(function() {
        $('#site-wrapper').removeClass('show-nav');
        $('#offcanvas-menu').removeClass('account-dropdown-active');
      }, 500);

    }
  });
  // Mini language selector menu (mobile)
  $("[data-js-language-selector-menu-mobile]").on("click", function(e) {
    //console.dir(e);
    $(".mobile-menu__main").addClass('mobile-menu__main--active');
    $(".mobile-menu__langs").addClass('mobile-menu__langs--active');
  });
  // mini lang mobile back btn
  $("[data-js-language-back-mobile]").on("click", function(e) {
    //console.log(e);
    $(".mobile-menu__main").removeClass('mobile-menu__main--active');
    $(".mobile-menu__langs").removeClass('mobile-menu__langs--active');
  });

  // Select Region
  $(".language-select__region").on("click", function() {

    // reset any active regions - including sub menu options
    $(".language-select__region.active").removeClass("active");
    $(".language-select__country.parent.active").removeClass("active");
    $(".language-select__language.parent.active").removeClass("active");
    // set current region element to active
    $(this).addClass("active");

    var region = $(this).data("region");

    $(".language-select__languages").removeClass("active");
    $(".language-select__additionals").removeClass("active");
    $(".language-select__regions-wrap").addClass("inactive");
    $(".language-select__countries").removeClass("active");
    $(".language-select__countries[data-region='" + region + "']").addClass("active");

    $('.language-select__countries-row-wrap').removeClass("active").removeClass("inactive");
    $('.language-select__language-row-wrap').removeClass("active").removeClass("inactive");

    $('.language-select__countries-row-wrap').addClass("active");
    $('.language-select__language-row-wrap').removeClass("active");
    $('.language-select__additional-row-wrap').removeClass("active");

    // get the total height of the children
    var height = 300; // country select header is 300px
    $(".language-select__countries[data-region='" + region + "'] .language-select__country-container").each(function(index) {
      height += $(this).height();
    });

    $(".language-select__wrapper").css("height", height);
  });

  // Select Country
  $(".language-select__country.parent .language-select__country-name").on("click", function(e) {

    // reset for active states
    $(".language-select__country.parent.active").removeClass("active");
    //
    $(".language-select__additional-row-wrap.active").removeClass("active");
    $(".language-select__additionals.active").removeClass("active");
    $(".language-select__language.parent.active").removeClass("active");

    // apply active state to clicked option
    $(this).parent().addClass("active");

    var language = $(this).data("language");

    $(".language-select__countries-row-wrap").addClass("inactive"); //.removeClass("active");
    $(".language-select__languages").removeClass("active");
    $(".language-select__languages[data-language='" + language + "']").addClass("active");
    $('.language-select__language-row-wrap').addClass("active");

    // get the total height of the children
    var height = 300; // country select header is 300px
    $(".language-select__languages[data-language='" + language + "'] .language-select__language-container").each(function(index) {
      height += $(this).height();
    });

    $(".language-select__wrapper").css("height", height);
  });

  // go back a level
  $(".language-select__country-title").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();

    $('.language-select__countries-row-wrap').removeClass("active");
    $(".language-select__languages").removeClass("active");
    $(".language-select__regions-wrap").removeClass("inactive");
    $(".language-select__countries").removeClass("active");
    $(".language-select__wrapper").css("height", "100%");

  });
  // go back a level from language
  $(".language-select__language-title").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();

    $('.language-select__language-row-wrap').removeClass("active");
    $('.language-select__countries-row-wrap').removeClass("inactive");
    $(".language-select__languages").removeClass("active");
    //$(".language-select__regions-wrap").removeClass("inactive");
    //$(".language-select__countries").removeClass("active");
    $(".language-select__wrapper").css("height", "100%");

  });
  // go back a level from additional
  $(".language-select__additional-title").on("click", function(e) {
    console.log('additional-title clicked...');
    e.preventDefault();
    e.stopPropagation();

    $('.language-select__additional-row-wrap').removeClass("active");
    $('.language-select__language-row-wrap').removeClass("inactive");
    $(".language-select__additionals").removeClass("active");
    //
    $(".language-select__wrapper").css("height", "100%");

  });

  $(".language-select__state-title").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(".language-select__countries").removeClass("active-child");
    //$(".language-select__states").removeClass("active");
  });

  // Select additional option
  $(".language-select__language.parent .language-select__language-name").on("click", function(e) {

    // reset for active states
    $(".language-select__languages.active .language-select__language.parent.active").removeClass("active");

    // apply active class to clicked item
    $(this).parent().addClass("active");

    var additional = $(this).data("additional");

    $(".language-select__language-row-wrap").addClass("inactive"); //.removeClass("active");
    // $(".language-select__languages").removeClass("active");
    $(".language-select__additionals.active").removeClass("active");
    $(".language-select__additionals[data-additional='" + additional + "']").addClass("active");
    $('.language-select__additional-row-wrap').addClass("active");

    // get the total height of the children
    var height = 300; // country select header is 300px
    $(".language-select__additionals[data-additional='" + additional + "'] .language-select__additional-container").each(function(index) {
      height += $(this).height();
    });

    $(".language-select__wrapper").css("height", height);
  });

});
