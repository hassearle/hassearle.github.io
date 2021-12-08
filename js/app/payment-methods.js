/**
 * ------------------------------------------------------------------------
 * Payment Methods v1.1
 * ------------------------------------------------------------------------
 */

// Add Payment Method - Card
var checkoutAddPaymentCardFrom = {
  $form: $('[data-js-payment-method-add-new-card]'),
  init: function() {
    this.$form.on('keyup', 'input.required', this.validate);
    this.$form.on('click', '[data-js-add-payment-method-card]', this.save);
    this.$form.on('change', '[data-js-checkout-save-payment-method]', this.toggleSavePaymentMethod);
    this.$form.on('change', '[data-js-same-address-trigger]', this.toggleSameAddress);
  },
  validate: function() {
    var isValid = true;
    checkoutAddPaymentCardFrom.$form.find("input.required").each(function(index, element) {
      if (isValid && $(element).val().length === 0) {
        isValid = false;
      }
    });
    if (isValid) {
      checkoutAddPaymentCardFrom.$form.find("button[type=submit]").removeClass("disabled").prop("disabled", false);
    } else {
      checkoutAddPaymentCardFrom.$form.find("button[type=submit]").addClass("disabled").prop("disabled", true);
    }
  },
  save: function(e) {
    e.preventDefault();
    $("[data-js-payment-method-select] .row-select--payment-method").append(PAYMENT_METHOD_CARD);
    $("[data-js-payment-method-select], [data-js-payment-method-save], .order-details__foot").fadeIn();
    $("[data-js-select-new-payment-method], [data-js-add-new-payment-method], [data-js-payment-method-add-new-card], [data-js-payment-method-add-new-dd], [data-js-payment-method-edit-card], [data-js-payment-method-add-new-wire]").hide();
    $("[data-js-payment-method-save]").removeClass("disabled").prop("disabled", false);

    // Add the CVV validation field back if required
    $(".order-details--payment .order-details__current").find("i, dl").show();
    $(".order-details--payment .order-details__current > p").remove();

    // Position open section
    var activeSection = $(this).closest("section.is-open");
    if (activeSection.length > 0) {
      setTimeout(function() {
        // Get header height
        var iHeightHeader = $('#header').outerHeight();
        var iOffsetPopup = activeSection.offset().top;
        var iOffsetScroll = (iOffsetPopup - iHeightHeader) - 180;
        $('html, body').animate({
          scrollTop: iOffsetScroll
        }, 500);
      }, 500);
    }

  },
  toggleSavePaymentMethod: function() {
    checkoutAddPaymentCardFrom.$form.find('.save-payment-method-option').fadeToggle();
  },
  toggleSameAddress: function() {
    checkoutAddPaymentCardFrom.$form.find('[data-js-same-address-fields]').fadeToggle();
  }
};
checkoutAddPaymentCardFrom.init();

// Edit Payment Method - Card
var checkoutEditPaymentCardFrom = {
  $form: $('[data-js-payment-method-edit-card]'),
  init: function() {
    this.$form.on('keyup', 'input.required', this.validate);
    this.$form.on('click', '[data-js-edit-payment-method-card]', this.save);
  },
  validate: function() {
    var isValid = true;
    checkoutEditPaymentCardFrom.$form.find("input.required").each(function(index, element) {
      if (isValid && $(element).val().length === 0) {
        isValid = false;
      }
    });
    if (isValid) {
      checkoutEditPaymentCardFrom.$form.find("button[type=submit]").removeClass("disabled").prop("disabled", false);
    } else {
      checkoutEditPaymentCardFrom.$form.find("button[type=submit]").addClass("disabled").prop("disabled", true);
    }
  },
  save: function(e) {
    e.preventDefault();
    $("[data-js-payment-method-select], [data-js-payment-method-save], .order-details__foot").fadeIn();
    $("[data-js-select-new-payment-method], [data-js-add-new-payment-method], [data-js-payment-method-add-new-card], [data-js-payment-method-add-new-dd], [data-js-payment-method-edit-card], [data-js-payment-method-add-new-wire]").hide();
    $("[data-js-payment-method-save]").removeClass("disabled").prop("disabled", false);
  }
};
checkoutEditPaymentCardFrom.init();

