/**
 * ------------------------------------------------------------------------
 * Search
 * ------------------------------------------------------------------------
 */

$(document).ready(function() {

  // Search Toggle
  $("[data-js-search-toggle]").click(function(e) {
    e.preventDefault();

    $("#language_select").hide();

    $('#site-wrapper').removeClass('show-nav').removeClass('show-user').removeClass('show-cart');

    if ($('#site-wrapper').hasClass('show-search')) { // search open
      $("#header_search").removeClass("open");
      $('#site-wrapper').removeClass('show-search');
      $(".js-nav-dropdown").addClass("open").removeClass("close").find("[class*='icon--']").addClass("icon--burger").removeClass("icon--cross");
    } else {
      $("#header_search").addClass("open");
      $(".js-nav-dropdown").addClass("close").removeClass("open").find("[class*='icon--']").removeClass("icon--burger").addClass("icon--cross");
      $('#site-wrapper').addClass('show-search');
    }

    $(".menu-dropdown--search").toggleClass("active");

  });

  // prevent the dropdown from closing when selecting a search result
  $(".search-history__link").on("click", function(e) {
    e.stopPropagation();

  });

  $("#header_search_input").focus(function() {
    $("#header_search_group").addClass("active");
    $("body").addClass("search-active");

    $(".search-history").show();

    $("[data-mega-name='search']").addClass("active");

    $("#header_search_button .icon--search").addClass("icon--cross").removeClass("icon--search");

  });

  // close via X button
  $("#header_search_button").on("click", function(e) {
    e.preventDefault();

    $(".search-history").show();
    $(".search__results").hide();

    $("#site-wrapper").removeClass("show-search");

    if ($("#header_search_input").val() === "" && !$("#header_search_group").hasClass("active")) {
      $("#header_search_group").addClass("active");
      $("[data-mega-name='search']").addClass("active");
      $("#header_search_button .icon--search").addClass("icon--cross").removeClass("icon--search");

    } else {
      $("#header_search_group").removeClass("active");
      $("#header_search_input").val("");
      $("[data-mega-name='search']").removeClass("active");
      $("body").removeClass("search-active");
      $("#header_search").removeClass("open");
      $(".js-nav-dropdown").find("[class*='icon--']").removeClass("icon--cross").addClass("icon--burger");
      $("#header_search_button .icon--cross").removeClass("icon--cross").addClass("icon--search");
    }

  });

  // close via body click
  // this selector needs revisiting... * is hefty
  $("body:not(.styleguide) #site-canvas > *:not(.header)").on("click", function(e) {

    $(".search__results").hide();

    $("#header_search_group").removeClass("active");
    $("#header_search_input").val("");
    $("[data-mega-name='search']").removeClass("active");
    $("body").removeClass("search-active");
    $("#header_search_button .icon--cross").removeClass("icon--cross").addClass("icon--search");

  });

  $(".search--advocate .search__button-close").on("click", function(e) {
    $(".enroll-friend__check-block").show(); // enroll UX
    $(".enroll-friend__head--sponsor").hide();
    $(".enroll-friend .search--sponsor").hide();
  });
  $(".search--sponsor .search__button-close").on("click", function(e) {
    $(".enroll-friend__check-block").hide(); // enroll UX
  });

  $("#header_search_input").keyup(function(e) {
    e.preventDefault();

    if ($(this).val() === "") {
      $(".search-history").show();
      $(".search__results").hide();
      $('.enroll-friend__check-block').show(); // enroll UX
    } else {
      $(".search-history").hide();
      $(".search__results").show();
      $('.enroll-friend__check-block').hide(); // enroll UX
    }

  });

  // search dropdown tabs
  $('.search-panel__filters .nav-item').tab();

  // search results page tabs
  $('.search-panel__tabs .nav-item').tab();

  // show/hide search filters
  $('.js-filter').click(function() {
    var element = $(this);

    // get the header height
    var offset = $("#header").height() + 20;

    if (element.hasClass('active')) {
      element.removeClass('active');
      element.siblings('.dropdown-menu').removeClass('show');
      $(".filter__wrapper").removeClass("filter-active");
    } else {
      $('html, body').animate({
        scrollTop: $(this).offset().top - offset
      }, 500);
      element.addClass('active');
      element.siblings('.dropdown-menu').addClass('show');
      $(".filter__wrapper").addClass("filter-active");
    }
  });

  // search hover fade
  $(".product-basic:not(.product-basic--enroll)").hover(function(e) {
    $(".product-basic").addClass('inactive');
    $(this).removeClass('inactive').addClass('active');
  }, function(e) {
    $(".product-basic").removeClass('inactive').removeClass('active');
  });

  // Full screen mobile search takeover - linked to .search--fs-mob
  $('[data-js-search-fs-mob] [data-js-enroll-product-search]').on('click', function(e) {
    // Ideally we could attach to window width change
    if ($(window).width() < 768) {
      //scrollTop required on native ios - TEST
      $('html, body').animate({
        scrollTop: $('.search--fs-mob')
      }, 500);

      $('body').addClass('fs-mob-search-active');
      $(this).closest('[data-js-search-fs-mob]').addClass('fs-mob-active');
    }
  });

  // data-js-search-fs-mob-close & // data-js-search-fs-mob-back
  $('[data-js-search-fs-mob-close], [data-js-search-fs-mob-back]').on('click', function(e) {
    $('[data-js-search-fs-mob]').removeClass('fs-mob-active');
    $('[data-js-search-fs-mob] [data-js-enroll-product-search]').val(''); // do we want to wipe/reset the search string on close
    $('[data-js-enroll-product-search-results]').hide();
    $('[data-js-enroll-product-search-added]').show();
    $('body').removeClass('fs-mob-search-active');
  });

}); // end doc ready

