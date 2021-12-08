/**
 * ------------------------------------------------------------------------
 * Mega Menu
 * ------------------------------------------------------------------------
 */

$(document).ready(function() {

  $("[js-mega-link]").on("mouseenter", function(e) {

    var height = document.getElementById("header").offsetHeight;
    $(this).next(".menu-dropdown").css("top", height);

  });

  // Menu close button functionality, to revert hover effect
  $(".menu-dropdown__close").on("click", function() {
    $(".menu-dropdown").css("top", "-100vh");
  });

});
