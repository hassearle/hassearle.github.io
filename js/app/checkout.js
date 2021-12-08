/**
 * ------------------------------------------------------------------------
 * Checkout
 * ------------------------------------------------------------------------
 */

// Checkout - Delivery Address
var checkoutDeliveryAddress = {
  $section: $("[js-data-accordion-type='delivery-address']"),
  init: function() {
    checkoutDeliveryAddress.validate();

    this.$section.on('click', '.row-select__item:not(.is-disabled)', this.validate);
  },
  validate: function(e) {
    var selectedOption = checkoutDeliveryAddress.$section.find(".form-check-input:checked");
    if (selectedOption.length > 0) {
      var btnContinue = checkoutDeliveryAddress.$section.find('.order-details__foot button');
      $(".order-details__desc--address").removeClass("order-details__desc--faded order-details__desc--italic").prev().removeClass("order-details__title--faded");
      if (btnContinue[0].hasAttribute('disabled')) {
        btnContinue.attr('style', 'transition: none !important;').prop('disabled', false);
        setTimeout(function() {
          btnContinue.attr('style', '');
        }, 100);
      }
    } else {
      $(".order-details__desc--address").addClass("order-details__desc--faded order-details__desc--italic").prev().addClass("order-details__title--faded");
    }
  }
};
checkoutDeliveryAddress.init();

// Checkout - Delivery Method
var checkoutDeliveryMethod = {
  $section: $("[js-data-accordion-type='delivery-options']"),
  init: function() {
    checkoutDeliveryMethod.validate();

    this.$section.on('click', '.row-select__item:not(.is-disabled)', this.validate);
  },
  validate: function(e) {
    var selectedOption = checkoutDeliveryMethod.$section.find(".form-check-input:checked");
    if (selectedOption.length > 0) {
      var btnContinue = checkoutDeliveryMethod.$section.find('.order-details__foot button');
      $(".order-details__desc--delivery").removeClass("order-details__desc--faded order-details__desc--italic").prev().removeClass("order-details__title--faded");
      if (btnContinue[0].hasAttribute('disabled')) {
        btnContinue.attr('style', 'transition: none !important;').prop('disabled', false);
        setTimeout(function() {
          btnContinue.attr('style', '');
        }, 100);
      }
    } else {
      $(".order-details__desc--delivery").addClass("order-details__desc--faded order-details__desc--italic").prev().addClass("order-details__title--faded");
    }
  }
};
checkoutDeliveryMethod.init();

// Checkout - Payment Method
var checkoutPaymentMethod = {
  $section: $("[js-data-accordion-type='payment-method']"),
  init: function() {
    checkoutPaymentMethod.validate();
    this.$section.on('click', '.row-select__item:not(.is-disabled)', this.validate);
  },
  validate: function(e) {
    var selectedOption = checkoutPaymentMethod.$section.find(".form-check-input:checked");
    if (selectedOption.length > 0) {
      $("[js-data-accordion-type='payment-method']").attr("data-valid", true);
      var btnContinue = checkoutPaymentMethod.$section.find('.order-details__foot button');
      $(".order-details__desc--payment").removeClass("order-details__desc--faded order-details__desc--italic").prev().removeClass("order-details__title--faded");
      if (btnContinue[0].hasAttribute('disabled')) {
        btnContinue.attr('style', 'transition: none !important;').prop('disabled', false);
        setTimeout(function() {
          btnContinue.attr('style', '');
        }, 100);
      }
    } else {
      $("[js-data-accordion-type='payment-method']").attr("data-valid", false);
      $(".order-details__desc--payment").addClass("order-details__desc--faded order-details__desc--italic").prev().addClass("order-details__title--faded");
    }
  }
};
checkoutPaymentMethod.init();

