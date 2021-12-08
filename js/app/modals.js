/**
 * ------------------------------------------------------------------------
 * Modals
 * ------------------------------------------------------------------------
 */

$(function() {

  // Process Today Modal
  $('[data-process-today-modal-trigger]').on('click', function(e) {
    e.preventDefault();
    $('#js-process-today-modal').modal({
      selector: {
        close: '.close',
        approve: '.ok',
        deny: '.cancel'
      },
    }).modal('show');
  });

  $('.modal__cancel').on('click', function(e) {
    e.preventDefault();
    $('.modal').modal('hide');
  });
});

// Modal Triggers

// Initialise points modal
$('#points-modal').modal('show');

// 'Leave Checkout' modal
$('#leave-checkout-trigger').on('click', function(e) {
  e.preventDefault();

  $('#leave-checkout-modal').modal('show');
});

// 'Terms & Conditions' modal
$('[data-js-terms-modal-trigger]').on('click', function(e) {
  e.preventDefault();

  $('#terms-modal').modal('show');
});

// 'Terms & Conditions Checkbox International' modal
$('[data-js-terms-checkbox-modal-trigger]').on('click', function(e) {
  e.preventDefault();

  $('#terms-checkbox-modal').modal('show');
});

// 'Wholesale Customer Terms & Conditions' modal
$('[data-js-wc-terms-modal-trigger]').on('click', function(e) {
  e.preventDefault();

  $('#wc-terms-modal').modal('show');
});

// 'Wellness Advocate Terms & Conditions' modal
$('[data-js-wa-terms-modal-trigger]').on('click', function(e) {
  e.preventDefault();

  $('#wa-terms-modal').modal('show');
});

// 'Policy Manual' modal
$('[data-js-policy-manual-modal-trigger]').on('click', function(e) {
  e.preventDefault();

  $('#policy-manual-modal').modal('show');
});

// 'Site Usage' modal
$('[data-js-site-usage-modal-trigger]').on('click', function(e) {
  e.preventDefault();

  $('#site-usage-modal').modal('show');
});

// 'Privacy Policy' modal
$('[data-js-privacy-policy-modal-trigger]').on('click', function(e) {
  e.preventDefault();

  $('#privacy-policy-modal').modal('show');
});

// Linkgen share modal
$('.js-linkgen-share').on('click', function(e) {
  e.preventDefault();

  if ($('#modal-linkgen-share').data("detachable") === false) {
    $('#modal-linkgen-share').modal({
      detachable: false
    }).modal('show');
  } else {
    $('#modal-linkgen-share').modal('show');
  }
});

// Link share modal
$('.js-link-share').on('click', function(e) {
  e.preventDefault();
  $('#modal-link-share').modal('show');
});

$('.js-show-process-today-modal .order-summary__button.primary').on('click', function() {
  $('#js-process-today-modal').modal('show');
});

$(document).ready(function() {
  // Initialise LRP modal
  // $('#lrp-bag-modal').modal('show');

  // Initialise Lifelong Vitality modal
  $('#multipack-modal').modal('show');

  // Initialise LTO Notify modal
  $('#lto-notify-modal').modal('show');
});

// Initialise Account Type Modal
$('#show-change-account-type-modal').on('click', function(e) {
  e.preventDefault();

  $('#change-account-type-modal').modal("show");
});

// Initialise Enrol w/ Products Modal
$('#enrol-with-products-modal').modal('show');

// Initialise 'Account Exists' error modal
$('#account-already-exists-modal').modal('show');

// Initialise Guest Bag 'Account Exists' modal
$('#account-exists-error-modal').modal('show');

// Initialise Referral 'Can't Find' modal
// $('#cant-find-modal').modal('show');

// Semi login modal
$('#semi-login-modal').modal('show');

// Initialise Account Created Modal
$('#account-created-modal').modal('show');

$('[data-js-show-lrp-only-modal]').on('click', function(e) {
  e.preventDefault();
  $('#js-lrp-only-modal').modal('show');
});

// select kit - view details link
// QUICK VIEW

$('[data-js-view-kit-details]').on('click', function(e) {
  e.preventDefault();
  $('#quick-view-modal').modal('show');
  $('#quick-view-modal').find('.dropdown.dropdown--fx').dropdown({
    showOnFocus: false
  });
});

// add products - show product detail (non-kit)
$('[data-js-view-kit-details-product]').on('click', function(e) {
  e.preventDefault();

  $('#product-quick-view-modal').modal("show");
});

// flag to track if the broswe products want refreshing via onHide or not (not if coming back from quick view)
var resetFlag = false;
// we need to track if a user is clicking the quick view link from outside product --browse
var qvFlag = false;