// Add Payment Method - Direct Debit
var checkoutAddPaymentDirectDebitFrom = {
  $form: $('[data-js-payment-method-add-new-dd]'),
  init: function() {
    this.$form.on('keyup', 'input.required', this.validate);
    this.$form.on('click', '[data-js-add-payment-method-direct-debit]', this.save);
  },
  validate: function() {
    var isValid = true;
    checkoutAddPaymentDirectDebitFrom.$form.find("input.required").each(function(index, element) {
      if (isValid && $(element).val().length === 0) {
        isValid = false;
      }
    });
    if (isValid) {
      checkoutAddPaymentDirectDebitFrom.$form.find("button[type=submit]").removeClass("disabled").prop("disabled", false);
    } else {
      checkoutAddPaymentDirectDebitFrom.$form.find("button[type=submit]").addClass("disabled").prop("disabled", true);
    }
  },
  save: function(e) {
    e.preventDefault();
    $("[data-js-payment-method-select] .row-select--payment-method").append(PAYMENT_METHOD_DIRECT_DEBIT);
    $("[data-js-payment-method-select], [data-js-payment-method-save], .order-details__foot").fadeIn();
    $("[data-js-select-new-payment-method], [data-js-add-new-payment-method], [data-js-payment-method-add-new-card], [data-js-payment-method-add-new-dd], [data-js-payment-method-edit-card], [data-js-payment-method-add-new-wire]").hide();
    $("[data-js-payment-method-save]").removeClass("disabled").prop("disabled", false);

    // Position open section
    var activeSection = $(this).closest("section.is-open");
    if (activeSection.length > 0) {
      setTimeout(function() {
        // Get header height
        var iHeightHeader = $('#header').outerHeight();
        var iOffsetPopup = activeSection.offset().top;
        var iOffsetScroll = (iOffsetPopup - iHeightHeader) - 180;
        $('html, body').animate({
          scrollTop: iOffsetScroll
        }, 500);
      }, 500);
    }

  }
};
checkoutAddPaymentDirectDebitFrom.init();

// Edit Payment Method - Direct Debit
var checkoutEditPaymentDirectDebitFrom = {
  $form: $('[data-js-payment-method-edit-dd]'),
  init: function() {
    this.$form.on('keyup', 'input.required', this.validate);
    this.$form.on('click', '[data-js-edit-payment-method-direct-debit]', this.save);
  },
  validate: function() {
    var isValid = true;
    checkoutEditPaymentDirectDebitFrom.$form.find("input.required").each(function(index, element) {
      if (isValid && $(element).val().length === 0) {
        isValid = false;
      }
    });
    if (isValid) {
      checkoutEditPaymentDirectDebitFrom.$form.find("button[type=submit]").removeClass("disabled").prop("disabled", false);
    } else {
      checkoutEditPaymentDirectDebitFrom.$form.find("button[type=submit]").addClass("disabled").prop("disabled", true);
    }
  },
  save: function(e) {
    e.preventDefault();
    $("[data-js-payment-method-select], [data-js-payment-method-save], .order-details__foot").fadeIn();
    $("[data-js-select-new-payment-method], [data-js-add-new-payment-method], [data-js-payment-method-add-new-card], [data-js-payment-method-add-new-dd], [data-js-payment-method-edit-dd], [data-js-payment-method-edit-card], [data-js-payment-method-add-new-wire]").hide();
    $("[data-js-payment-method-save]").removeClass("disabled").prop("disabled", false);

    // Position open section
    var activeSection = $(this).closest("section.is-open");
    if (activeSection.length > 0) {
      setTimeout(function() {
        // Get header height
        var iHeightHeader = $('#header').outerHeight();
        var iOffsetPopup = activeSection.offset().top;
        var iOffsetScroll = (iOffsetPopup - iHeightHeader) - 180;
        $('html, body').animate({
          scrollTop: iOffsetScroll
        }, 500);
      }, 500);
    }
  }
};
checkoutEditPaymentDirectDebitFrom.init();

