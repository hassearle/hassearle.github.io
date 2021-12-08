/**
 * ------------------------------------------------------------------------
 * Tooltip
 * ------------------------------------------------------------------------
 */

$(document).ready(function() {

  // tooltipInit (Mobile click action vs hover on Desktop)
  function tooltipInit() {
    if ((window.USER_IS_TOUCHING === true) && (window.innerWidth < 1024)) {
      $('.tooltip').popup({
        on: 'click'
      });
    } else {
      $('.tooltip').popup({

      });
    }
  }
  tooltipInit();
  $(window).resize(tooltipInit);

  // for tooltips that are links - preventDefault
  $('a.tooltip').on('click', function(e) {
    e.preventDefault();
  });

});

function touchDetectInit() {
  window.USER_IS_TOUCHING = ("ontouchstart" in document.documentElement) ? true : false;
}

touchDetectInit();
$(window).resize(touchDetectInit);
