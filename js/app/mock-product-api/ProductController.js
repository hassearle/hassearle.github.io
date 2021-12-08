/**
 * ------------------------------
 * ProductController.js
 * ------------------------------
 *
 * Contains the business logic.
 * Should NOT contain any view logic (html, css etc)
 */

// --------------------
// VARIABLES
// --------------------

var currentPage = 1
var resultsPerPage = 10 // INITIAL - This will change for different breakpoints [below]
  // These are the product result numbers for different breakpoints (xs / sm / md / lg)
var resultsPerPageXS = 8
var resultsPerPageSM = 12
var resultsPerPageMD = 16
var resultsPerPageLG = 20
var currentFilters = [] // retrieved from view data attributes
var currentSort = "sort-price-descending" // retrieved from view data attributes
var productsIntoPages = null // the filtered products broken into pages
var loading = false
var layoutClass = "product--grid"
  // USED FOR BTN/CTA OUTPUT DEPENDING ON CONTEXT:
var loggedInStatus = $("body").hasClass("logged-in") // logged-out (Ouputs: Add to Bag) / logged-in (Ouputs: Add to Loyalty Order)
  // 1. logged-in/out : 2. 'loyalty / addToOrder' : 3. quickView:'true/false'
var ctaInfo = "addToOrder" // 'loyalty' (Outputs: Add to Loyalty Order [if logged in]) or 'addToOrder' (Outputs: Add to Order [if logged in])
if ($("body").hasClass("search")) {
  ctaInfo = "loyalty"
} // DEV NOTE < BIT LOOSE THIS! RETHINK MAYBE
var quickView = true // Outputs 'Quick view' link (over precence of 'or add to bag')
if ($("body").hasClass("search")) {
  quickView = false
} // DEV NOTE < BIT LOOSE THIS! RETHINK MAYBE

// This is the object for all products.
// It should not change once all the products have been loaded.
var allProducts = {
  value: "",
  get data() {
    return this.value
  },
  set data(value) {
    this.value = value
  },
}

// This is the object for filtered product.
var allFilteredProducts = {
  value: "",
  reloadProducts() {
    reloadProducts()
  },
  get data() {
    return this.value
  },
  set data(value) {
    this.value = value
    this.reloadProducts()
  },
  get count() {
    return this.data.length
  },
}

// --------------------
// FUNCTIONS
// --------------------

/**
 * Initial load of the json using Ajax.
 *
 */
function initProducts() {
  // pass in the 'loadProducts' callback function
  getProducts(loadProducts)
}

/**
 * Fetch all of the product from the json file using Ajax.
 *
 */
function getProducts(callback) {
  var xmlhttp = new XMLHttpRequest()

  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(JSON.parse(this.responseText))
      loading = false
    }
  }
  xmlhttp.open("GET", "../../../json/products.json", true)
  xmlhttp.send()
}

/**
 * Callback function for getProducts.
 *
 */
function loadProducts(data) {
  allProducts.data = data
  allFilteredProducts.data = data
}

/**
 * Will reload the products if the allFilteredProducts data changes.
 *
 */
function reloadProducts() {
  breakProductsIntoPages()
  refreshCurrentProducts()
  updateResultCount()
}

/**
 * Update the filters
 *
 * @param String filters: Filter name string
 */
function updateFilters(filter) {
  if (filter) {
    currentFilterHandler(filter)
  }
  if (currentFilters && currentFilters.length > 0) {
    products = applyFilters(allProducts.data, currentFilters)
    allFilteredProducts.data = products
  } else {
    // reset the products
    allFilteredProducts.data = allProducts.data
  }
}

/**
 * Removes a selected filter from the array
 *
 * @param String filter: Filter name string
 */
function removeFilter(filter) {
  currentFilters = currentFilters.filter((item) => !item.includes(filter))
  updateFilters()
}

/**
 * Handler the current selected filter array
 *
 * @param String filter: Filter name string
 */
function currentFilterHandler(filter) {
  if (filter.includes("filter-category")) {
    currentFilters = currentFilters.filter((item) => !item.includes("filter-category"))
  }

  if (filter.includes("filter-pv")) {
    currentFilters = currentFilters.filter((item) => !item.includes("filter-pv"))
  }

  if (filter.includes("filter-size")) {
    currentFilters = currentFilters.filter((item) => !item.includes("filter-size"))
  }

  if (filter.includes("filter-price")) {
    currentFilters = currentFilters.filter((item) => !item.includes("filter-price"))
  }

  // Reset the filter
  if (filter === "all") {
    currentFilters = []
  }

  currentFilters.push(filter)
}

/**
 * Update the sort
 *
 * @param String sortType
 */
function updateSort(sortType) {
  if (sortType.length > 0) {
    products = applySort(allFilteredProducts.data, sortType)
  }
  allFilteredProducts.data = products
}

/**
 * Splits the products into a nested array. Each array represents a page.
 *
 * Note: Calling the function will immediately update the view. So care should be taken when calling from window resizing
 */
function breakProductsIntoPages() {
  productsIntoPages = [
      []
    ] // reset

  var page = 0

  if (allFilteredProducts.data != null && allFilteredProducts.data.length > 0) {
    for (var i = 0; i < allFilteredProducts.data.length; i++) {
      var product = allFilteredProducts.data[i]
      productsIntoPages[page].push(product)

      if (
        i != 0 &&
        productsIntoPages[page].length + 1 > resultsPerPage && // reached page limit
        i + 1 < allFilteredProducts.data.length // not the last loop
      ) {
        // new page
        page += 1
        productsIntoPages.push([])
      }
    }
  }
}

/**
 * Update the results count.
 *
 */
function updateResultCount() {
  $("[data-js-filter-count]").text(allFilteredProducts.count)
  if (allFilteredProducts.count == 0) {
    $("[data-js-filter-apply]").prop("disabled", true)
    $("[data-js-filter-apply]").attr("disabled", "disabled")
  } else {
    $("[data-js-filter-apply]").prop("disabled", false)
    $("[data-js-filter-apply]").removeAttr("disabled")
  }
}

/**
 * Update the current page and optionally refresh the view
 *
 * @param Integer page
 * @param Boolean refresh: Refresh the view after updating
 */
function updatePage(page, refresh) {
  currentPage = page

  if (refresh) {
    reloadProducts()
  }
}

/**
 * Update the number of results show per page
 *
 * @param Integer count
 */
function updateResultsPerPage(count) {
  resultsPerPage = count

  reloadProducts()
}

// --------------------
// HELPER FUNCTIONS
// --------------------

/**
 * Grab the current products to be displayed
 */
function currentProducts() {
  // if we are on paggi page 8 and then widen our screen we need to nudge the currentPage down to final page
  // if (currentPage > productsIntoPages.length - 1) {
  //     currentPage = productsIntoPages.length - 1
  // }

  return productsIntoPages[currentPage - 1]
}
