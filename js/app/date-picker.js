/**
 * ------------------------------------------------------------------------
 * Date Picker
 * ------------------------------------------------------------------------
 */

var $disabledDates = new Array("13 September 2019", "14 September 2019", "15 September 2019");
var $pomDates = new Array("16 September 2019", "17 September 2019", "18 September 2019");
var $availableDates = new Array("19 September 2019", "20 September 2019", "21 September 2019");

function initDates(mydate) {
  var $return = true;
  var $returnclass = "available";
  $checkdate = $.datepicker.formatDate('dd MM yy', mydate);
  var i = 0;
  for (i = 0; i < $disabledDates.length; i++) {
    if ($disabledDates[i] === $checkdate) {
      $return = false;
      $returnclass = "unavailable-processing";
    }
  }
  for (i = 0; i < $pomDates.length; i++) {
    if ($pomDates[i] === $checkdate) {
      $return = false;
      $returnclass = "pom";
    }
  }
  for (i = 0; i < $availableDates.length; i++) {
    if ($availableDates[i] === $checkdate) {
      $return = false;
      $returnclass = "available-processing";
    }
  }

  return [$return, $returnclass];
}

$(document).ready(function() {

  // Initialise datepickers
  $('.js-datepicker').datepicker({
    inline: true,
    showOtherMonths: true,
    dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    beforeShowDay: initDates
  });

  // Initialise datepickers
  $('.js-datepicker-ui').datepicker({
    inline: false,
    showOtherMonths: true,
    dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    beforeShowDay: initDates
  });

});
