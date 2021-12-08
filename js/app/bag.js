/**
 * ------------------------------------------------------------------------
 * Bag
 * ------------------------------------------------------------------------
 */

$(document).ready(function() {
  //

  $(".search__button-close").on("click", function(e) {
    $("[data-js-bag-search]").val("");
    $("[data-js-bag-search-results]").hide();
    $(".my-bag__main-content").removeClass("my-bag__main-content--active");
    $(this).hide();
  });

  function searchBag(e) {
    // Show Search Results

    if ($(this).val().length > 0) {
      $("[data-js-bag-search-results]").show();
      $(".search__button-close").show();
      $(".my-bag__main-content").addClass("my-bag__main-content--active");
    } else {
      $("[data-js-bag-search-results]").hide();
      $(".search__button-close").hide();
      $(".my-bag__main-content").removeClass("my-bag__main-content--active");
    }
  }

  $("[data-js-bag-search]").on("keyup", searchBag);
});

// Toggle button - as seen on the My Bag page
var toggleTriggerElem = $("#toggle-points"),
  bagItemsContainer = $("#js-bag-items"),
  pointsElems = bagItemsContainer.find(".product-bag__points"),
  pointsMsg = bagItemsContainer.find(".product-bag__quantity-field-alert"),
  orderSummaryElements = $("[data-js-points-toggle]");

function togglePoints() {
  if (toggleTriggerElem.length > 0) {
    if (!toggleTriggerElem || toggleTriggerElem.is(":checked")) {
      bagItemsContainer.addClass("bag__items--points-active");
      pointsElems.slideDown(100);
      pointsMsg.slideDown(100);
      $(".bag__toggle-note").slideDown(300);
      orderSummaryElements.slideDown(100);
    } else {
      bagItemsContainer.removeClass("bag__items--points-active");
      pointsElems.slideUp(100);
      pointsMsg.slideUp(100);
      $(".bag__toggle-note").slideUp(300);
      orderSummaryElements.slideUp(100);
    }
  }
}

$(document).ready(function() {
  togglePoints();

  $("#js-toggle-switch").checkbox({
    onChange: function() {
      togglePoints();
    },
  });
});

$("[data-js-bag-items-expand]").on("click", function(e) {
  e.preventDefault();
  e.stopPropagation();

  $(".order-details__content .scroller").toggleClass("disabled");
  $(".order-details__products").toggleClass("order-details__products--grid");

  $(this).closest(".order-details").toggleClass("is-open");

  $(".order-details__pagination").toggle();
  $(".order-details__edit").toggle();
});

// Input with increment/decrement buttons - as seen on the My Bag page
$(document).on("click", ".quantity-field__button", function(e) {
  var $input = $(this).siblings(".quantity-field__input");

  if ($(this).hasClass("quantity-field__button--increment")) {
    $input.val(parseInt($input.val()) + 1);
  } else if ($input.val() >= 1) {
    $input.val(parseInt($input.val()) - 1);
  }
  validatePoints($(this), $input);
});

function validatePoints(element, input) {
  if ($(element).parents(".product-bag__points").length === 1) {
    var pointsAvailable = 3; // TODO: Implement Points Fetch
    if (input.val() > pointsAvailable) {
      element
        .closest(".bag__item")
        .find(".product-bag__quantity-field.quantity-field")
        .append(
          '<div class="product-bag__quantity-field-alert"><span class="icon--info-circle-brand"></span><span class="product-bag__quantity-field-alert-msg">You don’t have enough points for that quantity</span></div>'
        );
      input.val(pointsAvailable);
      return false;
    } else {
      element
        .closest(".bag__item")
        .find(".product-bag__quantity-field-alert")
        .remove();
      return true;
    }
  }
}

// Show the 'bag abandon` modal when a users cursor leaves
// the viewport on pages with the class protect-bag-abandonment
if ($(".protect-bag-abandonment").length) {
  $(document).on("mouseleave", function() {
    $("#lrp-bag-modal").modal("show");
  });
}
// Show the 'bag abandon` modal when a user attempts to leave via the back button or header logo
$("[data-js-bag-abandon-modal]").on("click", function(e) {
  e.preventDefault();
  $("#order_confirmation-bag-modal").modal("show");
});

// Remove product w loader if close icon clicked
$("[data-js-bag-remove-product]").on("click", function(e) {
  e.preventDefault();

  var $productItem = $(this).closest(".bag__item");
  // $productRow.append('<div class="product-cart__overlay"><div class="product-cart__overlay-content"><span class="icon--loader a-rotate"></span></div></div>');

  setTimeout(function() {
    $productItem.remove();
  }, 1000);

  // loader icon
  // $('[data-bag-loader]').addClass('bag__loader--active');
  // setTimeout(function(){
  //   $('[data-bag-loader]').removeClass('bag__loader--active');
  // }, 1000);

  var $product = $productItem.find(".product-bag");

  // loader icon - bag inner
  $product.find("[data-bag-loader]").addClass("bag__loader--active");
  setTimeout(function() {
    $product.find("[data-bag-loader]").removeClass("bag__loader--active");
  }, 1000);

  // loader icon - bag outer
  // $('[data-bag-loader-outer]').addClass('bag__loader--active');
  // setTimeout(function(){
  //   $('[data-bag-loader-outer]').removeClass('bag__loader--active');
  // }, 1000);

  // loader icon - order summary
  $("[data-order-summary-loader]").addClass("order-summary__loader--active");
  setTimeout(function() {
    $("[data-order-summary-loader]").removeClass(
      "order-summary__loader--active"
    );
  }, 1000);
});

