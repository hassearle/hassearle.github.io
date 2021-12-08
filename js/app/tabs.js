/**
 * ------------------------------------------------------------------------
 * Tabs
 * ------------------------------------------------------------------------
 */

$(function() {

  // Tabs
  $("[data-js-wi-tab]").on("click", function(e) {
    e.preventDefault();

    $("[data-js-wi-tab]").removeClass("active");
    $(this).addClass("active");

    var tabId = $(this).data("target");

    $("[data-js-wi-tab-pane]").removeClass("active");
    $(tabId).addClass("active");

  });

  // Accordion
  var $element;

  $(document).on("click", "[data-js-wi-tab-inner]:not(.active)", function(e) {
    e.preventDefault();

    $element = $(this);

    $('html, body').stop().animate({
      scrollTop: $element.parent().offset().top - $("#header").height()
    }, 400, function() {
      // Open the pane
      $element.next().slideDown().addClass("active");

    });

    setTimeout(function() {
      // Close the open pane
      $element.parent().siblings().find(".item.product-whats-inside__info-list-item").removeClass("active");
      $element.parent().siblings().find(".item.product-whats-inside__info-list-item__content").hide();

      // Kepp scroll position to the open pane
      window.scrollTo(0, $element.parent().offset().top - $("#header").height());
    }, 1000);

  });

  // Open the active pane
  $("[data-js-wi-tab-inner].active + .item").slideDown();
});
