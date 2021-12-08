/**
 * ------------------------------------------------------------------------
 * Forms
 * ------------------------------------------------------------------------
 */

$(document).ready(function() {
  // Semantic UI Lefthand Blue Checkbox
  $('.ui.toggle.checkbox')
    .checkbox()
    .first().checkbox({
      onChecked: function() {
        $("label[for='" + $(this).attr("id") + "']").removeClass('dn').addClass('up').attr('data-content', 'ON');
      },
      onUnchecked: function() {
        $("label[for='" + $(this).attr("id") + "']").removeClass('up').addClass('dn').attr('data-content', 'OFF');
      }
    });

  // special form radio
  $('.form-check--special').on('click', function() {
    $('.form-check--special').removeClass('form-check--special-active');
    $(this).addClass('form-check--special-active');
  });

  // Show the native browser ""
  $('form[data-protect-unsaved-changes]').areYouSure();

  // Checbox accept to continue
  $('[data-js-checkbox-control]').on('click', function(e) {
    var $this = $(this);
    var status = $this[0].checked;
    if (status === true) {
      $('[data-js-checkbox-control-btn]').removeClass('disabled');
    } else {
      $('[data-js-checkbox-control-btn]').addClass('disabled');
    }
  });

});
