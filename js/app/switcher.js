/**
 * ------------------------------------------------------------------------
 * Switcher
 * ------------------------------------------------------------------------
 */

$(document).ready(function() {

  // switcher toggle button
  $(".switcher__switch").addClass('off');

  $(".slider__input").on("click", function(e) {
    var sliderStatus = e.target.checked;

    if (sliderStatus) {
      $(this).parent().parent().addClass('on');
      $(this).parent().parent().removeClass('off');
    } else {
      $(this).parent().parent().removeClass('on');
      $(this).parent().parent().addClass('off');
    }
  });

  // switcher toggle label
  $('.switcher__switch').on('click', function() {
    if ($(this).hasClass('on')) {
      $('.js-warehouse').text('US');
    }
    if ($(this).hasClass('off')) {
      $('.js-warehouse').text('CA');
    }
  });

  $(".slider__input").trigger("click");

  // Account type modal switcher
  $(".switcher--account input").on("change", function() {
    $(".change-account-type-features").toggleClass("change-account-type-features--active");
  });
});