// Eventually port into appropriates once UX clear
// User - Advocate Search - new comp?

var userCardCount = 0;

function UserBlock(name, location, avatar, type) {
  this.name = name;
  this.location = location;
  this.avatar = avatar;
  this.type = type;
  this.blockMarkup = '<div class="user-card' + ' user-card--type-' + type + '"> <div class="user-card__actions"> <a href="#" class="user-card__close" data-js-close-user-card> <span class="user-card__close-icon icon--cross icon--md icon--grey"></span> </a> </div> <div class="user-card__body"> <div class="user-card__avatar"> ' + this.avatar + ' </div> <div class="user-card__details"> <div class="user-card__name"> ' + this.name + ' </div> <div class="user-card__location"> ' + this.location + ' </div> </div> </div> </div>';
  this.addItem = function() {
    if (type === 'advocate') {
      $('[data-js-add-advocate].enroll-friend__head').append(this.blockMarkup).find('.user-card__close').addClass('close-advocate');
    } else if (type === 'sponsor') {
      $('[data-js-add-sponsor].enroll-friend__head').append(this.blockMarkup).find('.user-card__close').addClass('close-sponsor');
    }

  };
}

// Select an advocate / user 
$('[data-js-select-advocate]').on('click', function(e) {
  e.preventDefault();
  var $searchBlock = $(this).closest('.enroll-user-row').children('.enroll-user-row__body');
  var $name = $searchBlock.find('.enroll-user-row__name')[0].innerText;
  var $location = $searchBlock.find('.enroll-user-row__location')[0].innerText;

  var $avatar = $searchBlock.find('.enroll-user-row__avatar');
  if ($avatar[0].children[0].tagName === 'IMG') { // img
    $avatar = $avatar[0].children[0].currentSrc;
    $avatar = '<img src="' + $avatar + '">';
  } else { // it's a: div / span / icon
    $avatar = $avatar[0].innerHTML;
  }

  var $type = $(this).closest('.search.search--user');
  if ($type.hasClass('search--sponsor')) {
    $type = 'sponsor';
    $('[data-js-add-sponsor-checkbox]').hide(); // wip dev - hide checkbox toggler on sponsor selection

    $('[data-js-add-sponsor] .enroll-friend__title > *').text('Your Sponsor'); //
    // show adv signup link
    $(".enroll-friend__signup-link").hide();

  } else {
    $type = 'advocate';
    $('[data-js-add-advocate] .enroll-friend__title > *').text('Your Wellness Advocate'); //
    // show adv signup link
    $(".enroll-friend__signup-link").show();

  }

  var userBlockItem = new UserBlock($name, $location, $avatar, $type);
  userBlockItem.addItem();

  $(this).closest('.search.search--user').hide(); // we need to check and only hide the nearest user search not both
  //$('.enroll-friend__head--sponsor').show();

  if (userCardCount === 0) {
    $('.user-card.user-card--type-advocate').addClass('u--mb-60'); // only in first step - then remove again!!!! DEV 
  }

  userCardCount++;
  $('.enroll-friend__check-block').hide();

  $('[data-js-enroll-refer-btn]').removeClass('disabled');

  $(".enroll-friend .search--sponsor .search-results__product--user").hide(); // ensure search results hidden 

});

// data-js-adv-signup-jump
$("[data-js-adv-signup-jump]").on("click", function(e) {
  //console.dir(e);
  e.preventDefault();

  $("#modal-se-advanced-signup").modal("hide");

  $(".enroll-friend__head--sponsor").show();

  // "Add a different sponsor" checkbox interaction
  var $checkBoxInput = $("[data-js-add-sponsor-checkbox] input");
  // e.target.checked = true;
  console.dir($checkBoxInput);
  $checkBoxInput[0].checked = true;
  $(".enroll-friend .search.search--sponsor").show();

  // hide adv signup link
  $(".enroll-friend__signup-link").hide();
  $(".user-card.user-card--type-advocate").removeClass("u--mb-60");

  $(".search.search--sponsor .search-results__product--user").hide(); // hide results until user has clicked input

});