// Add Payment Method - Wirw
var checkoutAddPaymentWireFrom = {
  $form: $('[data-js-payment-method-add-new-wire]'),
  init: function() {
    this.$form.on('keyup', 'input.required', this.validate);
    this.$form.on('click', '[data-js-add-payment-method-wire]', this.save);
  },
  validate: function() {
    var isValid = true;
    checkoutAddPaymentWireFrom.$form.find("input.required").each(function(index, element) {
      if (isValid && $(element).val().length === 0) {
        isValid = false;
      }
    });
    if (isValid) {
      checkoutAddPaymentWireFrom.$form.find("button[type=submit]").removeClass("disabled").prop("disabled", false);
    } else {
      checkoutAddPaymentWireFrom.$form.find("button[type=submit]").addClass("disabled").prop("disabled", true);
    }
  },
  save: function(e) {
    e.preventDefault();
    $("[data-js-payment-method-select] .row-select--payment-method").html('').append(PAYMENT_METHOD_WIRE);
    $("[data-js-payment-method-select], [data-js-payment-method-save], .order-details__foot").fadeIn();
    $("[data-js-select-new-payment-method], [data-js-add-new-payment-method], [data-js-payment-method-add-new-card], [data-js-payment-method-add-new-dd], [data-js-payment-method-edit-card], [data-js-payment-method-add-new-wire]").hide();
    $("[data-js-payment-method-save]").removeClass("disabled").prop("disabled", false);
    // Position open section
    var activeSection = $(this).closest("section.is-open");
    if (activeSection.length > 0) {
      setTimeout(function() {
        // Get header height
        var iHeightHeader = $('#header').outerHeight();
        var iOffsetPopup = activeSection.offset().top;
        var iOffsetScroll = (iOffsetPopup - iHeightHeader) - 180;
        $('html, body').animate({
          scrollTop: iOffsetScroll
        }, 500);
      }, 500);
    }
  }
};
checkoutAddPaymentWireFrom.init();

