/**
 * ------------------------------------------------------------------------
 * Region Bar
 * ------------------------------------------------------------------------
 */

$(function() {

  // if region notice - then push down pop out nav
  if ($('.region-bar').css('display') === 'block') {
    $('body').addClass('is-region-notice');
    $('#offcanvas-menu').addClass('w-region-notice');
  }

  $('.js-close-region-bar').on('click', function() {
    $('body').removeClass('is-region-notice');
    $('#offcanvas-menu').removeClass('w-region-notice');
  });

  if (!getCookie("region-select")) {
    $('.region-bar').slideDown("400");
  }

  // region bar hide
  $(".js-close-region-bar").on('click', function(e) {
    setCookie("region-select", true, 3650);
    $('.region-bar').hide();
  });

});