function BespokeUserBlock($fieldName, $fieldLocation, $fieldEmail, $fieldMobile) {
  this.name = $fieldName;
  this.location = $fieldLocation;
  this.email = $fieldEmail;
  this.mobile = $fieldMobile;

  this.blockMarkup = '<div class="user-card user-card--bespoke"> <div class="user-card__actions"> <a href="#" class="user-card__close close-sponsor" data-js-close-user-card=""> <span class="user-card__close-icon icon--cross icon--md icon--grey"></span> </a> </div> <div class="user-card__body"> <div class="user-card__avatar"><span class="icon--my-account-circle icon--brand icon--xxl"></span></div> <div class="user-card__details"> <div class="user-card__name"> ' + this.name + ' </div> <div class="user-card__location"> ' + this.location + ' </div> <a href="#" class="user-card__edit-link" data-js-edit-bespoke-user-card>Edit</a> </div> </div> </div>';
  this.addItem = function() {
    $("[data-js-add-advocate].enroll-friend__head .user-card--bespoke").remove();
    $('[data-js-add-advocate].enroll-friend__head').append(this.blockMarkup).find('.user-card__close').addClass('close-advocate');
  };
}

// $("#js-validation-message").hide();

// Can't find who you're looking for? form and UX action
$("[data-js-add-manual-referral]").on("click", function(e) {
  e.preventDefault();
  $fieldParent = $(this).parent();

  var $fieldName = $fieldParent.find("input#name")[0].value;
  var $fieldLocation = $fieldParent.find("input#location")[0].value;
  var $fieldEmail = $fieldParent.find("input#email")[0].value;
  var $fieldMobile = $fieldParent.find("input#mobile")[0].value;

  var $errorMsg = $fieldParent.find("#js-validation-message");

  if ($fieldName === "" || $fieldLocation === "") {
    $errorMsg.removeClass("u--hidden");
  } else {
    var bespokeUser = new BespokeUserBlock($fieldName, $fieldLocation, $fieldEmail, $fieldMobile);
    bespokeUser.addItem();

    $errorMsg.addClass("u--hidden");

    // hide the advocate / top search
    $("[data-js-advocate-search]").hide();
    // close modal
    $('#cant-find-modal').modal('hide');
    // hide adv signup link
    $(".enroll-friend__signup-link").hide();
    // rmv disbaled
    $("[data-js-enroll-refer-btn]").removeClass('disabled');
    // HIDE add sponsor and checkboxes clock
    $(".enroll-friend__head--sponsor").hide(); // HIDE now!

    $('[data-js-add-advocate] .enroll-friend__title > *').text('Your Wellness Advocate');

  }

});

// Edit bespoke 
$(document).on("click", "[data-js-edit-bespoke-user-card]", function(e) {
  console.dir(e);
  e.preventDefault();
  $('#cant-find-modal').modal('show');
});

// Close user-card
$(document).on("click", "[data-js-close-user-card]", function(e) {
  e.preventDefault();
  var $thisCard = $(this).parent().parent();

  if (userCardCount === 1) {
    $('.enroll-friend__check-block').show();
  }
  userCardCount--;

  if ($(this).hasClass('close-advocate')) { //advocate
    $('[data-js-add-advocate] .enroll-friend__title > *').text('Find your Wellness Advocate');
    // reset search form
    $('.search--user.search--advocate .search__inner .form-control')[0].value = '';
    $('.search--user.search--sponsor .search__inner .form-control')[0].value = '';
    $('.search__button-close').hide();
    $('[data-js-product-search-results]').hide();
    $('[data-js-enroll-refer-btn]').addClass('disabled');
    $('.search.search--advocate').show();
  } else if ($(this).hasClass('close-sponsor')) { // sponsor
    // reset search form
    $('.search--user.search--advocate .search__inner .form-control')[0].value = '';
    $('.search--user.search--sponsor .search__inner .form-control')[0].value = '';
    $('.search__button-close').hide();
    $('[data-js-product-search-results]').hide();
    $('.search.search--sponsor').show();
    $(".enroll-friend__check-block").hide();

    $('[data-js-add-sponsor] .enroll-friend__title > *').text('Add a sponsor'); //
  }
  $thisCard.remove();

});

// "Add a different sponsor" checkbox interaction
$('[data-js-add-sponsor-checkbox] input').on('click', function(e) {
  if (e.target.checked === true) {
    if ($(this).parent().parent().next('.user-card').length < 1) {
      $('.search.search--sponsor').show();
    }
    $(this).parent().parent().next('.user-card').show();
  } else {
    $('.search.search--sponsor').hide();
    $(this).parent().parent().next('.user-card').hide();
  }
});

// Checkbox toggle displays
$('[data-js-referral-member-check] .form-check-input').on('click', function(e) {
  if ($(this).prop("checked") === true) {
    $('.enroll-friend__checkbox--more-info').addClass('enroll-friend__checkbox--more-info-active');
    $('[data-js-enroll-refer-btn]').removeClass('disabled');
  } else {
    $('.enroll-friend__checkbox--more-info').removeClass('enroll-friend__checkbox--more-info-active');
    $('[data-js-enroll-refer-btn]').addClass('disabled');
  }
});
