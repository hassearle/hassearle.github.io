/**
 * ------------------------------------------------------------------------
 * Events
 * ------------------------------------------------------------------------
 */

$(function() {

  $('[data-js-toggle-events-filters]').on('click', function() {
    $('.events-results__filter-bar-extra').toggleClass('events-results__filter-bar-extra--active');
  });

});
