/**
 * ------------------------------------------------------------------------
 * Account
 * ------------------------------------------------------------------------
 */
function validatePassword() {
  var number = /([0-9])/;
  var lowercase = /([a-z])/;
  var uppercase = /([A-Z])/;
  var isValid = true;
  // Validate length
  if ($('#account-new-password').val().length > 7 && $('#account-new-password').val().length < 16) {
    $('#password-validation-length').removeClass().addClass('password__validated');
  } else {
    $('#password-validation-length').removeClass().addClass('password__unchecked');
    isValid = false;
  }
  // Validate uppercase
  if ($('#account-new-password').val().match(uppercase)) {
    $('#password-validation-uppercase').removeClass().addClass('password__validated');
  } else {
    $('#password-validation-uppercase').removeClass().addClass('password__unchecked');
    isValid = false;
  }
  // Validate lowercase
  if ($('#account-new-password').val().match(lowercase)) {
    $('#password-validation-lowercase').removeClass().addClass('password__validated');
  } else {
    $('#password-validation-lowercase').removeClass().addClass('password__unchecked');
    isValid = false;
  }
  // Validate number
  if ($('#account-new-password').val().match(number)) {
    $('#password-validation-number').removeClass().addClass('password__validated');
  } else {
    $('#password-validation-number').removeClass().addClass('password__unchecked');
    isValid = false;
  }
  if (isValid && $(".account__email input").val() !== "") {
    $("#password_account_create").removeAttr("disabled");
  } else {
    $("#password_account_create").attr("disabled", "disabled");
  }
}
$(document).ready(function() {
  $('#account-new-password').on('click blur keyup', function() {
    validatePassword();
  });
  $('#account-new-password').password({
    badPass: 'Strength: <span>Weak</span>',
    goodPass: 'Strength: <span>Medium</span>',
    strongPass: 'Strength: <span>Strong</span>',
    showPercent: false,
    showText: true, // shows the text tips
    animateSpeed: 'fast', // the above animation speed
    minimumLength: 8
  });
  //on keypress 
  $('#account-confirm-password').on('keyup', function(e) {
    //get values 
    var pass = $('#account-new-password').val();
    var confpass = $(this).val();
    //check the strings
    if (pass === confpass) {
      //if both are same remove the error and allow to submit
      $('#err-password').text('');
      allowsubmit = true;
    } else {
      //if not matching show error and not allow to submit
      $('#err-password').text('Passwords do not match');
      allowsubmit = false;
    }
  });
  //jquery form submit
  $('#form').submit(function() {
    var pass = $('#account-new-password').val();
    var confpass = $('#account-confirm-password').val();
    //just to make sure once again during submit
    //if both are true then only allow submit
    if (pass === confpass) {
      allowsubmit = true;
    }
    if (allowsubmit) {
      return true;
    } else {
      return false;
    }
  });
  $('.js-btn-add-telephone').on('click', function(e) {
    e.preventDefault();
    var $btn = $(this);
    var $panel = $('.js-panel-add-telephone');
    if ($btn.hasClass('open')) {
      $panel.slideUp();
      $btn.removeClass('open');
    } else {
      $panel.slideDown();
      $btn.addClass('open');
    }
  });
  $('.js-btn-add-email').on('click', function(e) {
    e.preventDefault();
    var $btn = $(this);
    var $panel = $('.js-panel-add-email');
    if ($btn.hasClass('open')) {
      $panel.slideUp();
      $btn.removeClass('open');
    } else {
      $panel.slideDown();
      $btn.addClass('open');
    }
  });
  $('.js-business-site-name').on('click blur keyup', function() {
    $('.js-url').text($('.js-business-site-name').val());
  });
  $('#show-modal-payment').on('click', function(e) {
    e.preventDefault();
    $('#modal-payment').modal('show');
  });
  $('#show-modal-update-address').on('click', function(e) {
    e.preventDefault();
    $('#modal-update-address').modal('show');
  });
  $('#show-modal-delete-default-address').on('click', function(e) {
    e.preventDefault();
    $('#modal-delete-default-address').modal('show');
  });
  $('#show-modal-delete-address').on('click', function(e) {
    e.preventDefault();
    $('#modal-delete-address').modal('show');
  });
  $('#show-modal-delete-address-no-lrp').on('click', function(e) {
    e.preventDefault();
    $('#modal-delete-address-no-lrp').modal('show');
  });
  $('#show-modal-update-payment').on('click', function(e) {
    e.preventDefault();
    $('#modal-update-payment').modal('show');
  });
  $('#show-modal-update-payment-multiple').on('click', function(e) {
    e.preventDefault();
    $('#modal-update-payment-multiple').modal('show');
  });
  $('#show-modal-delete-payment-method').on('click', function(e) {
    e.preventDefault();
    $('#modal-delete-payment-method').modal('show');
  });
  $('#show-modal-delete-default-payment-method').on('click', function(e) {
    e.preventDefault();
    $('#modal-delete-default-payment-method').modal('show');
  });
  $('#show-modal-update-address-multiple').on('click', function(e) {
    e.preventDefault();
    $('#modal-update-address-multiple').modal('show');
  });
  $('#show-modal-delete-phone').on('click', function(e) {
    e.preventDefault();
    $('#modal-delete-phone').modal('show');
  });

  $('[data-js-show-profile-photo-modal]').on('click', function(e) {
    e.preventDefault();
    $('#js-profile-photo-modal').modal('show');
  });

  $('#show-modal-delete-payment-method-nolrp').on('click', function(e) {
    e.preventDefault();
    $('#modal-delete-payment-method-nolrp').modal('show');
  });

  $('.js-email-copy').popup({
    popup: $('.custom.popup'),
    on: 'click'
  });
  var clipboard = new ClipboardJS('.js-email-copy');
  clipboard.on('success', function(e) {
    setTimeout(function() {
      $('.js-email-copy').popup('hide');
    }, 2000);
  });
  $('.js-email-copy').on('click', function(e) {
    e.preventDefault();
  });
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
  $("[data-js-account-password-complete]").on("click", function(e) {
    e.preventDefault();
    $(".account-password__inner").hide();
    $(".account-password__complete").fadeIn();
  });
  // Form field character counter
  $("#js-count-field").keyup(function() {
    $("#js-count-number").text($(this).val().length);
  });
});
$("[data-js-address-lookup-loqate-form] input.required").on("keyup", function() {
  var isValid = true;
  $("[data-js-address-lookup-loqate-form] input.required").each(function(index, element) {
    if (isValid && $(element).val().length === 0) {
      isValid = false;
    }
  });
  if (isValid) {
    $("[data-js-account-add-address-save]").removeClass("disabled").prop("disabled", false);
  } else {
    $("[data-js-account-add-address-save]").addClass("disabled").prop("disabled", true);
  }
});
$('.modal--update-address-multiple__check').on('click', function() {
  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected').find('.form-check-input').prop('checked', false);
  } else {
    $(this).addClass('selected').find('.form-check-input').prop('checked', true);
  }
});
// Button click event for the "Update Loyalty Order Address" modal
// which can be viewed on the Account page - http://doterra-infotrax.devhostus.com/account/
$(function() {
  $("[data-js-update-loyalty-order-info]").on("click", function(e) {
    e.preventDefault();
    $(this).attr("disabled", "");
    $(this).closest(".loyalty-info").find(".alert").slideDown({
      start: function() {
        $(this).css({
          display: "flex"
        });
      }
    });
  });
});