// Checkout - Notifications
var checkoutNotificationsFrom = {
  $form: $('[data-js-checkout-notifications-form]'),
  init: function() {
    checkoutNotificationsFrom.validate();
    this.$form.on('keyup', 'input.required', this.validate);
  },
  validate: function() {
    var isValid = true;
    checkoutNotificationsFrom.$form.find("input.required").each(function(index, element) {
      if (isValid && $(element).val().length === 0) {
        isValid = false;
      }
    });
    if (isValid) {
      $("[js-data-accordion-type='notification']").attr("data-valid", true);
      checkoutNotificationsFrom.$form.find("button[type=submit]").removeClass("disabled").prop("disabled", false);
    } else {
      $("[js-data-accordion-type='notification']").attr("data-valid", false);
      checkoutNotificationsFrom.$form.find("button[type=submit]").addClass("disabled").prop("disabled", true);
    }
  },
};
checkoutNotificationsFrom.init();

// Checkout - Form/Accordion
var checkoutAccordion = {
  $accordion: $("#js-order-details-accordion"),
  init: function() {
    checkoutAccordion.validate();

    this.$accordion.on('click', '[data-js-delivery-method-save], [data-js-delivery-option-save], [data-js-payment-method-save], [data-js-checkout-notifications-save]', this.progressNextSection);
    this.$accordion.on('click', '.order-details__header', this.toggleSection);
  },
  getActiveSection: function() {
    // Get the active/open section
    var activeSection = this.$accordion.find("section.is-open");
    return activeSection;
  },
  toggleSection: function(e) {
    e.preventDefault();

    // Open/Close the Accordion Section
    var section = $(this).parent('section');
    if (!section.hasClass("is-disabled")) {
      section.toggleClass("is-open").find('.order-details__content').slideToggle(250);
    }
  },
  progressNextSection: function(e) {
    e.preventDefault();

    // Open next Section when clicking continue
    var activeSection = $(this).closest("section.is-open");
    activeSection.removeClass("is-open").attr("data-valid", true).find('.order-details__content').hide();
    activeSection.next('section').removeClass("is-disabled").addClass("is-open").find('.order-details__content').slideDown(250);

    if (activeSection.next('section').length > 0) {
      // Vertical scroll to next accordion - to create focus
      setTimeout(function() {
        // Get header height
        var iHeightHeader = $('#header').outerHeight();
        var iOffsetPopup = activeSection.next('section').offset().top;
        var iOffsetScroll = (iOffsetPopup - iHeightHeader) - 180;
        $('html, body').animate({
          scrollTop: iOffsetScroll
        }, 500);
      }, 500);
    }
    checkoutAccordion.validate();
  },
  validate: function(e) {
    var checkoutValid = true;
    if ($("[js-data-accordion-type]").length > 0) {
      $.each($("[js-data-accordion-type]"), function(index, element) {
        if (typeof $(element).attr("data-valid") === "undefined" || $(element).attr("data-valid") === "false") {
          checkoutValid = false;
        }
      });

      if (checkoutValid) {
        $(".checkout__submit .button").removeClass("disabled").prop("disabled", false);
        $(".order-summary__button:not(.basic)").removeClass("disabled").prop("disabled", false);
      } else {
        $(".checkout__submit .button").prop("disabled", true);
        $(".order-summary__button").addClass("disabled").prop("disabled", true);
      }
    }
  }
};
checkoutAccordion.init();

