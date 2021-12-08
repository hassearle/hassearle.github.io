/**
 * ------------------------------------------------------------------------
 * Membership Progress
 * ------------------------------------------------------------------------
 */

// progress data-attrs:
// - currency  e.g. $ / £
// - currency target e.g. £100
// - currency current e.g. £70
// - percent progress previous 60%
// - percent progress current 70% 
// complete = true : if purple bar reached target 

// requestAnimationFrame
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

// Adds context for multiple progress bars
$('[data-js-progress]').each(function(index, thisProgressBar) {
  var $progress = $(thisProgressBar);
  var progressBar = $progress.children('.membership-progress__bar');
  var progressPending = $(progressBar).children('.membership-progress__value');
  var progressTarget = $progress.children('.membership-progress__target');
  var progressTargetValue = progressTarget.children('.membership-progress__target-value');

  var $progressData = $progress.data();
  var currency = $progressData.jsCurrency;
  var currencyTarget = $progressData.jsCurrencyTarget;
  var percentCurrent = $progressData.jsPercentCurrent;
  var percentPrevious = $progressData.jsPercentPrevious;

  var ratioToCurrency = currencyTarget / 100;
  var percToPrevCurrency = ratioToCurrency * percentPrevious;

  // set target / bar
  progressBar[0].innerHTML = currency + currencyTarget;
  progressTargetValue[0].innerHTML = currency + currencyTarget;

  // requestAnimationFrame / loop / animate
  function step(timestamp) {
    percToPrevCurrency += 1 * ratioToCurrency;
    percentPrevious += 1;

    progressBar[0].style.width = percentPrevious + "%";
    progressBar[0].innerHTML = currency + percToPrevCurrency.toFixed(2); // percentPrevious + "%" + " " + 

    if (percentPrevious === 100) {
      $($progress).addClass('membership-progress--complete');
    }

    if (percentPrevious < percentCurrent) {
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);

});