// Self Enroll Personal Details / Account

// add coapplicant trigger
$('[data-js-account-coapplicant-trigger]').on('click', function(e) {
  e.preventDefault();
  var $btn = $(this);
  var $block = $(this).closest('.field').find('.coapplicant-add');
  //$(this).find('.icon--add-circle').removeClass('icon--add-circle').addClass('icon--cross-circle');
  $btn.toggleClass('account__btn-add--active');
  $block.addClass('coapplicant-add--active');
  if ($btn.hasClass('account__btn-add--active')) {
    //console.log('active');
    $block.addClass('coapplicant-add--active');
  } else {
    //console.log('inactive'); 
    $block.removeClass('coapplicant-add--active');
  }
});
// close coapplicant
$('[data-js-coapplicant-close]').on('click', function(e) {
  e.preventDefault();
  $(this).removeClass('account__btn-add--active');
  $(this).parent().parent().removeClass('coapplicant-add--active');
  $(this).parent().parent().prev().find('.account__btn-add').removeClass('account__btn-add--active');
  //$(this).parent().parent().prev().find('.icon--cross-circle').removeClass('icon--cross-circle').addClass('icon--add-circle');
});

// SINGLE TEL NUMBER
// add single tel number trigger
$('[data-js-tel-add-single-trigger]').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('account__btn-add--active');
  $(this).next().toggleClass('tel-add--single-active');
});