$(document).ready(function() {

  // Checks radio button when wider item is clicked
  $('.row-select__item').not('.is-disabled').on('click', function() {
    var itemInput = $(this).find('.row-select__input');
    if (itemInput.length) {
      itemInput.prop('checked', true).change();
    }
  });

  // Show/Hide the 'Save Payment Method' Nickname block
  $('[data-js-checkbox-reveal-checkbox]').change(function() {
    // Reveal panel element
    var revealPanelElement = $(this).closest('.field').next('[data-js-checkbox-reveal-panel]');
    // Programitcally 
    if (this.checked) {
      // Checked
      revealPanelElement.addClass('is-open');
    } else {
      // Not checked
      revealPanelElement.removeClass('is-open');
    }
  });

  /**
   * Perform content update within accordion header
   *
   * @param {object} domNode - Applicable '.order-details__header' DOM node
   * @param {array} content 	- Content array to update content with
   * @param {string} layout 	- Is string to override default markup output
   */
  function accordionHeaderContent(domNode, content, layout) {

    // Validate that dom node argument is valid and content is an array
    if ((domNode !== undefined) && (domNode !== null) && (typeof(domNode) === 'object') && (Array.isArray(content))) {

      // Check content has elements/data to populate header content with
      if (content.length > 0) {

        // Create new content for header subtitle content
        var sContent = '';

        // Switches markup output based on layout argument
        switch (layout) {

          case 'notification':
            $(".order-details__current__message").remove();
            if ((content[0] !== undefined) && (content[0] !== null) && (content[0] !== '')) {
              var html01 = domNode.find('.order-details__header-content .order-details__current').eq(0).html();
              var html01Array = html01.split(' ');
              html01Array[0] = content[0];
              // Update content and HTML
              domNode.find('.order-details__header-content .order-details__current').eq(0).html(html01Array.join(' '));
            }

            if ((content[1] !== undefined) && (content[1] !== null) && (content[1] !== '')) {
              var html02 = domNode.find('.order-details__header-content .order-details__current').eq(1).html();
              var html02Array = html02.split(' ');
              html02Array[0] = content[1];
              // Update content and HTML
              domNode.find('.order-details__header-content .order-details__current').eq(1).html(html02Array.join(' '));
            }
            break;

          case 'icon':
            if ((content[0] !== undefined) && (content[0] !== null) && (content[0] !== '')) {
              sContent += content[0].replace('--xl', '--sm');
            }
            sContent += '<dl>';
            if ((content[1] !== undefined) && (content[1] !== null) && (content[1] !== '')) {
              sContent += '<dt>' + content[1] + '</dt>';
            }
            if ((content[2] !== undefined) && (content[2] !== null) && (content[2] !== '')) {
              sContent += '<dd><strong><span class="u--visuallyhidden-sm"><span fieldname="checkout_payment_ending">Ending:</span> </span>*' + content[2].substr(content[2].length - 4) + '</strong></dd>';
            }
            if ((content[3] !== undefined) && (content[3] !== null) && (content[3] !== '')) {
              var tempArray = content[3].split(' ');
              var tempArrayEnd = tempArray[tempArray.length - 1];
              sContent += '<dd class="u--visuallyhidden-sm">' + tempArrayEnd + '</dd>';
            }
            sContent += '</dl>';

            // Update content within span
            domNode.find('.order-details__current').html(sContent);
            break;

          default:
            if ((content[0] !== undefined) && (content[0] !== null) && (content[0] !== '')) {
              sContent += '<b>' + content[0] + '</b>&nbsp;';
            }
            sContent += content[1] + '&nbsp;';
            if ((content[2] !== undefined) && (content[2] !== null) && (content[2] !== '')) {
              sContent += '<b>' + content[2] + '</b>&nbsp;';
            }
            sContent += content[3] + '&nbsp;';
            if ((content[4] !== undefined) && (content[4] !== null) && (content[4] !== '')) {
              sContent += '<b>' + content[4] + '</b>&nbsp;';
            }

            // Update content within span
            domNode.find('.order-details__current').html('<span>' + sContent + '</span>');
        }
      }
    }
  }

  // Actions when save & continue buttons are clicked
  $('.order-details__foot button:not(disabled)').on('click', function(e) {
    e.preventDefault();
    var elemLocator = $(this).parent().parent();
    // Determine which accordion is being used
    var accordionTypeTitle = '';
    var accordionTypeAttr = elemLocator.parent().attr('js-data-accordion-type');
    if (accordionTypeAttr !== null || accordionTypeAttr !== undefined) {
      accordionTypeTitle = accordionTypeAttr;
    }
    // Placeholder variables for assisting content population
    var contentHeaderArray = [];
    var contentRow = elemLocator.find('.row-select__item.is-checked .row-select__content > *');
    // Handle each header area on an accordion type basis
    switch (accordionTypeTitle) {
      case 'order':
        // No action to be taken
        // Update accordion header content
        accordionHeaderContent(elemLocator.prev('.order-details__header'), contentHeaderArray);
        break;
      case 'delivery-address':
        var contentTemp = contentRow.eq(1).text().trim();
        var contentTempArray = contentTemp.split(',');
        var contentTempArray1 = contentTempArray[0].toString();
        contentTempArray.shift();
        var contentTempArrayReduced = contentTempArray.join(', ');
        contentHeaderArray[0] = '';
        contentHeaderArray[1] = contentTempArray1 + ',';
        contentHeaderArray[2] = contentTempArrayReduced;
        contentHeaderArray[3] = '';
        contentHeaderArray[4] = '';
        // Update accordion header content
        accordionHeaderContent(elemLocator.prev('.order-details__header'), contentHeaderArray);
        break;
      case 'delivery-address-new':
        contentHeaderArray[0] = '';
        contentHeaderArray[1] = $("#add-address-full-name").val() + ' ' + $("#add-address-last-name").val() + ',';
        contentHeaderArray[2] = $("#add-address-edit-address-line-1").val() + ', ' + $("#add-address-edit-address-city").val() + ', ' + $("#add-address-edit-address-postcode").val();
        contentHeaderArray[3] = '';
        contentHeaderArray[4] = '';
        // Update accordion header content
        accordionHeaderContent(elemLocator.prev('.order-details__header'), contentHeaderArray);
        // Update Mobile Order Summary
        $(".order-details__desc--address").html('<span class="order-details__desc-primary">' + contentHeaderArray[1] + '</span> <span class="order-details__desc-secondary">' + contentHeaderArray[2] + '</span>');
        $(".order-details__desc--address").removeClass("order-details__desc--faded order-details__desc--italic").prev().removeClass("order-details__title--faded");
        break;
      case 'delivery-options':
        //
        contentHeaderArray[0] = '';
        contentHeaderArray[1] = contentRow.eq(0).text();
        contentHeaderArray[2] = contentRow.eq(1).text();
        contentHeaderArray[3] = contentRow.eq(2).text();
        contentHeaderArray[4] = '';
        // Update accordion header content
        accordionHeaderContent(elemLocator.prev('.order-details__header'), contentHeaderArray);
        // Update Mobile Order Summary
        $(".order-details__desc--delivery").html('<span class="order-details__desc-primary"><span fieldname="checkout_order_summary_economy_title">' + contentHeaderArray[1] + '</span></span><span>' + contentHeaderArray[3] + '</span>');
        $(".order-details__desc--delivery").removeClass("order-details__desc--faded order-details__desc--italic").prev().removeClass("order-details__title--faded");
        break;
      case 'payment-method':
        contentHeaderArray[0] = contentRow.eq(-1).html();
        contentHeaderArray[1] = contentRow.eq(0).text().trim();
        contentHeaderArray[2] = contentRow.eq(1).find('.row-select__desc--primary').text();
        contentHeaderArray[3] = contentRow.eq(1).find('.row-select__desc--secondary').text();
        contentHeaderArray[4] = '';
        // Update accordion header content
        accordionHeaderContent(elemLocator.prev('.order-details__header'), contentHeaderArray, 'icon');
        // Update Mobile Order Summary
        $(".order-details__desc--payment").html('<span class="order-details__desc-primary"><span fieldname="checkout_order_summary_delivery_method_title">' + contentHeaderArray[1] + '</span></span> <span>' + contentHeaderArray[2] + '</span>');
        $(".order-details__desc--payment").removeClass("order-details__desc--faded order-details__desc--italic").prev().removeClass("order-details__title--faded");
        break;
      case 'notification':
        var contentInputs = elemLocator.find('.form .field input');
        contentHeaderArray[0] = contentInputs[0].value;
        contentHeaderArray[1] = contentInputs[1].value;
        // Update accordion header content
        accordionHeaderContent(elemLocator.prev('.order-details__header'), contentHeaderArray, 'notification');
        break;
      default:
        contentHeaderArray[0] = '';
        contentHeaderArray[1] = contentRow.eq(0).text();
        contentHeaderArray[2] = contentRow.eq(1).text();
        contentHeaderArray[3] = contentRow.eq(2).text();
        contentHeaderArray[4] = '';
        // Update accordion header content
        accordionHeaderContent(elemLocator.prev('.order-details__header'), contentHeaderArray);
    }
  });

  // Alters input field housing styles when input state is changed
  $(document).on("change", ".row-select__input", function(e) {
    e.preventDefault();
    var localFieldset = $(this).parents('fieldset');
    if (localFieldset.length) {
      var inputParent = $(this).parents('.row-select__item');
      $(localFieldset).find('.row-select__item').removeClass('is-checked');
      $(inputParent).addClass('is-checked');
    }
  });

  // Display the correct section when delivery option is selected
  $("#checkout_option_delivery").on("change", function() {
    $("#js-pickup-options .row-select").hide();
    $("#js-delivery-options .row-select").fadeIn();
  });

  // Display the correct section when pickup option is selected
  $("#checkout_option_pickup").on("change", function() {
    $("#js-delivery-options .row-select").hide();
    $("#js-pickup-options .row-select").fadeIn();
  });

  // 'Save to Address Book' checkbox action
  $("#save-to-address-book").on("change", function() {
    $("[data-js-checkout-save-address-options]").fadeToggle();
  });

  // Display the Wire transfer message on the Delivery options 
  // when Wire transfer is selected as payment options
  $(".row-select__input").on("change", function() {
    if ($("input:radio[name='payment-options']:checked").val() === 'wire') {
      $("[data-js-wire-transfer-message]").show();
    } else {
      $("[data-js-wire-transfer-message]").hide();
    }
  });

  // Prevent the Accordion opening/closing when clicking in the CVV field
  $("#verify-card-cvv").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
  });
});

