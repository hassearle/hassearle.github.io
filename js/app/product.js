/**
 * ------------------------------------------------------------------------
 * Product
 * ------------------------------------------------------------------------
 */

$(document).ready(function() {
  // Function to smooth scroll effect intended for popup UI elements
  function popupSmoothScroll(oScrollToElem) {
    var iWidthWindow = $(window).width()
    var iScrollInitDelay = iWidthWindow <= 768 ? 500 : 50

    // Smooth scroll delay - gives time for popup to animate and change sto register in the client
    setTimeout(function() {
        // Get header height
        var iHeightHeader = $("#header").outerHeight()
        var iOffsetPopup = oScrollToElem.offset().top
        if (typeof iHeightHeader === "undefined") {
          iHeightHeader = 0
        }
        var iOffsetScroll = iOffsetPopup - iHeightHeader - 50

        // Perform smooth scroll to offset
        $("html, body").animate({
            scrollTop: iOffsetScroll,
          },
          350
        )
      }, iScrollInitDelay)
      //
  }

  // Infinite Scroll
  $(".products--infinite").visibility({
    once: false,
    // update size when new content loads
    observeChanges: true,
    // load content on bottom edge visible
    onBottomVisible: function() {
      // get count of products
      var count = $(".products--infinite .product").length

      if (count < 48) {
        // activate the loader
        $(".loader").addClass("active")

        setTimeout(function() {
          // Demo Products
          $(".products--infinite .product").each(function(
            index,
            element
          ) {
            if (index < 12) {
              $(element).clone().appendTo(".products--infinite")
            }
          })

          $(".loader").removeClass("active")
        }, 1000)
      }
    },
  })

  $(document).on("click", "[data-js-add-favourite]", function(e) {
    e.preventDefault()

    var $icon = $(this).find("span")
    var $product = $(this).closest(".product")
    var $overlay = $product.find("[data-js-product-interaction-overlay]")

    if ($overlay.is(":visible")) {
      return
    }

    if ($icon.hasClass("icon--favorite")) {
      $icon
        .removeClass("icon--favorite")
        .addClass("icon--favorite-fill-brand")
      $(ADD_FAVORITE_HTML).appendTo($overlay)
      $overlay.fadeIn()
      setTimeout(function() {
        $overlay.fadeOut(400, function() {
          $overlay.html("")
        })
      }, 3000)
    } else {
      $icon
        .removeClass("icon--favorite-fill-brand")
        .addClass("icon--favorite")
      $(REMOVE_FAVORITE_HTML).appendTo($overlay)
      $overlay.fadeIn()
      setTimeout(function() {
        $overlay.fadeOut(400, function() {
          $overlay.html("")
        })
      }, 3000)
    }

    // Smooth scroll to top of popup
    var oElemToScrollTo = $product
      //
    popupSmoothScroll(oElemToScrollTo)
  })

  $("[data-js-add-favourite-inline]").on("click", function(e) {
    e.preventDefault()

    var $icon = $(this).find("span")
    var $product = $(this).closest(".product")
    var $overlay = $product.find("[data-js-product-interaction-overlay]")

    if ($overlay.is(":visible")) {
      return
    }

    if ($icon.hasClass("icon--favorite")) {
      $icon
        .removeClass("icon--favorite")
        .addClass("icon--favorite-fill-brand")
      $(ADD_FAVORITE_HTML).appendTo($overlay)
      $overlay.fadeIn()
      setTimeout(function() {
        $overlay.fadeOut(400, function() {
          $overlay.html("")
        })
      }, 3000)
    } else {
      $icon
        .removeClass("icon--favorite-fill-brand")
        .addClass("icon--favorite")

      $(REMOVE_FAVORITE_HTML).appendTo($overlay)
      $overlay.fadeIn()
      setTimeout(function() {
        $overlay.fadeOut(400, function() {
          $overlay.html("")
        })
      }, 3000)
    }

    // Smooth scroll to top of popup
    var oElemToScrollTo = $product
      //
    popupSmoothScroll(oElemToScrollTo)
  })

  $(document).on("click", '[data-js-bag-add]', function(e) {
    e.preventDefault()
    var $product = $(this).closest(".product")
    var $overlay = $product.find("[data-js-product-interaction-overlay]")

    if ($overlay.is(":visible")) {
      return
    }

    $(ADD_TO_BAG_HTML).appendTo($overlay)
    $overlay.fadeIn()
    increaseBagItems()
    setTimeout(function() {
      $overlay.fadeOut(400, function() {
        $overlay.html("")
      })
    }, 3000)

    // Smooth scroll to top of popup
    var oElemToScrollTo = $product
      //
    popupSmoothScroll(oElemToScrollTo)
  })

  $("[data-js-bag-error-general]").on("click", function(e) {
    e.preventDefault()
    var $product = $(this).closest(".product")
    var $overlay = $product.find("[data-js-product-interaction-overlay]")

    if ($overlay.is(":visible")) {
      return
    }

    $(ADD_TO_BAG_ERROR_HTML).appendTo($overlay)
    $overlay.fadeIn()
    increaseBagItems()
    setTimeout(function() {
      $$overlay.fadeOut(400, function() {
        $overlay.html("")
      })
    }, 3000)

    // Smooth scroll to top of popup
    var oElemToScrollTo = $product
      //
    popupSmoothScroll(oElemToScrollTo)
  })

  $("[data-js-bag-error-bagmax]").on("click", function(e) {
      e.preventDefault()
      var $product = $(this).closest(".product")
      var $overlay = $product.find("[data-js-product-interaction-overlay]")

      if ($overlay.is(":visible")) {
        return
      }

      $(ADD_TO_BAG_MAX_ERROR_HTML).appendTo($overlay)
      $overlay.fadeIn()
      increaseBagItems()
      setTimeout(function() {
        $overlay.fadeOut(400, function() {
          $overlay.html("")
        })
      }, 3000)

      // Smooth scroll to top of popup
      var oElemToScrollTo = $product
        //
      popupSmoothScroll(oElemToScrollTo)
    })
    // a product / search result / grid loyalty btn
  $(document).on("click", "[data-js-product-add-to-order]", function(e) {
    e.preventDefault()
    var $product = $(this).closest(".product")
    if ($product.length === 0) {
      $product = $(this).closest(".product-basic")
    }

    var $overlay = $product.find("[data-js-product-interaction-overlay]")

    if ($overlay.is(":visible")) {
      return
    }

    $(ADD_TO_ORDER_HTML).appendTo($overlay)
    $overlay.fadeIn()
    increaseBagItems()
    setTimeout(function() {
      $overlay.fadeOut(400, function() {
        $overlay.html("")
      })
    }, 3000)

    // Smooth scroll to top of popup
    // var oElemToScrollTo = $product;
    //
    //popupSmoothScroll(oElemToScrollTo);
  })

  // a product / search result / grid loyalty btn
  // $("[data-js-loyalty-add]").on("click", function (e) {
  $(document).on("click", '[data-js-loyalty-add]', function(e) {
    e.preventDefault()
    var $product = $(this).closest(".product")
    if ($product.length === 0) {
      $product = $(this).closest(".product-basic")
    }

    var $overlay = $product.find("[data-js-product-interaction-overlay]")

    if ($overlay.is(":visible")) {
      return
    }

    $(ADD_TO_LOYALTY_HTML).appendTo($overlay)
    $overlay.fadeIn()
    increaseBagItems()
    setTimeout(function() {
      $overlay.fadeOut(400, function() {
        $overlay.html("")
      })
    }, 3000)

    // Smooth scroll to top of popup
    var oElemToScrollTo = $product
      //
    popupSmoothScroll(oElemToScrollTo)
  })

  // a product / search result / grid loyalty btn _ MULTI
  //$("[data-js-multi-loyalty-add]").on("click", function (e) {
  $(document).on("click", "[data-js-multi-loyalty-add]", function(e) {
    e.preventDefault()

    var $multiLoyaltyOrder = $(MULTIPLE_LOYALTY_HTML),
      $product = $(this).closest(".product")

    if ($(this)[0].dataset.jsMultiLoyaltyAdd === "morethantwo") {
      $multiLoyaltyOrder = $(MULTIPLE_LOYALTY_2PLUS_HTML) // to test multiple: MULTIPLE_LOYALTY_2PLUS_HTML
    }

    if ($product.length === 0) {
      $product = $(this).closest(".product-basic")
    }

    if ($(this).data("overlay") !== false) {
      $("body").append("<div class='multi-loyalty-order--overlay'></div>")
    }

    var itemCount = $product.find(".multi-loyalty-order").length

    if (itemCount === 0) {
      var popItem = $multiLoyaltyOrder.appendTo($product)
      var popType = $(this)[0].dataset.jsMultiLoyaltyAdd

      if (popType === "mbsm-dtlg") {
        popItem.addClass("multi-loyalty-order--mbsm-dtlg")
      } else if (popType === "mblg-dtlg") {
        popItem.addClass("multi-loyalty-order--mblg-dtlg")
      } else if (popType === "mbfx-dtlg") {
        popItem.addClass("multi-loyalty-order--mbfx-dtlg")
          // Overlay if fixed pos
          // if ($(this).data("overlay") !== false) {
        $("body #site-canvas").append(
            "<div class='multi-loyalty-order--overlay'></div>"
          )
          // }
      } else if (popType === "mbsm-dtsm") {
        popItem.addClass("multi-loyalty-order--mbsm-dtsm")
      } else if (popType === "mbls-dtls") {
        popItem.addClass("multi-loyalty-order--mbls-dtls")
      }

      setTimeout(function() {
        popItem.addClass("multi-loyalty-order--open")
      }, 100)
    }

    // add scrollbar modifier class only if there are more than 2 multi-loyalty-order__item(s)
    var $orderListLength = $product.find(".multi-loyalty-order__item")
      .length
    if ($orderListLength > 2) {
      $product
        .find(".multi-loyalty-order")
        .addClass("multi-loyalty-order--scroller")
    }

    // on add circle icon click
    $product
      .find("[data-multi-loyalty-order-select]")
      .on("click", function() {
        $(".multi-loyalty-order__item").removeClass(
          "multi-loyalty-order__item--selected"
        )
        $(this)
          .find('[class*="icon--"]')
          .removeClass("icon--add-circle")
          .addClass("icon--tick-circle-fill")
        $(this)
          .parent()
          .parent()
          .addClass("multi-loyalty-order__item--selected")

        setTimeout(function() {
          $multiLoyaltyOrder.removeClass("multi-loyalty-order--open")
          $("body .multi-loyalty-order--overlay").fadeOut(400)
        }, 2000)

        setTimeout(function() {
          $multiLoyaltyOrder.remove()
          $("body .multi-loyalty-order--overlay").remove()
        }, 2400)

        // Success Message after adding
        //var $overlay = $product.find('[data-js-product-interaction-overlay]');
        var $overlay = $(
          '<div class="product__overlay" data-js-product-interaction-overlay></div>'
        )
        $(this).prepend($overlay)
        if ($overlay.is(":visible")) {
          return
        }
        $(ADD_TO_LOYALTY_HTML).appendTo($overlay)
        $overlay.fadeIn()
        increaseBagItems()
        setTimeout(function() {
          $overlay.fadeOut(400, function() {
            $overlay.html("")
          })
        }, 5000)
      })

    $("[data-multi-loyalty-order-close]").on("click", function(e) {
      $multiLoyaltyOrder.removeClass("multi-loyalty-order--open")
        //$(".multi-loyalty-order").removeClass("multi-loyalty-order--open");
      $("body .multi-loyalty-order--overlay").fadeOut(400)

      setTimeout(function() {
        $("body .multi-loyalty-order--overlay").remove()
        $multiLoyaltyOrder.remove()
      }, 500)
    })

    // Smooth scroll to top of popup
    var oElemToScrollTo = $product
    popupSmoothScroll(oElemToScrollTo)
  })

  // a NON product / search result / grid loyalty btn - MULTI
  //$("[data-js-multi-loyalty-add-item]").on("click", function (e) {
  $(document).on("click", "[data-js-multi-loyalty-add-item]", function(e) {
    e.preventDefault()

    var $multiLoyaltyOrder = $(MULTIPLE_LOYALTY_HTML) // to test multiple: MULTIPLE_LOYALTY_2PLUS_HTML    ~   MULTIPLE_LOYALTY_HTML (for just two)
    var $loyaltyItem = $(this).parent()
    var $item = $loyaltyItem.find(".multi-loyalty-order")

    if ($item.length < 1) {
      var popItem = $multiLoyaltyOrder.appendTo($loyaltyItem)
      var popType = $(this)[0].dataset.jsMultiLoyaltyAddItem

      if (popType === "mbsm-dtlg") {
        popItem.addClass("multi-loyalty-order--mbsm-dtlg")
      } else if (popType === "mblg-dtlg") {
        popItem.addClass("multi-loyalty-order--mblg-dtlg")
      } else if (popType === "mbfx-dtlg") {
        popItem.addClass("multi-loyalty-order--mbfx-dtlg")

        $("body #site-canvas").append(
          "<div class='multi-loyalty-order--overlay'></div>"
        )
      } else if (popType === "mbsm-dtsm") {
        popItem.addClass("multi-loyalty-order--mbsm-dtsm")
      } else if (popType === "mbls-dtls") {
        popItem.addClass("multi-loyalty-order--mbls-dtls")
      }

      setTimeout(function() {
        popItem.addClass("multi-loyalty-order--open")
      }, 100)
    }

    // add scrollbar modifier class only if there are more than 2 multi-loyalty-order__item(s)
    var $orderListLength = $loyaltyItem.find(".multi-loyalty-order__item")
      .length
    if ($orderListLength > 2) {
      $loyaltyItem
        .find(".multi-loyalty-order")
        .addClass("multi-loyalty-order--scroller")
    }

    // on add circle icon click
    $loyaltyItem
      .find("[data-multi-loyalty-order-select]")
      .on("click", function() {
        $(".multi-loyalty-order__item").removeClass(
          "multi-loyalty-order__item--selected"
        )
        $(this)
          .find('[class*="icon--"]')
          .removeClass("icon--add-circle")
          .addClass("icon--tick-circle-fill")
        $(this)
          .parent()
          .parent()
          .addClass("multi-loyalty-order__item--selected")

        setTimeout(function() {
          $multiLoyaltyOrder.removeClass("multi-loyalty-order--open")
          $("body .multi-loyalty-order--overlay").fadeOut(400)
        }, 2000)

        setTimeout(function() {
          $multiLoyaltyOrder.remove()
          $("body .multi-loyalty-order--overlay").remove()
        }, 2400)

        // Success Message after adding
        //var $overlay = $loyaltyItem.parent().find('[data-js-product-interaction-overlay]');
        // <div class="product__overlay" data-js-product-interaction-overlay></div>
        var $overlay = $(
          '<div class="product__overlay" data-js-product-interaction-overlay></div>'
        )
        $(this).prepend($overlay)
        if ($overlay.is(":visible")) {
          return
        }

        $(ADD_TO_LOYALTY_HTML).appendTo($overlay)
        $overlay.fadeIn()
        increaseBagItems()
        setTimeout(function() {
          $overlay.fadeOut(400, function() {
            $overlay.html("")
          })
        }, 5000)
      })

    $("[data-multi-loyalty-order-close]").on("click", function(e) {
      $multiLoyaltyOrder.removeClass("multi-loyalty-order--open")
      $("body .multi-loyalty-order--overlay").fadeOut(400)

      setTimeout(function() {
        $("body .multi-loyalty-order--overlay").remove()
        $multiLoyaltyOrder.remove()
      }, 500)
    })

    // Smooth scroll to top of popup
    var oElemToScrollTo = $loyaltyItem.find(".multi-loyalty-order")
    popupSmoothScroll(oElemToScrollTo)
  })

  $("[data-js-featured-loyalty-add]").on("click", function(e) {
    e.preventDefault()

    var $product = $(this).closest(".product-featured")
    $product.append(
      '<div class="product__overlay" data-js-product-interaction-overlay></div>'
    )

    var $overlay = $product.find("[data-js-product-interaction-overlay]")

    if ($overlay.is(":visible")) {
      return
    }

    $(ADD_TO_LOYALTY_HTML).appendTo($overlay)
    $overlay.fadeIn()
    increaseBagItems()
    setTimeout(function() {
      $overlay.fadeOut(400, function() {
        $overlay.html("")
      })
    }, 3000)

    // Smooth scroll to top of popup
    var oElemToScrollTo = $product
      //
    popupSmoothScroll(oElemToScrollTo)
  })

  $("[data-js-featured-bag-add]").on("click", function(e) {
    e.preventDefault()

    var $product = $(this).closest(".product-featured")
    $product.append(
      '<div class="product__overlay" data-js-product-interaction-overlay></div>'
    )

    var $overlay = $product.find("[data-js-product-interaction-overlay]")

    if ($overlay.is(":visible")) {
      return
    }

    $(ADD_TO_BAG_HTML).appendTo($overlay)
    $overlay.fadeIn()
    increaseBagItems()
    setTimeout(function() {
      $overlay.fadeOut(400, function() {
        $overlay.html("")
      })
    }, 3000)

    // Smooth scroll to top of popup
    var oElemToScrollTo = $product
      //
    popupSmoothScroll(oElemToScrollTo)
  })

  $("[data-js-product-oos]").on("click", function(e) {
    e.preventDefault()

    $(this).toggleClass("product__msg--active")

    // Smooth scroll to top of popup
    var oElemToScrollTo = $(this).closest(".product")
      //
    popupSmoothScroll(oElemToScrollTo)
  })

  // .product-pack active clicks
  $(".product-pack__body-column").on("click", function(e) {
    //console.log(e);
    $(".product-pack__body-column").removeClass(
      "product-pack__body-column--active"
    )
    $(this).addClass("product-pack__body-column--active")
  })
})
