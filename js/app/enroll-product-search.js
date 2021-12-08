/**
 * ------------------------------------------------------------------------
 * Enroll Product Search
 * ------------------------------------------------------------------------
 */

$(function() {

  var $searchField = $("[data-js-enroll-product-search]"),
    $searchIcon = $('[data-js-enroll-product-search-icon]'),
    $closeSearchButton = $('[data-js-enroll-product-close-search-button]'),
    $searchHistory = $("[data-js-enroll-product-search-history]"),
    $searchResults = $('[data-js-enroll-product-search-results]'),
    $addedProductsContainer = $('[data-js-enroll-product-search-added]');

  // Search
  $searchField.on("focus", function(e) {
    e.preventDefault();

    if (!$searchResults.is(':visible')) {
      $searchHistory.css('display', 'flex');
      $searchIcon.hide();
      $closeSearchButton.show();
    }

    // Update the DOM
    $addedProductsContainer.hide();
  });

  $closeSearchButton.on('click', function(e) {
    e.preventDefault();

    $(this).hide();
    $searchIcon.show();
    $searchResults.hide();
    $searchField.val("");
    $addedProductsContainer.fadeIn();
  });

  var historyLinkClicked = false;
  $searchField.on("blur", function(e) {
    e.preventDefault();

    if (historyLinkClicked) // cancel the blur event
    {
      historyLinkClicked = false;
    } else // blur event is okay
    {
      $searchHistory.css('display', 'none');

      if (!$searchResults.is(':visible')) {
        $closeSearchButton.hide();
        $searchIcon.show();
        $addedProductsContainer.show();
      }
    }
  });

  $("[data-js-enroll-product-search-history-link]").on("mousedown", function(e) {
    historyLinkClicked = true;
  });

  $("[data-js-enroll-product-search-history-link]").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    $("[data-js-enroll-product-search-history]").css('display', 'none');
    $searchResults.css('display', 'block');
    $searchField.val($(this).text());
  });

  $searchField.on("keyup", function(e) {
    e.preventDefault();

    if ($(this).val() === "") {
      $("[data-js-enroll-product-search-history]").css('display', 'flex');
      $searchResults.css('display', 'none');
    } else {
      $("[data-js-enroll-product-search-history]").css('display', 'none');
      $searchResults.css('display', 'block');
    }
  });

});
