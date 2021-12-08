/**
 * ------------------------------------------------------------------------
 * Core
 * ------------------------------------------------------------------------
 * Scripts and functions in this file are reqired on every page
 */

/**
 * ------------------------------------------------------------------------
 * Function to calculate the height on the screen taking into account 
 * the iOS/Android toolbars
 * ------------------------------------------------------------------------
 */

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
var vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', vh + "px");

// We listen to the resize event
window.addEventListener('resize', function() {
  // We execute the same script as before
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + "px");
}, true);

/**
 * ------------------------------------------------------------------------
 * Function to check for Trust Arc GDPR notice and
 * dyanmically adjusts webpage offset to compensate
 * ------------------------------------------------------------------------
 */

$(document).ready(function() {

  // Stores reference to TrustArc GDPR element
  var noticeTaGdpr = document.getElementById('consent_blackbar');

  // Tracks state of notice interaction
  var bInteractionFlag = false;

  // Regular interval object
  var oNoticeCheckInterval;

  // Returns string value of argument element height plus 'px' unit - if element isn't present 0px is returned
  function getElemHeight() {
    var sElemHeightValue = (noticeTaGdpr !== null) ? noticeTaGdpr.offsetHeight.toString() : "0";
    //
    return sElemHeightValue + "px";
  }

  // Updates element styles with top margin
  function updateBodyOffset() {

    // Website canvas
    document.getElementById('site-canvas').style.marginTop = getElemHeight(noticeTaGdpr);

    // Off canvas menu
    document.getElementById('offcanvas-menu').style.marginTop = getElemHeight(noticeTaGdpr);

    // Search bar
    var oStylesNoticeSearch; // Placeholder variable for stylesheet element
    //
    // Is search bar fixed position
    if (window.getComputedStyle(document.getElementById('header_search')).position === 'fixed') {

      // Does in-page style tag exist for search notice update
      if (document.getElementById('js-stylesSearchNotice')) {
        // Stylesheet already exists

        // Updates offset value within stylesheet
        document.getElementById('js-stylesSearchNotice').textContent = '#site-wrapper.show-search #header_search { margin-top: ' + getElemHeight(noticeTaGdpr) + '; } .menu-dropdown--search.active { display: none !important; }';

      } else {
        // Stylesheet do not exist

        // Creates stylesheet
        oStylesNoticeSearch = document.createElement('style');
        oStylesNoticeSearch.id = 'js-stylesSearchNotice';
        oStylesNoticeSearch.type = 'text/css';

        // Styles - apply offset only when search is active
        oStylesNoticeSearch.appendChild(document.createTextNode('#site-wrapper.show-search #header_search { margin-top: ' + getElemHeight(noticeTaGdpr) + '; } .menu-dropdown--search.active { display: none !important; }'));
        //
        document.head.appendChild(oStylesNoticeSearch);

      }

    } else {

      // Does in-page style tag exist for search notice update
      if (document.getElementById('js-stylesSearchNotice')) {
        document.getElementById('js-stylesSearchNotice').remove();
      }

    }

  }

  // Handles window resize event for notice
  function noticeResize() {
    clearTimeout(window.resizeTimeout);
    //
    window.resizeTimeout = setTimeout(function() {
      updateBodyOffset(getElemHeight());
    }, 250);
  }

  // Handles clicks outside of element
  var checkDomNotice = function() {

    // Attempts to validate if notice has been accepted or differed notice
    if (typeof noticeTaGdpr === 'undefined' || noticeTaGdpr === null || noticeTaGdpr.offsetHeight === 0) {

      // Clears event listeners associated with notice
      window.removeEventListener("click", checkDomNotice);
      window.removeEventListener("resize", noticeResize);

      // Clears interval timer
      if (oNoticeCheckInterval) {
        clearInterval(oNoticeCheckInterval);
      }

      // One final update to body offset (to 0px)
      updateBodyOffset(getElemHeight());

      // Remove injected stylesheet if applicable
      if (document.getElementById('js-stylesSearchNotice')) {
        document.getElementById('js-stylesSearchNotice').remove();
      }

    }
    //

  };

  // Handles element click event
  function elemClickTracker(event) {
    event.stopPropagation();

    // Checks interaction flag to prevent multiple click and set interval events from being applied
    if (!bInteractionFlag) {
      oNoticeCheckInterval = setInterval(checkDomNotice, 1000); // Performs regular checks for notice in dom
      //
      window.addEventListener("click", checkDomNotice); // Tracks click events outside notice
      //
      bInteractionFlag = true;
    }
    //
    updateBodyOffset(getElemHeight());

  }

  // Regularly samples notice to check if content loads
  var iNoticeCheckCount = 0;
  //
  if (noticeTaGdpr !== null) {

    var oNoticeLoaded = setInterval(function() {

      // Does notice have height - this validates if notice has loaded
      if (noticeTaGdpr.offsetHeight !== 0 || iNoticeCheckCount === 15) {

        // Initialise handler functions
        if (noticeTaGdpr.offsetHeight !== 0) {

          // Adds click event to element
          noticeTaGdpr.addEventListener('click', elemClickTracker);

          // Responsive window resize event
          window.addEventListener("resize", noticeResize);

          // Performs style compensation if element exists
          updateBodyOffset(getElemHeight());

        }
        //
        clearInterval(oNoticeLoaded);

      }
      //
      iNoticeCheckCount++;

    }, 150);

  }

});