// PRODUCT BAG

// Increment down - product w loader if '-' icon clicked
// data-js-bag-inc-down-product
$("[data-js-bag-inc-down-product]").on("click", function(e) {
  e.preventDefault();

  var $product = $(this).closest(".product-bag");

  // loader icon - bag inner
  $product.find("[data-bag-loader]").addClass("bag__loader--active");
  setTimeout(function() {
    $product.find("[data-bag-loader]").removeClass("bag__loader--active");
  }, 1000);

  // loader icon - bag outer
  // $('[data-bag-loader-outer]').addClass('bag__loader--active');
  // setTimeout(function(){
  //   $('[data-bag-loader-outer]').removeClass('bag__loader--active');
  // }, 1000);

  // loader icon - order summary
  $("[data-order-summary-loader]").addClass("order-summary__loader--active");
  setTimeout(function() {
    $("[data-order-summary-loader]").removeClass(
      "order-summary__loader--active"
    );
  }, 1000);
});

// PRODUCT BAG

// Increment up - product w loader if '+' icon clicked
// data-js-bag-inc-up-product
$("[data-js-bag-inc-up-product]").on("click", function(e) {
  e.preventDefault();

  var $product = $(this).closest(".product-bag");

  // loader icon - bag inner
  $product.find("[data-bag-loader]").addClass("bag__loader--active");
  setTimeout(function() {
    $product.find("[data-bag-loader]").removeClass("bag__loader--active");
  }, 1000);

  // loader icon - bag outer
  // $('[data-bag-loader-outer]').addClass('bag__loader--active');
  // setTimeout(function(){
  //   $('[data-bag-loader-outer]').removeClass('bag__loader--active');
  // }, 1000);

  // loader icon - order summary
  $("[data-order-summary-loader]").addClass("order-summary__loader--active");
  setTimeout(function() {
    $("[data-order-summary-loader]").removeClass(
      "order-summary__loader--active"
    );
  }, 1000);
});

// LRP

// Increment down - product w loader LRP if '-' icon clicked
// data-js-bag-inc-down-product
$(document).on("click", "[data-js-bag-inc-down-product-lrp]", function(e) {
  //e.preventDefault();

  var $productLrp = $(this).closest(".product-lrp");

  // loader icon - bag inner
  $productLrp.find("[data-bag-loader]").addClass("bag__loader--active");
  setTimeout(function() {
    $productLrp.find("[data-bag-loader]").removeClass("bag__loader--active");
  }, 1000);

  // loader icon - bag outer
  // $('[data-bag-loader-outer]').addClass('bag__loader--active');
  // setTimeout(function(){
  //   $('[data-bag-loader-outer]').removeClass('bag__loader--active');
  // }, 1000);

  // loader icon - order summary
  $("[data-order-summary-loader]").addClass("order-summary__loader--active");
  setTimeout(function() {
    $("[data-order-summary-loader]").removeClass(
      "order-summary__loader--active"
    );
  }, 1000);
});

// LRP

// Increment up - product w loader LRP if '+' icon clicked
// data-js-bag-inc-up-product
$(document).on("click", "[data-js-bag-inc-up-product-lrp]", function(e) {
  //e.preventDefault();

  var $productLrp = $(this).closest(".product-lrp");

  // loader icon - bag inner
  $productLrp.find("[data-bag-loader]").addClass("bag__loader--active");
  setTimeout(function() {
    $productLrp.find("[data-bag-loader]").removeClass("bag__loader--active");
  }, 1000);

  // loader icon - bag outer
  // $('[data-bag-loader-outer]').addClass('bag__loader--active');
  // setTimeout(function(){
  //   $('[data-bag-loader-outer]').removeClass('bag__loader--active');
  // }, 1000);

  // loader icon - order summary
  $("[data-order-summary-loader]").addClass("order-summary__loader--active");
  setTimeout(function() {
    $("[data-order-summary-loader]").removeClass(
      "order-summary__loader--active"
    );
  }, 1000);
});

// Language Select - #Item number update from data attr
// Initial value set on input prior to change
if (
  $(
    "[data-js-kit-language-dropdown] .dropdown__menu > .dropdown__menu-item:first-child"
  ).length > 0
) {
  $("[data-js-kit-language-dropdown] input").attr(
    "value",
    $(
      "[data-js-kit-language-dropdown] .dropdown__menu > .dropdown__menu-item:first-child"
    )[0].dataset.value
  );
}
// On dropdown input change
$(document).on("change", "[data-js-kit-language-dropdown] input", function(e) {
  //var $dropdownValue = $(this).parent().find(".dropdown__text")[0].innerText;
  var $dropdownDataValue = $(this).attr("value");

  // Update product #Item number
  $("[data-js-item-id]").text($dropdownDataValue);
});
