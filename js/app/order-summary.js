/**
 * ------------------------------------------------------------------------
 * Order Summary
 * ------------------------------------------------------------------------
 */
$(function() {

  // Show order summary on on scroll down and hide on scroll up
  var sSelectorOrderSummary = '[data-js-order-summary].order-summary--mobile, .enroll-kit-continue';
  var sClassActive = 'is-active';
  var position = $(window).scrollTop();
  // Display the order summary if the page is already scroll on page load
  if (position > 0) {
    $(sSelectorOrderSummary).addClass(sClassActive);
  }
  // Show/Hide the order summary on scroll event
  $(window).scroll(function(event) {
    // Get the current scroll position so we can check if the 
    // scroll event is negative position, used for when iOS 
    // 'elastic band' effect shows/hides the element on bunce
    var scroll = $(window).scrollTop();
    if (scroll === position) {
      $(sSelectorOrderSummary).addClass(sClassActive);
    } else if (scroll > position) {
      if (scroll > 0) {
        $(sSelectorOrderSummary).addClass(sClassActive);
      }
    } else {
      if (scroll < $(window).height()) {
        $(sSelectorOrderSummary).removeClass(sClassActive);
      }
    }
    position = scroll;
  });

  // Order summary toggle to effectively hide order summary popup on mobile
  $('[data-js-order-summary-toggle]').on('click', function(e) {
    e.preventDefault();
    $(sSelectorOrderSummary).toggleClass("is-open");
    if ($(sSelectorOrderSummary).hasClass("is-open")) {
      // Apend the overlay
      $("#site-canvas").prepend("<div id='overlay'></div>");
    } else {
      // remove the overlay 
      $("#overlay").remove();
    }
  });

  $('[data-js-order-summary] .order-details--mobile').on('click', function(e) {
    e.preventDefault();

    // collapse the order summary
    $(sSelectorOrderSummary).toggleClass("is-open");

    // remove the overlay 
    $("#overlay").remove();

    // switch to 'Order Details' tab
    $('.lrp-manage-tabs__items').find('.item').tab('change tab', 'order');

    // and scroll to the tabs list
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".bag__toggle").offset().top - 140
    }, 1000);
  });
});
