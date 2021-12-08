/**
 * ------------------------------------------------------------------------
 * Simple CSS height restricted / ellipsis 'read more' / 'read less' toggler
 * ------------------------------------------------------------------------
 */

$(document).ready(function() {
  var $readMoreContent = $('[data-js-read-more]'); // content [to be restricted...]
  var $readMoreLink = $('[data-js-read-more-link]'); // content [to be restricted...]
  var $readMoreStatus = false;

  $readMoreLink.on('click', function(e) {
    e.preventDefault();
    $readMoreContent.toggleClass('read-more--open');
    if ($readMoreStatus == false) {
      $(this).children('.read-more__link-text--more').hide();
      $(this).children('.read-more__link-text--less').show();
      $readMoreStatus = true;
    } else {
      $(this).children('.read-more__link-text--more').show();
      $(this).children('.read-more__link-text--less').hide();
      $readMoreStatus = false;
    }

  });
});