/**
 * ------------------------------------------------------------------------
 * Promo
 * ------------------------------------------------------------------------
 */

// Show/Hide Promo Input
$("[data-js-promo-checkbox]").on("change", function() {
  $(this).closest(".order-summary").find(".promo-code-field").fadeToggle();
});

// Show the promo action button when value entered
$("[data-js-promo-code-input]").on("keyup", function() {
  if ($(this).val() !== "") {
    $("[data-js-promo-code-add-action]").css("display", "flex");
  } else {
    $("[data-js-promo-code-add-action]").css("display", "none");
  }
});

// Add promo button click event
$("[data-js-promo-code-add-action]").on("click", function() {
  // Demo to show validation
  if ($(this).siblings("[data-js-promo-code-input]").val() !== "FR££SHIP") {
    $(this).closest(".add-promo-code").append(PROMO_CODE_ORDER_SUMMARY_ERROR.replace("{promocode}", $(this).siblings("[data-js-promo-code-input]").val()));
  } else {
    // Is valid, add row to the summary
    $(".order-summary:not(.order-summary--mobile) > .order-summary__details").append(PROMO_CODE_ORDER_SUMMARY_ROW);
    $(".order-summary--mobile > .order-summary__content:first .order-summary__details").append(PROMO_CODE_ORDER_SUMMARY_ROW_MOBILE);
    $(".order-summary--promo").fadeIn();
    $(".add-promo-code .alert").remove();

    $("[data-js-promo-checkbox]").prop("checked", false);
    $(".promo-code-field").fadeOut();
    $("[data-js-promo-code-input]").val("");
    $("[data-js-promo-code-add-action]").css("display", "none");
    $(".form-check-label-value").html("I have another promo code!");
  }

});
