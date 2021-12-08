/**
 * ------------------------------------------------------------------------
 * Credit Card Validation
 * ------------------------------------------------------------------------
 */

/**
 * Handle the Card Input field
 *
 * @param e
 */
function handleCardInput(e, mask) {
  var keyCode = e.which || e.keyCode;
  var element = e.target;

  var isNumber = /^[0-9]$/i.test(e.key);
  var isChar = /^[a-zA-Z!@#$£%^&*()_+\-=\[\]{};`~':"\\|,.<>\/?]$/i.test(e.key);
  var caretStart = caretStartPosition(element);
  var normalisedStartCaretPosition = normaliseCaretPosition(mask, caretStart);

  var newCaretPosition = caretStart;

  if (isNumber) {
    e.preventDefault();

    var digit = e.key;
    var rawText = $(element).val();
    var numbersOnly = numbersOnlyString(rawText);

    // Insert digit
    if (rawText.length < mask.length) {
      numbersOnly = (numbersOnly.slice(0, normalisedStartCaretPosition) + digit + numbersOnly.slice(normalisedStartCaretPosition));
      newCaretPosition = Math.max(
        denormaliseCaretPosition(mask, normalisedStartCaretPosition + 1),
        denormaliseCaretPosition(mask, normalisedStartCaretPosition + 2) - 1
      );
      $(element).val(applyFormatMask(numbersOnly, mask));
      setCaretPosition(element, newCaretPosition);
    } else if (isChar || isNumber) {
      // do nothing
      e.preventDefault();
    }
  } else if (isChar) {
    // do nothing
    e.preventDefault();
  }
}

function caretStartPosition(element) {
  if (typeof element.selectionStart === "number") {
    return element.selectionStart;
  }
  return false;
}

function setCaretPosition(element, caretPos) {
  if (element !== null) {
    if (element.createTextRange) {
      var range = element.createTextRange();
      range.move('character', caretPos);
      range.select();
    } else {
      if (element.selectionStart) {
        element.focus();
        element.setSelectionRange(caretPos, caretPos);
      } else {
        element.focus();
      }
    }
  }
}

function normaliseCaretPosition(mask, caretPosition) {
  var numberPos = 0;
  if (caretPosition < 0 || caretPosition > mask.length) {
    return 0;
  }
  for (var i = 0; i < mask.length; i++) {
    if (i === caretPosition) {
      return numberPos;
    }
    if (mask[i] === "X") {
      numberPos++;
    }
  }
  return numberPos;
}

function denormaliseCaretPosition(mask, caretPosition) {
  var numberPos = 0;
  if (caretPosition < 0 || caretPosition > mask.length) {
    return 0;
  }
  for (var i = 0; i < mask.length; i++) {
    if (numberPos === caretPosition) {
      return i;
    }
    if (mask[i] === "X") {
      numberPos++;
    }
  }
  return mask.length;
}

/**
 * Apply a format mask to the given string
 *
 * @param string
 * @param mask
 * @returns {string}
 */
function applyFormatMask(string, mask) {
  var formattedString = "";
  var numberPos = 0;
  for (var j = 0; j < mask.length; j++) {
    var currentMaskChar = mask[j];
    if (currentMaskChar === "X") {
      var digit = string.charAt(numberPos);
      if (!digit) {
        break;
      }
      formattedString += string.charAt(numberPos);
      numberPos++;
    } else {
      formattedString += currentMaskChar;
    }
  }
  return formattedString;
}

/**
 * Strip all characters that are not in the range 0-9
 *
 * @param string
 * @returns {string}
 */
function numbersOnlyString(string) {
  var numbersOnlyString = "";
  for (var i = 0; i < string.length; i++) {
    var currentChar = string.charAt(i);
    var isValid = !isNaN(parseInt(currentChar));
    if (isValid) {
      numbersOnlyString += currentChar;
    }
  }
  return numbersOnlyString;
}

$("[data-js-card-number]").on("keydown", function(e) {
  // Handle the input
  handleCardInput(e, $(this).data("mask"));

  // Show the card icon based on the Card type
  var cardType = getCreditCardType($(this).val());
  $(this).next("[data-js-card-number-types]").find("[data-js-card-number-type]").removeClass("is-active");
  $(this).next("[data-js-card-number-types]").find("[data-js-card-number-type].icon--payment-" + cardType).addClass("is-active");
});

$("[data-js-card-number]").on("blur", function(e) {
  // Formats the input when leaving the field.  Used incase string is pasted in.
  var numbersOnly = numbersOnlyString($(this).val());
  $(this).val(applyFormatMask(numbersOnly, $(this).data("mask")));
});

$("[data-js-card-expiry-date], [data-js-card-cvv], [data-js-card-expiry-date-month], [data-js-card-expiry-date-year]").on("keydown", function(e) {
  // Handle the input
  handleCardInput(e, $(this).data("mask"));
});

// Get the Credit Card type
function getCreditCardType(accountNumber) {
  //start without knowing the credit card type
  var result = "unknown";
  //first check for MasterCard
  if (/^5[1-5]/.test(accountNumber)) {
    result = "mastercard";
  }
  //then check for Visa
  else if (/^4/.test(accountNumber)) {
    result = "visa";
  }
  //then check for AmEx
  else if (/^3[47]/.test(accountNumber)) {
    result = "amex";
  }
  return result;
}
