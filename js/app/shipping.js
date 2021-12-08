/**
 * ------------------------------------------------------------------------
 * Shipping page
 * ------------------------------------------------------------------------
 */

$(function() {

  var shippingForm = {
    $form: $('[data-js-shipping-form]'),
    init: function() {
      this.$form.on('change', '[data-js-mobile-field-trigger]', this.toggleSameAddress);
    },
    toggleSameAddress: function() {
      shippingForm.$form.find('[data-js-mobile-field]').toggleClass('is-inactive');
    }
  };
  shippingForm.init();

});
