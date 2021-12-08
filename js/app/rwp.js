/**
 * ------------------------------------------------------------------------
 * RWP
 * ------------------------------------------------------------------------
 */

$(function() {

  $('[data-js-sticky-help]').on('click', function(e) {
    e.preventDefault();

    if (!$('[data-js-sticky-content]').hasClass('open')) {
      $('.rwp .overlay').show();
      $('.rwp-profile__link-expand').css('opacity', 0);
    }

    $('[data-js-sticky-content]').slideDown().addClass('open');
  });

  $('[data-js-sticky-close]').on('click', function(e) {
    e.preventDefault();

    $('[data-js-sticky-content]').slideUp().removeClass('open');
    $('.rwp-profile__link-expand').css('opacity', 1);

    $('.rwp .overlay').hide();
  });

});

var initialScrollEvent = true;

$(window).scroll(function() {

  if (window.innerWidth < 768) {

    if (!initialScrollEvent) {

      if ($('[data-js-sticky-help]').length) {

        if (!$('[data-js-sticky-content]').hasClass('open')) {
          $('[data-js-sticky-help]').fadeOut();
          $('[data-js-sticky-panel]').addClass('sticky-panel--help-inactive');
        }

        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
          $('[data-js-sticky-help]').fadeIn();
          $('[data-js-sticky-panel]').removeClass('sticky-panel--help-inactive');
        }, 500));

      }
    }
    initialScrollEvent = false;

  }

});
