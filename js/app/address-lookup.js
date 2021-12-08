$(function() {
  // Prod Key = BE77-JD49-RN47-AC19
  // Test Key = DZ64-RY99-UH18-KP86
  var KEY = "BE77-JD49-RN47-AC19";
  var ISMIDDLEWARE = false;
  var ORIGIN = "";
  var COUNTRIES = "GBR, DE";
  var LIMIT = "10";
  var LANGUAGE = "en-gb";
  var ENDPOINT_FIND = 'https://api.addressy.com/Capture/Interactive/Find/v1.10/json3.ws';
  var ENDPOINT_RETREIVE = 'https://api.addressy.com/Capture/Interactive/Retrieve/v1.00/json3.ws';

  // DOM Elements
  $addressLookupContainer = $(".address-lookup");
  $addressLookupHelper = $addressLookupContainer.find(".address-lookup__helper");
  $addressLookupField = $("[data-js-address-lookup-loqate]");
  $addressLookupResults = $("[data-js-address-lookup-loqate-results]");
  $addressLookupForm = $("[data-js-address-lookup-loqate-form]");
  $addressLookupFormEdit = $("[data-js-address-lookup-loqate-form-edit]");
  $addressLookupFormPreSave = $("[data-js-address-lookup-loqate-form-pre-save]");
  $addressLookupFormSearchField = $("[data-js-address-lookup-loqate-search-field]");
  $addressLookupReset = $("[data-js-address-lookup-loqate-reset]");
  $addressLookupFormPreSaveEdit = $("[data-js-address-lookup-loqate-edit]");
  $addressLookupFormPreSaveAddress = $("[data-js-address-lookup-loqate-result-address]");
  $addressLookupNoFound = $("[data-js-address-lookup-not-found]");

  // Search Field - Search for address matches on key up event
  $addressLookupField.on("keyup", function(e) {
    findAddress($(this).val());
  });

  // Search for matching address and display them in the auto complete dropdown
  function findAddress(addressInput) {
    var Container = "";

    // Catch null input
    if (addressInput === "") {
      $addressLookupResults.html("");
      $addressLookupHelper.hide();
      $addressLookupContainer.removeClass("active");
      return;
    }

    // Update the DOM
    $addressLookupHelper.show();
    $addressLookupContainer.addClass("active");

    // Call the Loqate Endpoint
    var params = '';
    params += "&Key=" + encodeURIComponent(KEY);
    params += "&Text=" + encodeURIComponent(addressInput);
    params += "&IsMiddleware=" + encodeURIComponent(ISMIDDLEWARE);
    params += "&Container=" + encodeURIComponent(Container);
    params += "&Origin=" + encodeURIComponent(ORIGIN);
    params += "&Countries=" + encodeURIComponent(COUNTRIES);
    params += "&Limit=" + encodeURIComponent(LIMIT);
    params += "&Language=" + encodeURIComponent(LANGUAGE);
    var http = new XMLHttpRequest();
    http.open('POST', ENDPOINT_FIND, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function() {
      if (http.readyState === 4 && http.status === 200) {
        var response = JSON.parse(http.responseText);
        if (response.Items.length === 1 && typeof(response.Items[0].Error) !== "undefined") {
          showError(response.Items[0].Description);
        } else {
          if (response.Items.length === 0) {
            showError("Sorry, there were no results");
          } else {
            // Populate the lookup dropdown
            $addressLookupResults.html("");
            for (var i = 0; i < response.Items.length; i++) {
              var resultText = response.Items[i].Text;
              var resultDesciption = response.Items[i].Description;
              var highlightsArray = response.Items[i].Highlight.split(";");
              var highlightArrayText = highlightsArray[0].split("-");
              var highlightArrayDescription = null;
              if (highlightsArray && highlightsArray[1]) {
                highlightArrayDescription = highlightsArray[1].split("-");
              }
              if (highlightsArray) {
                highlightsArray = highlightsArray[0].split(",");
              }
              if (highlightArrayText) {
                for (var index = 0; index < highlightsArray.length; index++) {
                  var arr = highlightsArray[index].split("-");
                  resultText = highlight(resultText, parseInt(arr[0]), parseInt(arr[1]), index);
                }
              }
              if (highlightArrayDescription && highlightArrayDescription[0] && highlightArrayDescription[1]) {
                resultDesciption = highlight(resultDesciption, parseInt(highlightArrayDescription[0]), parseInt(highlightArrayDescription[1]), 0);
              }
              var output = resultText + ' ' + resultDesciption;
              var resultTemplate = '<li class="address-lookup__result" data-js-address-lookup-loqate-result data-address-id="' + response.Items[i].Id + '" data-address-type="' + response.Items[i].Type + '">' +
                '<div class="address-lookup__address">' +
                output +
                '</div>' +
                '<div class="address-lookup__secondary">';
              if (response.Items[i].Type !== "Address") {
                resultTemplate +=
                  '<span class="icon--arrow-down-circle icon--md icon--no-hover address-lookup__icon"></span>';
              }
              resultTemplate += '</div>';
              $addressLookupResults.append(resultTemplate);
            }
          }
        }
      }
    };
    http.send(params);
  }

  $(document).on("click", "[data-js-address-lookup-loqate-result]", function(e) {
    if ($(this).data("address-type") === "Address") {
      // Get Address
      getAddress($(this).data("address-id"));
    } else {
      getAdddresses($(this).data("address-id"));
    }
  });

  function getAdddresses(AddressId) {
    $.post(ENDPOINT_FIND, {
      Key: KEY,
      Text: AddressId,
      IsMiddleware: ISMIDDLEWARE,
      Container: AddressId,
      Origin: ORIGIN,
      Countries: COUNTRIES,
      Limit: LIMIT,
      Language: LANGUAGE,
    }, function(response) {
      // Test for an error
      if (response.Items.length === 1 && typeof(response.Items[0].Error) !== "undefined") {
        // Show the error message
        showError(response.Items[0].Description);
      } else {
        // Check if there were any items found
        if (response.Items.length === 0) {
          showError("Sorry, there were no results");
        } else {
          $addressLookupResults.html("");
          $(".address-lookup__helper").hide();
          for (var i = 0; i < response.Items.length; i++) {
            var resultTemplate = '<li class="address-lookup__result" data-js-address-lookup-loqate-result data-address-id="' + response.Items[i].Id + '" data-address-type="' + response.Items[i].Type + '">' +
              '<div class="address-lookup__address">' +
              response.Items[i].Text + ' ' + response.Items[i].Description +
              '</div>' +
              '<div class="address-lookup__secondary">' +
              '<span class="address-lookup__select">' +
              '<span fieldname="address_lookup_select_link">Select</span>' +
              '</span>' +
              '</div>';
            $addressLookupResults.append(resultTemplate);
          }
        }
      }
    });
  }

  function getAddress(Id) {
    var Field1Format = "";
    var params = '';
    params += "&Key=" + encodeURIComponent(KEY);
    params += "&Id=" + encodeURIComponent(Id);
    params += "&Field1Format=" + encodeURIComponent(Field1Format);

    var http = new XMLHttpRequest();
    http.open('POST', ENDPOINT_RETREIVE, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function() {
      if (http.readyState === 4 && http.status === 200) {
        var response = JSON.parse(http.responseText);
        if (response.Items.length === 1 && typeof(response.Items[0].Error) !== "undefined") {
          showError(response.Items[0].Description);
        } else {
          if (response.Items.length === 0) {
            showError("Sorry, there were no results");
          } else {
            // Update the DOM
            $addressLookupField.val("");
            $addressLookupForm.show();
            $addressLookupResults.html("");
            $addressLookupHelper.hide();
            $addressLookupFormEdit.hide();
            $addressLookupFormPreSave.show();
            $addressLookupFormSearchField.hide();
            $addressLookupContainer.removeClass("active");

            // Populate the Address Fields
            var addressResult = response.Items[0];
            var address_l1 = "";
            var address_l2 = "";

            // Address L1
            if (addressResult.Line1) {
              address_l1 += addressResult.Line1 + ', ';
            }
            if (addressResult.Line2) {
              address_l1 += addressResult.Line2 + ', ';
            }
            if (addressResult.Line3) {
              address_l1 += addressResult.Line3 + ', ';
            }
            if (addressResult.Line4) {
              address_l1 += addressResult.Line4 + ', ';
            }
            if (addressResult.Line5) {
              address_l1 += addressResult.Line5 + ', ';
            }
            address_l1 = address_l1.replace(/,\s*$/, "");

            // Address L2
            if (addressResult.Block) {
              address_l2 += addressResult.Block + ', ';
            }
            if (addressResult.SubBuilding) {
              address_l2 += addressResult.SubBuilding + ', ';
            }
            if (addressResult.Company) {
              address_l2 += addressResult.Company + ', ';
            }
            address_l2 = address_l2.replace(/,\s*$/, "");

            $("[data-js-address-lookup-loqate-address-l1]").val(address_l1);
            $("[data-js-address-lookup-loqate-address-l2]").val(address_l2);
            $("[data-js-address-lookup-loqate-address-city]").val(addressResult.City);
            $("[data-js-address-lookup-loqate-address-county]").val(addressResult.ProvinceName);
            $("[data-js-address-lookup-loqate-address-postcode]").val(addressResult.PostalCode);

            // Populate the Read Only Address
            var addressReadOnly = "";
            if (address_l1) {
              addressReadOnly += address_l1 + "<br>";
            }
            if (address_l2) {
              addressReadOnly += address_l2 + "<br>";
            }
            if (addressResult.City) {
              addressReadOnly += addressResult.City + "<br>";
            }
            if (addressResult.ProvinceName) {
              addressReadOnly += addressResult.ProvinceName + "<br>";
            }
            if (addressResult.PostalCode) {
              addressReadOnly += addressResult.PostalCode;
            }
            $addressLookupFormPreSaveAddress.html(addressReadOnly);
            checkoutAddAddressFrom.validate();
          }
        }
      }
    };
    http.send(params);
  }

  //  Highlights the addrees string when typing but adding <b> tags
  function highlight(text, start, end, index) {
    start = start + (index * '<b></b>'.length);
    end = end + (index * '<b></b>'.length);
    var str = text;
    if (start >= 0 && end > 0) {
      str = text.substr(0, start) +
        '<b>' +
        text.substr(start, end - start) +
        '</b>' +
        text.substr(end);
    }
    return str;
  }

  // Log Errors to the console
  function showError(message) {
    console.log(message);
  }

  // Address Not Found Button Event
  $addressLookupNoFound.on("click", function(e) {
    e.preventDefault();

    // Update the DOM
    resetAddressLookupForm();
    $addressLookupField.val("");
    $addressLookupForm.show();
    $addressLookupFormEdit.show();
    $addressLookupFormPreSave.hide();
    $addressLookupFormSearchField.hide();
    $addressLookupResults.html("");
    $addressLookupHelper.hide();
    $addressLookupContainer.removeClass("active");
  });

  // Address Lookup Reset Button Event
  $addressLookupReset.on("click", function(e) {
    e.preventDefault();

    // Update the DOM
    resetAddressLookupForm();
    $addressLookupField.val("");
    $addressLookupForm.hide();
    $addressLookupFormEdit.hide();
    $addressLookupFormPreSave.show();
    $addressLookupFormSearchField.show();
    $addressLookupResults.html("");
  });

  // Pre Save Edit Button Event
  $addressLookupFormPreSaveEdit.on("click", function(e) {
    e.preventDefault();

    // Update the DOM
    $addressLookupField.val("");
    $addressLookupForm.show();
    $addressLookupFormEdit.show();
    $addressLookupFormPreSave.hide();
    $addressLookupFormSearchField.hide();
    $addressLookupResults.html("");
    $addressLookupHelper.hide();
    $addressLookupContainer.removeClass("active");
  });

  // Reset the form fields
  function resetAddressLookupForm() {
    $addressLookupFormPreSaveAddress.html("");
    $("[data-js-address-lookup-loqate-address-l1]").val("");
    $("[data-js-address-lookup-loqate-address-l2]").val("");
    $("[data-js-address-lookup-loqate-address-city]").val("");
    $("[data-js-address-lookup-loqate-address-county]").val("");
    $("[data-js-address-lookup-loqate-address-postcode]").val("");
  }
});
