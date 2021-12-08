/**
 * ------------------------------------------------------------------------
 * Block Grid - rename to self-enrol or suchlike?
 * ------------------------------------------------------------------------
 */
/**
 * ------
 * Pick your own / Select kit
 * ------
 */

function disabledCheckRmv() {
  $('[data-js-block-grid] .drop-block').each(function(item, index) {
    if ($(this).hasClass('drop-block--forward')) {
      $('.js-select-actions').removeClass('disabled');
    }
  });
}
// Block Grid Interactions
$('[data-js-change-kit]').on("click", function(e) {
  var $thisBlock = $(this).closest('.drop-block');
  // add class to hook confirm btns to
  $thisBlock.addClass('selected');
  // remove other active states
  $('.drop-block').not($thisBlock).removeClass('selected'); // not on this one tho lest it kill the toggle
  disabledCheckRmv();
});
// Corresponding modal btn actions - CONFIRM
$('[data-js-confirm-kit-change]').on("click", function(e) {
  e.preventDefault();
  var $selectedBlock = $('.drop-block.selected');
  $selectedBlock.addClass('drop-block--forward');
  $('.drop-block:not(.selected)').removeClass('drop-block--forward');
  $('#modal-enroll-change-kit').modal('hide');
  $('.js-select-actions').removeClass('disabled');
});
// KEEP existing
$('[data-js-keep-kit-selection]').on("click", function(e) {
  e.preventDefault();
  //$('.js-select-actions').removeClass('disabled');
  $('#modal-enroll-change-kit').modal('hide');
  $('#modal-enroll-change-kit-pick-own').modal('hide');
  disabledCheckRmv();
});
// Remove active class on click of selected btn
$('[data-js-change-kit-selected]').on("click", function(e) {
  e.preventDefault();
  $(this).closest('.drop-block').removeClass('drop-block--forward');
  $('.js-select-actions').addClass('disabled');
});
// Select ONLY - NO modal
$('[data-js-change-kit-action]').on("click", function(e) {
  e.preventDefault();
  $('.drop-block').not($(this).closest('.drop-block')).removeClass('drop-block--forward');
  $(this).closest('.drop-block').toggleClass('drop-block--forward');
  //$('.js-select-actions').toggleClass('disabled');
  disabledCheckRmv();
});
// Remove active class on click of selected btn
$('[data-js-change-kit-selected-action]').on("click", function(e) {
  e.preventDefault();
  $(this).closest('.drop-block').removeClass('drop-block--forward');
  $('.js-select-actions').addClass('disabled');
});
// View details link action
$('[data-js-view-kit-details]').on("click", function(e) {
  e.preventDefault();
  var $thisBlock = $(this).closest('.drop-block');
  // add class to hook confirm btn to
  $thisBlock.addClass('selected');
  // remove other active states
  $('.drop-block').not($thisBlock).removeClass('selected'); // not on this one tho lest it kill the toggle
});
// Select kit from view details modal
$('[data-js-change-kit-details]').on("click", function(e) {
  e.preventDefault();
  var $selectedBlock = $('.drop-block.selected');
  $selectedBlock.addClass('drop-block--forward');
  $('.drop-block:not(.selected)').removeClass('drop-block--forward');
  $('#quick-view-modal').modal('hide');
  $('.js-select-actions').removeClass('disabled');
});

// View all kits - for demonstration only, not intended for production
$('[js-view-all-kits]').on("click", function(e) {
  $('[data-js-more-kits]').removeClass('u--hidden');

  this.remove();
});
