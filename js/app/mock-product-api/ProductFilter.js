/**
 * ------------------------------
 * ProductFilter.js
 * ------------------------------
 *
 * A helper that contains the filter logic. Any change here should not require any
 * changes elsewhere
 */

/**
 * Apply the filters to the products
 *
 * @param Array filters: String array of filters (data attributes)
 */
function applyFilters(products, filters) {
  let filteredProducts = products
  filters = sortFilters(filters)
  if (filters) {
    filters.forEach((filter) => {
      // Filter on the categry first
      if (filter.includes("category")) {
        filteredProducts = applyCategoryFilter(filter, products)
      }

      if (filter.includes("pv")) {
        filteredProducts = applyPVFilter(filter, filteredProducts)
      } else if (filter.includes("size")) {
        filteredProducts = applySizeFilter(filter, filteredProducts)
      } else if (filter.includes("price")) {
        filteredProducts = applyPriceFilter(filter, filteredProducts)
      }
    })
  }
  // if no results - append a message in body and filter footer
  if (filteredProducts.length === 0) {
    $('.search-results__filter-no-results-msg').show();
    $('.dropdown-menu__filter-no-results-msg').css('display', 'flex');
  } else {
    $('.search-results__filter-no-results-msg').hide();
    $('.dropdown-menu__filter-no-results-msg').hide();
  }

  return filteredProducts
}

/**
 * Sort the filter so the products category is always first
 *
 * @param Array filters: all currently selected filters
 */

function sortFilters(filters) {
  var first = "filter-category"
  return filters.sort(function(x, y) {
    return x.includes(first) ? -1 : y.includes(first) ? 1 : 0
  })
}

/**
 * Logic for applying category filters
 *
 * @param String filter: represents the filter from a data attribute
 */
function applyCategoryFilter(filter, products) {
  let filteredProducts
  let category = filter.replace("filter-category-", "").replaceAll("-", " ")

  if (category === "all" || category === "category") {
    filteredProducts = products.filter((product) => {
      return mapToLowerCase(product.categories)
    })
  } else {
    filteredProducts = products.filter((product) => {
      return mapToLowerCase(product.categories).includes(category)
    })
  }
  return filteredProducts
}

/**
 * Logic for applying pv filters
 *
 * @param String filter: represents the filter from a data attribute
 */
function applyPVFilter(filter, products) {
  let filteredProducts
  switch (filter) {
    case "filter-pv-0-10":
      filteredProducts = products.filter((product) => {
        return product.pv < 20.0
      })
      break
    case "filter-pv-10-20":
      filteredProducts = products.filter((product) => {
        return product.pv >= 20 && product.pv < 30.0
      })
      break
    case "filter-pv-20-30":
      filteredProducts = products.filter((product) => {
        return product.pv >= 30 && product.pv < 40
      })
      break
    case "filter-pv-30-40":
      filteredProducts = products.filter((product) => {
        return product.pv >= 40
      })
      break
  }
  return filteredProducts
}

/**
 * Logic for applying size filters
 *
 * @param String filter: represents the filter from a data attribute
 */
function applySizeFilter(filter, products) {
  let filteredProducts
  var size = filter.replace("filter-size-", "").replaceAll("-", " ")

  if (size !== "size") {
    filteredProducts = products.filter((product) => {
      return mapToLowerCase(product.sizes).includes(size)
    })
  }
  return filteredProducts
}

/**
 * Logic for applying price filters
 *
 * @param String filter: represents the filter from a data attribute
 */
function applyPriceFilter(filter, products) {
  let filteredProducts

  switch (filter) {
    case "filter-price-0-10":
      filteredProducts = products.filter((product) => {
        return product.retail_price_usd <= 10.0
      })
      break
    case "filter-price-10-20":
      filteredProducts = products.filter((product) => {
        return product.retail_price_usd > 10.0 && product.retail_price_usd <= 20.0
      })
      break
    case "filter-price-20-50":
      filteredProducts = products.filter((product) => {
        return product.retail_price_usd > 20.0 && product.retail_price_usd <= 50.0
      })
      break
    case "filter-price-50":
      filteredProducts = products.filter((product) => {
        return product.retail_price_usd > 50.0
      })
      break
  }

  return filteredProducts
}

// --------------------
// HELPER FUNCTIONS
// --------------------

/**
 * Converts an array of strings to lowercase
 *
 * @param Array values
 */
function mapToLowerCase(values) {
  return values.map((value) => {
    return value.toLowerCase()
  })
}