$(function() {

  function toggleCvvValidation(state) {
    // Remove the CVV validation field and change the subtitle when adding new card
    $(".order-details--payment .order-details__current").append("<p class='order-details__current-ctn'>Add a payment method to continue…</p>").find("i, dl").hide();
    $("[data-js-payment-verify-card-cvv]").hide();
  }

  // Toggle display of payment details within title area
  $("[data-js-payment-title-details-btn]").on("click", function(e) {
    e.preventDefault();
    // Prevents click event on parent from highlighting current row when hide/show details button is clicked
    e.stopPropagation();

    $(this).find('span').toggle();
    $(this).parent().next('[data-js-payment-title-details-panel]').toggle();
  });

  /* Global Payment Functions - Start */
  // Edit new Payment method
  $(document).on("click", "[data-js-edit-payment-method]", function(e) {
    e.preventDefault();

    $(".order-details__foot").hide();
    $("[data-js-payment-method-select]").hide();
    $("[data-js-select-new-payment-method]").hide();
    $("[data-js-payment-method-edit-card]").fadeIn();
  });

  // Add new Payment method
  $("[data-js-add-new-payment-method]").on("click", function(e) {
    e.preventDefault();

    $("[data-js-payment-method-select]").hide();
    $("[data-js-payment-method-save]").hide();
    $("[data-js-select-new-payment-method]").fadeIn();

    // Remove the CVV validation field and change the subtitle when adding new card
    $(".order-details--payment .order-details__current").append("<p class='order-details__current-ctn'>Add a payment method to continue…</p>").find("i, dl").hide();
    $("[data-js-payment-verify-card-cvv]").hide();
  });

  // Back button/link
  $("[data-js-select-new-payment-method-back]").on("click", function(e) {
    e.preventDefault();

    $("[data-js-payment-method-select]").fadeIn();
    $("[data-js-payment-method-save]").fadeIn();
    $(".order-details__foot").fadeIn();
    $("[data-js-select-new-payment-method]").hide();

    // Add the CVV validation field back if required
    $(".order-details--payment .order-details__current").find("i, dl").show();
    $(".order-details--payment .order-details__current > p").remove();
    $("[data-js-payment-verify-card-cvv]").show();

  });

  // Add/new cancel
  $("[data-js-payment-method-add-new-cancel]").on("click", function(e) {
    e.preventDefault();

    $("[data-js-select-new-payment-method]").fadeIn();
    $("[data-js-payment-method-add-new-card]").hide();
    $("[data-js-payment-method-add-new-dd]").hide();
    $("[data-js-payment-method-edit-card]").hide();
    $("[data-js-payment-method-add-new-wire]").hide();
    $("[data-js-payment-method-save]").hide();
    $("[data-js-payment-method-select]").hide();
    $(".order-details__foot").hide();
    $("[data-js-payment-method-add-new-ideal]").hide();

  });

  // Edit Cancel
  $(document).on("click", "[data-js-payment-method-edit-cancel]", function(e) {
    e.preventDefault();

    $("[data-js-select-new-payment-method]").hide();
    $("[data-js-payment-method-add-new-card]").hide();
    $("[data-js-payment-method-add-new-dd]").hide();
    $("[data-js-payment-method-edit-ideal").hide();
    $("[data-js-payment-method-edit-paypal]").hide();
    $("[data-js-payment-method-edit-applepay]").hide();
    $("[data-js-payment-method-edit-googlepay]").hide();
    $("[data-js-payment-method-edit-card]").hide();
    $("[data-js-payment-method-edit-dd]").hide();
    $("[data-js-payment-method-add-new-wire]").hide();
    $("[data-js-payment-method-save]").fadeIn();
    $("[data-js-payment-method-select]").fadeIn();
    $(".order-details__foot").fadeIn();
  });
  /* Global Payment Functions - End */

  /* Credit Card - Start */
  $("[data-js-select-new-payment-method-card]").on("click", function(e) {
    e.preventDefault();

    $("[data-js-select-new-payment-method]").hide();
    $("[data-js-payment-method-add-new-card]").fadeIn();
  });
  /* Credit Card - End */

  /* Direct Debit - Start */
  // Select Direct Debit
  $(document).on("change", "#payment-method-dd, #payment-method-wire", function(e) {
    $("[data-js-payment-verify-card-cvv]").hide();
  });

  // Add Direct Debit
  $("[data-js-select-new-payment-method-dd]").on("click", function(e) {
    e.preventDefault();

    $("[data-js-select-new-payment-method]").hide();
    $("[data-js-payment-method-add-new-dd]").fadeIn();
  });

  // Edit Direct Debit
  $(document).on("click", "[data-js-edit-payment-method-dd]", function(e) {
    e.preventDefault();

    $(".order-details__foot").hide();
    $("[data-js-payment-method-select]").hide();
    $("[data-js-payment-method-edit-dd]").fadeIn();
    checkoutEditPaymentDirectDebitFrom.validate();

  });
  /* Direct Debit - End */

  /* iDEAL - Start */
  // Select iDEAL
  // $(document).on("change", "#payment-method-dd, #payment-method-wire", function(e) {
  //  $("[data-js-payment-verify-card-cvv]").hide();
  // });

  // Add iDEAL
  $("[data-js-select-new-payment-method-ideal]").on("click", function(e) {
    e.preventDefault();

    $("[data-js-select-new-payment-method]").hide();
    $("[data-js-payment-method-add-new-ideal]").fadeIn();
  });
  /* iDEAL - End */

  // Edit iDEAL
  $(document).on("click", "[data-js-edit-payment-method-ideal]", function(e) {
    e.preventDefault();

    $(this).closest(".order-details__foot").hide();
    $("[data-js-payment-method-select]").hide();
    $("[data-js-select-new-payment-method]").hide();
    $("[data-js-payment-method-save]").hide();
    $("[data-js-select-new-payment-method]").hide();
    $("[data-js-payment-method-edit-ideal]").find(".fieldset-header__action").removeAttr("data-js-payment-method-add-new-cancel").attr("data-js-payment-method-edit-cancel", "");
    $("[data-js-payment-method-edit-ideal]").fadeIn();
  });
  /* iDEAL edit - End */

  // Edit PayPal
  $(document).on("click", "[data-js-edit-payment-method-paypal]", function(e) {
    e.preventDefault();

    $(this).closest(".order-details__foot").hide();
    $("[data-js-payment-method-select]").hide();
    $("[data-js-select-new-payment-method]").hide();
    $("[data-js-payment-method-save]").hide();
    $("[data-js-select-new-payment-method]").hide();
    $("[data-js-payment-method-edit-paypal]").find(".fieldset-header__action").removeAttr("data-js-payment-method-add-new-cancel").attr("data-js-payment-method-edit-cancel", "");
    $("[data-js-payment-method-edit-paypal]").fadeIn();
  });
  /* PayPal edit - End */

  // Edit ApplePay
  $(document).on("click", "[data-js-edit-payment-method-applepay]", function(e) {
    e.preventDefault();

    $(this).closest(".order-details__foot").hide();
    $("[data-js-payment-method-select]").hide();
    $("[data-js-select-new-payment-method]").hide();
    $("[data-js-payment-method-save]").hide();
    $("[data-js-select-new-payment-method]").hide();
    $("[data-js-payment-method-edit-applepay]").find(".fieldset-header__action").removeAttr("data-js-payment-method-add-new-cancel").attr("data-js-payment-method-edit-cancel", "");
    $("[data-js-payment-method-edit-applepay]").fadeIn();
  });
  /* ApplePay edit - End */

  // Edit GooglePay
  $(document).on("click", "[data-js-edit-payment-method-googlepay]", function(e) {
    e.preventDefault();

    $(this).closest(".order-details__foot").hide();
    $("[data-js-payment-method-select]").hide();
    $("[data-js-select-new-payment-method]").hide();
    $("[data-js-payment-method-save]").hide();
    $("[data-js-select-new-payment-method]").hide();
    $("[data-js-payment-method-edit-googlepay]").find(".fieldset-header__action").removeAttr("data-js-payment-method-add-new-cancel").attr("data-js-payment-method-edit-cancel", "");
    $("[data-js-payment-method-edit-googlepay]").fadeIn();
  });
  /* GooglePay edit - End */

  /* Wire transfers - Start */
  // Add Wire Transfer
  $("[data-js-select-new-payment-method-wire]").on("click", function(e) {
    e.preventDefault();

    $("[data-js-select-new-payment-method]").hide();
    $("[data-js-payment-method-add-new-wire]").find(".fieldset-header__action").attr("data-js-payment-method-add-new-cancel", "").removeAttr("data-js-payment-method-edit-cancel");
    $("[data-js-payment-method-add-new-wire]").fadeIn();
  });

  // Edit Wire Transfer
  $(document).on("click", "[data-js-edit-payment-method-wire-transfer]", function(e) {
    e.preventDefault();

    $(this).closest(".order-details__foot").hide();
    $("[data-js-payment-method-select]").hide();
    $("[data-js-select-new-payment-method]").hide();

    $("[data-js-select-new-payment-method]").hide();
    $("[data-js-payment-method-add-new-wire]").find(".fieldset-header__action").removeAttr("data-js-payment-method-add-new-cancel").attr("data-js-payment-method-edit-cancel", "");
    $("[data-js-payment-method-add-new-wire]").fadeIn();
  });
  /* Wire transfers - End */

  /* Toggle payment buttons when alternative payment options (PayPal, ApplePay & GooglePay) are selected in the checkout */
  $('[data-js-payment-method-select] input[type="radio"]').on("change", function() {
    var inputValue = $(this).data("toggle-target"),
      originalButton = $("[data-original-payment-button]"),
      alternateButton = $("[data-alternate-payment-button]");

    if (undefined !== inputValue && inputValue.length) {
      var targetBox = $(inputValue);
      alternateButton.not(targetBox).hide();
      originalButton.hide();
      $(targetBox).show();
    } else {
      alternateButton.hide();
      originalButton.show();
    }
  });
});
