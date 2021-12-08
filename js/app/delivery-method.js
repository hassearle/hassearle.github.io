/**
 * ------------------------------------------------------------------------
 * Checkout - Delivery Method
 * ------------------------------------------------------------------------
 */

$(function() {

  $("[data-js-edit-delivery-method]").on("click", function(e) {
    e.preventDefault();

    // Edit Address
    $(".order-details__foot").hide();
    $("[data-js-delivery-method-select]").hide();
    $("[data-js-delivery-method-save]").hide();
    $("[data-js-delivery-method-edit-address-form]").fadeIn();

  });

  // Finalise editing
  $("[data-js-delivery-method-edit-complete]").on("click", function(e) {
    e.preventDefault();

    // Finish editing address
    $(".order-details__foot").show();
    $("[data-js-delivery-method-select]").show();
    $("[data-js-delivery-method-save]").show();
    $("[data-js-delivery-method-edit-address-form]").hide();

  });

  // Add new Address
  $("[data-js-delivery-method-add-address]").on("click", function(e) {
    e.preventDefault();

    $(".order-details--delivery-address [data-js-delivery-method-select]").hide();
    $(".order-details--delivery-address [data-js-delivery-method-save]").hide();
    $(".order-details--delivery-address .order-details__current > span").hide();
    $(".order-details--delivery-address .order-details__address--hd").show();

    $("[data-js-delivery-method-add-address-form]").fadeIn();
  });

  $("[data-js-address-lookup-edit]").on("click", function(e) {
    e.preventDefault();

    $(".added-address").hide();
    $("[data-js-address-lookup-result]").hide();
    $("[data-js-address-lookup-result]").hide();
    $("[data-js-address-lookup-edit]").hide();
    $(".add-address-pre-save .added-address__search").hide();
    $(".add-address-pre-save .added-address").hide();
    $(".add-address-pre-save > label").hide();
    $("[data-js-address-lookup-result-form]").fadeIn();
  });

  $("[data-js-delivery-method-add-new-cancel]").on("click", function(e) {
    e.preventDefault();
    resetAddressLookupForms();

    $("[data-js-delivery-method-add-address-form]").hide();
    $("[data-js-delivery-method-edit-address-form]").hide();
    $("[data-js-delivery-method-save]").fadeIn();
    $("[data-js-delivery-method-select]").fadeIn();
    $(".order-details__foot").show();
    $("[data-js-address-lookup]").show();
    $(".add-address-pre-save").hide();
    $(".order-details__current span").show();
    $(".order-details__current .order-details__address--new").hide();
  });

  $("[data-js-address-lookup-manual]").on("click", function(e) {
    e.preventDefault();
    resetAddressLookupForms();

    $("[data-js-address-lookup]").hide();
    $(".added-address").show();
    $(".add-address-pre-save").show();
    $("[data-js-address-lookup-result-address]").html("");
    $("[data-js-address-lookup-result]").hide();
    $("[data-js-address-lookup-result-form]").fadeIn();
    $(".added-address__button").hide();
    $(".add-address-pre-save .added-address__search").hide();
    $(".add-address-pre-save .added-address").hide();
    $(".add-address-pre-save > label").hide();
  });
});

/**
 * ------------------------------------------------------------------------
 * Checkout - Add Address
 * ------------------------------------------------------------------------
 */
var checkoutAddAddressFrom = {
  $form: $('.order-details--delivery-address'),
  init: function() {
    checkoutAddAddressFrom.validate();
    this.$form.on('keyup', 'input.required', this.validate);
    this.$form.on('change', '#save-to-address-book', this.saveToAddressBook);
  },
  validate: function() {
    var isValid = true;
    $("[data-js-delivery-method-add-address-form-enrol] input.required").each(function(index, element) {
      if (isValid && $(element).val().length === 0) {
        isValid = false;
      }
    });
    if (isValid) {
      $("[data-js-delivery-method-save]").removeClass("disabled").prop("disabled", false);
    } else {
      $("[js-data-accordion-type='delivery-address-new']").attr("data-valid", false);
      $("[data-js-delivery-method-save]").addClass("disabled").prop("disabled", true);
    }
  },
  saveToAddressBook: function() {
    if (checkoutAddAddressFrom.$form.find("#save-to-address-book").is(':checked')) {
      $("#added-address-title").addClass("required");
    } else {
      $("#added-address-title").removeClass("required");
    }
    checkoutAddAddressFrom.validate();
  },
};
checkoutAddAddressFrom.init();

function resetAddressLookupForms() {
  $("[data-js-address-lookup-loqate]").val("");
  $("[data-js-address-lookup-loqate-search-field]").show();
  $("[data-js-address-lookup-loqate-result-address]").html("");
  $("[data-js-address-lookup-loqate-result]").hide();
  $("[data-js-address-lookup-loqate-address-l1]").val("");
  $("[data-js-address-lookup-loqate-address-l2]").val("");
  $("[data-js-address-lookup-loqate-address-city]").val("");
  $("[data-js-address-lookup-loqate-address-county]").val("");
  $("[data-js-address-lookup-loqate-address-postcode]").val("");
}