// close single tel number trigger
$('[data-js-tel-add-single-close]').on('click', function(e) {
  e.preventDefault();
  $(this).parent().parent().toggleClass('tel-add--single-active');
  $(this).parent().parent().prev().toggleClass('account__btn-add--active');
});

// TAX INFO INTERNATIONAL
$(document).ready(function() {
  // Tax info - Italian (world / international) 'Citizenship' / 'Birth place' field display control depending on radio selection
  var $ctznRadio = $('[data-js-tax-info-citizenship]');
  var $bpField = $('[data-js-tax-info-birth-place]');

  $ctznRadio.on('click', function(e) {
    if ($(this).data('jsTaxInfoCitizenship') === 'world') {
      $bpField.fadeOut(200);
    } else {
      $bpField.fadeIn(200);
    }
  });

  // Display Rate of Contribution Rates block on radio selections
  var $userRatesControl = $('[data-js-user-rates-control]');
  var $userRates = $('[data-js-user-rates]');
  // We want to prevent the input field firing a click event (so we don't get two) when we click the label:
  // https://stackoverflow.com/questions/19595084/why-is-my-click-event-called-twice-in-jquery
  $('[data-js-user-rates-control] input.form-check-input').on('click', function(event) {
    event.stopPropagation();
  });
  // Radio click events
  $userRatesControl.on('click', function(e) {
    var radio = $(this).data('jsUserRatesControl');
    if (radio === 'have') {
      //console.log(radio);
      $userRates.slideDown(200);
      $('[data-js-user-rates-label="optional"]').hide();
      $('[data-js-user-rates-label="required"]').show();
    } else {
      //console.log(radio);
      $userRates.slideUp(200);
      $('[data-js-user-rates-label="optional"]').show();
      $('[data-js-user-rates-label="required"]').hide();
    }
  });

  // Controlled fields - display only if radio inside is checked
  $('[data-js-fields-controlled] .form-check-label').on('click', function(e) {
    $('[data-js-fields-controlled] .form-check-label').addClass('form-check-label--controlled');
    $(this).removeClass('form-check-label--controlled');
  });

  // Minumum tax allowed validation
  var $minTax = $('[data-js-minimum-tax-allowed]');
  var $minTaxAmount = $minTax.data('jsMinimumTaxAllowed');
  /// on 'keyup' or 'change'?
  $minTax.on('change', function(e) {
    var $this = $(this);
    var value = $this.val();
    if (value <= $minTaxAmount && value > 0) { // show error
      $this.closest('.form-group').addClass('form-group--error').find('.form-group__message').css({
        'display': 'flex'
      });
    } else { // hide error
      $this.closest('.form-group').removeClass('form-group--error').find('.form-group__message').hide();
    }
  });

  // data-masks
  $("[data-js-tax-code-siret], [data-js-tax-code-nif]").on("keydown", function(e) {
    // Handle the input
    handleCardInput(e, $(this).data("mask"));
  });

});
