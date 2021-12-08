/**
 * ------------------------------------------------------------------------
 * Pageload
 * ------------------------------------------------------------------------
 */

// Initial pageload animation function
var iTimestampInitial = Date.now();
//
$(document).ready(function() {

  // Allows body tag to display once JS scripts have been called
  $('body').removeClass('hidden');

  // Calculating time to delay showing page to be consistent between pages provided the page loading doesn't exceed desired limit
  var iTimestampDocReady = Date.now();
  var iTimeToDocReady = iTimestampDocReady - iTimestampInitial;
  var iDelay = 2500 - iTimeToDocReady; // Set max delay by subtracting the time taken to reach document ready to make display times as consistent as possible

  // Delay adding animation class to loading overlay
  setTimeout(function() {

    // Add animation class to loading overlay
    $('#js-overlay-loading').removeClass('js-interaction-load').addClass('fadeOutHide');

    // Delay hiding loading overlay from DOM - this hides the element completely to restore page interactions
    setTimeout(function() {
      $('#js-overlay-loading').hide();
    }, 1500);
    //

  }, iDelay);

});

// // Page unload effect - not best preactice so is commented out but could be reintroduced if required
// $('a').click(function(e) {

// 	// Create temp store for link
// 	var sLinkLocation = $(this).attr("href");

// 	if (sLinkLocation !== '#' && sLinkLocation !== '/' && sLinkLocation !== '') {

// 		// Prevent default behaviour
// 		e.preventDefault();
// 		//
// 		$('body').fadeOut(750, function(){
// 			window.location = sLinkLocation;
// 		});

// 	}

// });

/**
 * ------------------------------------------------------------------------
 * Interaction Load
 * ------------------------------------------------------------------------
 */

// Function to show loading overlay 
// Created as an independent function so this can be integrated into click events
//
function showOverlayLoading() {

  // Adds class to body that prevents scrolling
  $('body').addClass('js-no-scroll');

  // Add class to trigger blur on webpage
  $('#site-canvas').addClass('js-overlay-blur');

  // Display overlay
  $('#js-overlay-loading').show().addClass('js-interaction-load').removeClass('fadeOutHide');

}

// Function to clear loading overlay 
// Created as an independent function so this can be integrated into callbacks - eg. in the event of a server request response
//
function hideOverlayLoading() {

  // Removes class from body that prevents scrolling
  $('body').removeClass('js-no-scroll');

  // Remove class to unblur on webpage
  $('#site-canvas').removeClass('js-overlay-blur');

  // Start CSS fadeout animation for overlay
  $('#js-overlay-loading').addClass('fadeOutHide');

  // Wait for fadeOutHide CSS animations to finish
  setTimeout(function() {
    $('#js-overlay-loading').hide();
  }, 500);

}

// Click event - loading animation example
// $('.button.loyalties__orders-box-link').on('click', function (e) {
$('[data-js-load-interaction]').on('click', function(e) {
  e.preventDefault();

  // Calls function to show overlay loading
  showOverlayLoading();

  // This timeout simulates the time taken to receive a server response
  setTimeout(function() {

    // Calls function to hide overlay loading
    hideOverlayLoading();

  }, 5000);
  //

});
