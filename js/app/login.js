/**
 * ------------------------------------------------------------------------
 * Login
 * ------------------------------------------------------------------------
 */

$(document).ready(function() {

  $("[data-js-show-password]").on('click', function() {

    if ($("#account_password").attr("type") === "text") {
      $("#account_password").attr("type", "password");
      $("#account_password + .btn-icon-and-text span:last-of-type").text("Show");
    } else {
      $("#account_password").attr("type", "text");
      $("#account_password + .btn-icon-and-text span:last-of-type").text("Hide");
    }

  });

  // Account forms fields validation
  // This will validate the account forms when exiting the field
  $("#login_form .form-control, #forgotten_password_form .form-control").on("focusout", function(e) {
    if ($(this).val()) {
      $(this).removeClass("error");
    } else {
      $(this).addClass("error");
    }
  });

  // Login form validation
  $("#login_form").on("submit", function(e) {
    if (!validateLoginForm()) {
      e.preventDefault();
    }
  });

  function validateLoginForm() {
    var valid = true;
    var $email = $("#login_form #account_id");
    var $password = $("#login_form #account_password");

    if ($email.val() === '') {
      valid = false;
      $email.addClass("error");
    }

    if ($password.val() === '') {
      valid = false;
      $password.addClass("error");
    }

    return valid;
  }

  // Forgotten Password Form Validation
  $("#forgotten_password_form").on("submit", function(e) {
    if (!validateForgottenPasswordForm()) {
      e.preventDefault();
    } else {
      e.preventDefault();
      $("#forgotten_password_form").hide();
      $("#account_form_success").css("display", "flex");
    }
  });

  function validateForgottenPasswordForm() {
    var valid = true;
    var $email = $("#forgotten_password_form #account_id");

    if ($email.val() === '') {
      valid = false;
      $email.addClass("error");
    }

    return valid;
  }

  // Forgotten Password Login Code Form Validation
  $("#forgotten_password_logincode_request_form").on("submit", function(e) {
    if (!validateForgottenPasswordLoginCodeForm()) {
      e.preventDefault();
    } else {
      e.preventDefault();
      $("#forgotten_password_logincode_request_form").hide();
      $("#forgotten_password_logincode_form").css("display", "flex");
    }
  });

  function validateForgottenPasswordLoginCodeForm() {
    var valid = true;
    var $email = $("#forgotten_password_logincode_request_form #account_cell");

    if ($email.val() === '') {
      valid = false;
      $email.addClass("error");
    }

    return valid;
  }

  $("[data-js-show-logincode-form]").on("click", function() {
    $("#forgotten_password_form").hide();
    $("#forgotten_password_logincode_request_form").css("display", "flex");
  });

  $(".logincode input").on("keydown", function(e) {

    if (e.keyCode === 8 && !$(this).val()) {
      $(this).prev("input").focus();
    } else if ($(this).val()) {
      $(this).addClass("complete");
      $(this).next("input").focus();
    } else {
      $(this).removeClass("complete");
    }
  });

  // Password Reset

  $("#reset_password").keyup(function(e) {
    var result = zxcvbn($(this).val());

    var $strength = $("#password_strength");
    var $strengthBar = $("#password_strength_bar");
    var $strengthScore = $("#password_strength_score");

    $strengthBar.attr('data-strength', result.score);
    $strengthScore.val(result.score);

    switch (result.score) {
      case 0:
        $strength.text("Very Weak");
        break;
      case 1:
        $strength.text("Weak");
        break;
      case 2:
        $strength.text("Moderate");
        break;
      case 3:
        $strength.text("Good");
        break;
      case 4:
        $strength.text("Strong");
        break;
      default:
        $strength.text("Very Weak");
        break;
    }

    if (validateResetPasswordForm()) {
      $(this).removeClass("error");
      $("#button_reset").removeAttr("disabled");
    } else {
      $(this).addClass("error");
      $("#button_reset").attr("disabled", "disabled");
    }
  });

  function validateResetPasswordForm() {
    var valid = true;
    var $password = $("#reset_password_form #reset_password");
    var $score = $("#password_strength_score");
    var passwordVal = $password.val();

    if (passwordVal === '') {
      valid = false;
      $password.addClass("error");
    }

    if ($score.val() <= 1) {
      valid = false;
      $password.addClass("error");
    }

    // Password is between 8 - 15 Characters
    if (passwordVal.length < 7 || passwordVal.length > 14) {
      valid = false;
      $("#password_strength_requirment_length").removeClass("valid");
      $("#password_strength_requirment_length").addClass("invalid");
    } else {
      $("#password_strength_requirment_length").removeClass("invalid");
      $("#password_strength_requirment_length").addClass("valid");
    }

    // Password contains one uppercase character
    var regex_uppercase = new RegExp("[A-Z]");
    if (!regex_uppercase.test(passwordVal)) {
      valid = false;
      $("#password_strength_requirment_uppercase").removeClass("valid");
      $("#password_strength_requirment_uppercase").addClass("invalid");
    } else {
      $("#password_strength_requirment_uppercase").removeClass("invalid");
      $("#password_strength_requirment_uppercase").addClass("valid");
    }

    // Password contains one lowercase character
    var regex_lowercase = new RegExp("[a-z]");
    if (!regex_lowercase.test(passwordVal)) {
      valid = false;
      $("#password_strength_requirment_lowercase").removeClass("valid");
      $("#password_strength_requirment_lowercase").addClass("invalid");
    } else {
      $("#password_strength_requirment_lowercase").removeClass("invalid");
      $("#password_strength_requirment_lowercase").addClass("valid");
    }

    // Password contains one number character
    var regex_number = new RegExp("[0-9]");
    if (!regex_number.test(passwordVal)) {
      valid = false;
      $("#password_strength_requirment_number").removeClass("valid");
      $("#password_strength_requirment_number").addClass("invalid");
    } else {
      $("#password_strength_requirment_number").removeClass("invalid");
      $("#password_strength_requirment_number").addClass("valid");
    }

    return valid;
  }

});
