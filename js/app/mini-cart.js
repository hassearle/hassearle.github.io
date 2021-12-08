/**
 * ------------------------------------------------------------------------
 * Mini Cart
 * ------------------------------------------------------------------------
 */

$(document).ready(function() {

  // Remove product from mini card
  $("[data-js-mini-cart-remove]").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();

    var $productRow = $(this).closest(".product--cart");
    // $productRow.append('<div class="product-cart__overlay"><div class="product-cart__overlay-content"><span class="icon--loader a-rotate"></span></div></div>');

    setTimeout(function() {
      $productRow.remove();
    }, 1000);

    // loader icon
    $('[data-mini-cart-loader]').addClass('mini-cart__loader--active');
    setTimeout(function() {
      $('[data-mini-cart-loader]').removeClass('mini-cart__loader--active');
    }, 1000);

  });

  // count bag items and add number to bag icon - header menus
  var miniCartItems = $('.mini-cart__body .scroller')[1];
  if (miniCartItems) {
    miniCartItems = miniCartItems.children.length;
    if (miniCartItems !== 0) {
      $('.js-bag-items-number').text(miniCartItems);
    }
  }

});