// Quick View Modal 
$(document).on("click", '[data-js-open-quick-view-modal]', function(e) {
  e.preventDefault();
  resetFlag = true;

  // is this quick view init link in the product browser? // is this a JSON search results link?
  var context = $(this).closest('.search-results__list');
  if (context.data('jsJsonResults') !== undefined) {
    qvFlag = true;
  } else {
    qvFlag = false;
  }
  // qv type tallies up data attr with the modal we want to show
  var qvType = $(this).data('jsOpenQuickViewModal');
  var modalClass = '.qv-' + qvType;
  $('#product-browse-modal').modal('hide'); // dev hide the product browse modal
  $(modalClass).modal('show');
});
// close quick view - globalised
$(document).on('click', '[data-js-close-quick-view-modal]', function(e) {
  e.preventDefault();
  resetFlag = false;

  if (qvFlag === true) {
    // this is a browser quick view action, reopen product browser 
    $('#quick-view-modal').modal('hide'); // hide quick view
    $('#product-browse-modal').modal('show'); // show the product browse modal
  } else {
    // not a quick view action from inside the browser
    // hide all modals
    $('.modal').modal('hide');
  }

  // if this is the main browse modal then we do want the the back button to close
  if ($(this).data('jsCloseQuickViewModal') === 'browser') {
    // hide the product browse modal
    $('#product-browse-modal').modal('hide');
  }
});

// modal browse specific actions - on CLOSE reset stuff
$('.ui.modal.modal--browse').modal({
  onHide: function() {
    if (resetFlag === false) {
      // reset the --browse modal filters
      $('[data-js-filter="filter-category-all"]').click();
      // reset the sort value in --browse modal
      $('[data-js-sort-filter="sort-relevance"]').click();
      // reset view to grid type in --browse modal
      $('.sort__link.sort-link--grid').click();
      // if the filter dropdown is active - deactivate
      $('.dropdown-toggle.filter__button.active').click();
      // remove active classes off drill filters after reset
      $('.drill-filter__node__parent').removeClass('open');
      // sort text reset
      $('.sort__dropdown.ui.dropdown>.text').html('<strong>Sort</strong>');
    }
  }
});

// Global New hook - broad / generic.
$('[data-js-modal-close]').on('click', function(e) {
  e.preventDefault();
  resetFlag = false;

  // hide modal
  $('.modal').modal('hide');
});

$('[data-js-modal-back-browse]').on('click', function(e) {
  e.preventDefault();
  $('.modal').modal('hide');
  $('#product-browse-modal').modal('show'); // show the product browse modal
});

$(function() {
  // any open classed modals want showing
  $('#quick-view-modal.open').modal('show');
});

// Change your kit selection modal
$('[data-js-change-kit]:not(.enroll-kit__selection-btn--selected)').on('click', function(e) {
  e.preventDefault();
  $('#modal-enroll-change-kit').modal('show');
});

// Change your kit selection modal - not cuurently required
$('[data-js-change-kit-pick-own]').on('click', function(e) {
  e.preventDefault();
  $('#modal-enroll-change-kit-pick-own').modal('show');
});

// Self Enroll Order Summary Continue to Checkout btn modal
$('[data-js-modal-self-enroll-checkout]').on('click', function(e) {
  e.preventDefault();
  $('#modal-self-enroll-checkout').modal('show');
});

// Self Enroll - advanced signup modal
$('[data-js-modal-adv-signup]').on('click', function(e) {
  e.preventDefault();
  $('#modal-se-advanced-signup').modal('show');
});

// Initialise Review / Edit Details modal
// $('#edit-personal-details-modal').modal('show');
// account details footer - personal details - self enroll / other
$('[data-js-modal-account-edit-personal]').on('click', function(e) {
  e.preventDefault();
  $('#edit-personal-details-modal').modal('show');
});

// Initialise Referral 'Can't Find' modal
// $('#cant-find-modal').modal('show');
$('[data-js-modal-cant-find-user]').on('click', function(e) {
  e.preventDefault();
  $('#cant-find-modal').modal('show');
});

// Loyalty Order Sheduled Modal
$('[data-js-modal-scheduled]').on('click', function(e) {
  e.preventDefault();

  $('#js-lrp-scheduled-modal').modal('show');
});

// data-js-open-product-browse
// https://semantic-ui.com/modules/modal.html
// added fullscreen class to modal (--fs-mob?)
$('[data-js-open-product-browse-modal]').on('click', function(e) {
  e.preventDefault();

  $('#product-browse-modal').modal('show');
});

// Enroll Final Check - Kit & Products Modal (mobile & tablet only)
$('[data-js-view-kit-products]').on('click', function(e) {
  e.preventDefault();

  $('#modal-kit-products').modal('show');
});
