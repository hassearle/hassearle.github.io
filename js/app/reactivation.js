/**
 * ------------------------------------------------------------------------
 * Reactivation
 * ------------------------------------------------------------------------
 */

$(function() {

  $('#show-modal-enroll').on('click', function(e) {
    e.preventDefault();

    $('#modal-enroll').modal('show');
  });

  $('#show-modal-pv-offer').on('click', function(e) {
    e.preventDefault();

    $('#modal-pv-offer').modal('show');
  });

  $('#show-modal-no-offer').on('click', function(e) {
    e.preventDefault();

    $('#modal-no-offer').modal('show');
  });

});
