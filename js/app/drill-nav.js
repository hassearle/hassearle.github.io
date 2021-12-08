/**
 * ------------------------------------------------------------------------
 * Drill Nav
 * ------------------------------------------------------------------------
 */

$(document).ready(function() {

  // Drill Nav Menu
  var item = $('.drill-nav__item');
  // check if it has child menu and add class if so
  item.each(function(iIndex) {
    if (this.children.length > 1) {
      $(this).addClass('has-child-menu');
    }
  });

  var timer = false;
  $(".drill-nav__item.has-child-menu").hover(function(e) {
      // Mouse enter - get the height of the sub nav and 
      // set the height of the nav to ensure the mega menu
      // height grows when hovering
      clearTimeout(timer);
      var $target = $(e.currentTarget);
      var $nav = $target.closest('.menu-dropdown__nav');
      var $subNav = $target.find('.drill-nav__list');
      $nav.css('min-height', $subNav[0].scrollHeight);
    },
    function(e) {
      // Mouse leave - Resets
      var $target = $(e.currentTarget);
      var $nav = $target.closest('.menu-dropdown__nav');
      timer = setTimeout(function(e) {
        // Reset the height on mouse out 
        $nav.css('min-height', "0px");
      }, 250);
    });
});
