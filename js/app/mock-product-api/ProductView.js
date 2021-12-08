/**
 * ------------------------------
 * ProductView.js
 * ------------------------------
 *
 * Should only contain view logic. Any other logic should be place into the controller (ProductController.js)
 *
 */

var view //the html element of concern

document.addEventListener("DOMContentLoaded", function(event) {
  view = $("[data-js-json-results]")

  // Clear the hard coded view
  clearView()

  if (!isEnabled) {
    // logic not needed for current page
    return
  }

  // initialize the products data
  initProducts()

  // Change layoutClass depending on sort btn
  $(".sort__link").on("click", function(e) {
    if ($(this).hasClass("sort-link--list")) {
      layoutClass = "product--list"
    }
    if ($(this).hasClass("sort-link--grid")) {
      layoutClass = "product--grid"
    }
  })

  // Listen to sort changes and pass the data attribute to updateSort(sort) in ProductController.js (automatically refreshes the view)
  $("[data-js-sort-filter]").on("click", function(e) {
    clearView()

    sortType = $(this).data("jsSortFilter")
    updateSort(sortType)
  })

  // Listen to filter changes and pass the data attributes to updateFilters(filters) in ProductController.js (automatically refreshes the view)
  $("[data-js-filter]").on("click", function(e) {
    e.preventDefault()
    let filter = $(this).data("jsFilter")
    let filterType = getFilterType(filter)

    clearView()

    // Reset the page to the first when filter is clicked
    currentPage = 1;

    if (filter.includes("filter-category")) {
      $(".taxonomy__link").removeClass("taxonomy__link--active")
      $(".taxonomy__link[data-js-filter='" + filter + "']").toggleClass("taxonomy__link--active")
    }
    // Clear [active class] from other items in this list
    $(this).closest(".drill-filter__list").find("[data-js-filter]").removeClass("drill-filter__node--focus")

    // Remove the peviously selected item from the selected list of the same type
    $(".filter-selections__list .filter-selections__item").each(function(index, element) {
      let selectedFilter = $(element).data("js-filter-selected")
      if (selectedFilter.includes(filterType)) {
        this.remove()
      }
    })

    // Apply the filters
    updateFilters(filter)
  })

  function getFilterType(filter) {
    if (filter.includes("filter-category")) {
      return "filter-category"
    }
    if (filter.includes("filter-size")) {
      return "filter-size"
    }
    if (filter.includes("filter-pv")) {
      return "filter-pv"
    }
    if (filter.includes("filter-price")) {
      return "filter-price"
    }
  }

  function clearView() {
    $(view).children(".product").remove()
  }
  //We need to reset things when filter lozenge removed
  $(document).on("click", ".filter-selections__item", function(e) {
    clearView()
    filter = $(this).data("js-filter-selected")
    if (filter.includes("filter-category")) {
      // Reset the top level filter if removing category
      $(".taxonomy__link").removeClass("taxonomy__link--active")
      $(".taxonomy__link[data-js-filter='filter-category-all']").addClass("taxonomy__link--active")
    }
    removeFilter(filter)
  })

  $("[data-js-filter-reset]").on("click", function(e) {
    clearView()
    filter = "all"
      // Reset the top level filter if removing category
    $(".taxonomy__link").removeClass("taxonomy__link--active")
    $(".taxonomy__link[data-js-filter='filter-category-all']").addClass("taxonomy__link--active")
    updateFilters(filter)
  })

  // Pagination
  // add data attrs for prev/next (we don't wat it hard coded in pagination.html)
  $(".pagination__item.pagination__next").children('.pagination__inner').data('data-js-pagination', 'next');
  $(".pagination__item.pagination__prev").children('.pagination__inner').data('data-js-pagination', 'prev');
  // Listen to pagination and call updatePage(count, refresh) in ProductController.js (can choose to refresh the view or not)
  $(document).on("click", "[data-js-pagination]", function(e) {
    e.preventDefault()
    clearView()

    var paginate = $(this).data("jsPagination") // 'next' || 'prev' || 0-n
      // next btn action
    if (currentPage != productsIntoPages.length) {
      if (paginate === "next") {
        currentPage++
      }
    }
    // prev btn action
    if (currentPage > 0) {
      if (paginate === "prev") {
        currentPage--
      }
    }
    // if it's not next / prev then it's the paginate number we want
    if (paginate !== "prev" && paginate !== "next") {
      currentPage = paginate
    }

    // scroll to the top of the page when changing pages
    $("html, body").animate({
        scrollTop: 0,
      },
      800
    )

    updatePage(currentPage, true)
  })

  // * Listen to breakpoint changes that can alter how many products are shown per page and call updateResultsPerPage(count) in ProductController.js (automatically refreshes the view)
  function sizeCheck() {
    clearView()

    var windowWidth = $(window)[0].innerWidth
    if (windowWidth < 480) {
      updateResultsPerPage(resultsPerPageXS)
    } else if (windowWidth < 768) {
      updateResultsPerPage(resultsPerPageSM)
    } else if (windowWidth < 1024) {
      updateResultsPerPage(resultsPerPageMD)
    } else {
      updateResultsPerPage(resultsPerPageLG)
    }
  }
  sizeCheck()
  $(window).resize(sizeCheck)
})

/**
 * Pagination Items
 */
function pagiItems() {
  $(".pagination__item").remove() // remove the hard coded / existing pagi items

  // Count up and insert dymanic pagi items (if more than one page)
  if (productsIntoPages.length > 1) {
    var j = 0
    for (j = 0; j < productsIntoPages.length; j++) {
      $(".pagination__list").append(`<li class="pagination__item">
                <a href="#" class="pagination__inner" data-js-pagination="${j + 1}">
                    ${j + 1}
                </a>
            </li>`)
    }
  }

  // add prev / next buttons if required
  if (productsIntoPages.length > 1) {
    $(".pagination__list").prepend(`<li class="pagination__item pagination__prev">
            <a href="#" class="pagination__inner" data-js-pagination="prev">
                <i class="pagination__icon icon--arrow-left icon--brand"></i>
                <span fieldname="pagination_prev">Prev</span>
            </a>
        </li>`)
    $(".pagination__list").append(`<li class="pagination__item pagination__next">
            <a href="#" class="pagination__inner" data-js-pagination="next">
                <span fieldname="pagination_next">Next</span>
                <i class="pagination__icon icon--arrow-right icon--brand"></i>
            </a>
        </li>`)
  }

  // Prev - disabled classes
  if (currentPage === 1) {
    $(".pagination__prev").addClass("is-disabled")
  } else {
    $(".pagination__prev").removeClass("is-disabled")
  }
  // Next - disabled classes
  if (currentPage >= productsIntoPages.length) {
    $(".pagination__next").addClass("is-disabled")
  } else {
    $(".pagination__next").removeClass("is-disabled")
  }
  // Numbered pagination Items
  $(".pagination__inner[data-js-pagination]").removeClass("is-active")
  $('.pagination__inner[data-js-pagination="' + currentPage + '"]').addClass("is-active")

  // Current page display number of items update [20 of 64 Results]
  $('[data-js-filter-count-page]').text(productsIntoPages[0].length)

  // if there is only one page we dont't need the pagination
  if (productsIntoPages.length === 1) {
    $('.pagination__list').hide();
  } else {
    $('.pagination__list').show();
  }
}

/**
 * Determines if the logic is required for the current page
 */
function isEnabled() {
  return view != null && document.getElementsByClassName("filter__wrapper").length > 0
}

/**
 * Called from the Controller, this method refreshes the ui, showing the current page of filtered/sorted products.
 *
 */
function refreshCurrentProducts() {
  pagiItems() // refresh pagination items

  //console.log("productsIntoPages", productsIntoPages)
  // Add new page of products
  currentProducts().forEach((element) => {
    // html/liquid goes here // use `currentProducts()`to get the products for the current page

    // Favourite
    var favourite = ""
    var noFavRibbonClass = ""
    if (loggedInStatus) {
      favourite = `<div class="product__favorite" data-js-add-favourite><span class="icon--favorite icon--brand icon--sm"></span></div>`
    } else {
      noFavRibbonClass = "product__ribbon--no-fav"
    }
    var promoRibbon = ""
    if (element.promo_price_usd) {
      promoRibbon = `<div class="product__ribbon ribbon ${noFavRibbonClass} ${loggedInStatus ? "" : "product__ribbon--no-fav"}"><div class="ribbon__text"><span fieldname="bag_promo_label">Promo</span></div></div>`
    }

    // CTAS
    // Discontinued
    var dct = "" // discontinued Output
    var cta = "" // cta[s] Output

    if (element.discontinued) {
      dct = `<div class="product__msg product__msg--discontinued product__msg--small"><div class="product__msg-body"><div class="icon--info-circle icon--brand icon--sm"></div><span fieldname="product_discontinued_text"><span class="product__msg-prefix">Product</span> Discontinued </span></div></div>`
    } else {
      // CTAS
      // ctaInfo = 'loyalty';     .btn text: 'Add to Loyalty Order'
      // or 'addToOrder'          .btn text: 'Add to Order'
      // logged out               .btn text: 'Add to Bag'
      // console.log(ctaInfo, 'ctaInfo');
      if (loggedInStatus) {
        //  quickView? = true/false;
        if (quickView) {
          // is quickView
          cta = `<div class="product__details__footer"><div class="product__actions">
                                <a href="#" class="ui button primary medium" ${element.is_lrp_multi_add ? "data-js-multi-loyalty-add" : "data-js-product-add-to-order"}>
                                    ${ctaInfo == "addToOrder" ? '<span fieldname="product_action_add_order_button_text">Add to Order</span>' : '<span fieldname="product_action_button_text">Add to Loyalty <span class="u--visuallyhidden-sm">Order</span></span>'}
                                </a>
                                <a href="#" class="product__quick-view" data-js-open-quick-view-modal="natural-solutions-kit">
                                    <span fieldname="product_action_link_text">Quick view</span>
                                </a>
                            </div>
                        </div>`
        } else {
          // is not quickView
          cta = `<div class="product__details__footer"><div class="product__actions">
                                <a href="#" class="ui button primary medium" ${element.is_lrp_multi_add ? "data-js-multi-loyalty-add" : "data-js-product-add-to-order"}>
                                    ${ctaInfo == "addToOrder" ? '<span fieldname="product_action_add_order_button_text">Add to Order</span>' : '<span fieldname="product_action_button_text">Add to Loyalty <span class="u--visuallyhidden-sm">Order</span></span>'}
                                </a>
                                <a href="#" class="product__add-bag" data-js-bag-add>
                                    <span fieldname="product_action_link_text">or add to bag</span>
                                </a>
                            </div>
                        </div>`
        }
      } else {
        if (quickView) {
          // is quickView
          cta = `<div class="product__details__footer"><div class="product__actions">
                                <a href="#" class="ui button primary medium" data-js-bag-add>
                                    <span fieldname="product_action_button_text">Add to Bag</span>
                                </a>
                                <a href="#" class="product__quick-view" data-js-open-quick-view-modal="natural-solutions-kit">
                                    <span fieldname="product_action_link_text">Quick view</span>
                                </a>
                            </div>
                        </div>`
        } else {
          // is not quickView
          cta = `<div class="product__details__footer"><div class="product__actions">
                                <a href="#" class="ui button primary medium" data-js-bag-add>
                                    <span fieldname="product_action_button_text">Add to Bag</span>
                                </a>
                            </div>
                        </div>`
        }
      }
    }

    // Coming soon - gazumps buttons / discontinued
    var soon = `<div class="product__msg product__msg--coming-soon product__msg--small">
                <div class="product__msg-body">
                    <div class="icon--alert-circle icon--brand icon--xs"></div>
                    <span fieldname="product_coming_soon_text">Coming Soon</span>
                </div>
            </div>`

    // Discount Badge (%)
    var discountBadge = `<div class="product__badge"><span fieldname="bag_label_discount">${element.discount}% off</span></div>`
    var kitBadge = `<div class="product__badge product__badge--blue-rev"><span fieldname="bag_label_kit_savings">Kit Savings</span></div>`

    // Costs - if Promo (element.promo_price_usd) else
    var costs = `<div class="product__cost-row product__cost-row--support">
				<div class="product__cost-row-label">
					<span fieldname="enroll_retail_label">Retail:</span>
				</div>
				<div class="product__cost-row-info product__cost-row-info--lined"> $${element.retail_price_usd} </div>
			</div>
			<div class="product__cost-row product__cost-row--lead">
				<div class="product__cost-row-label product__cost-row-label--rmvmb">
					<span fieldname="enroll_wholesale_label">Wholesale:</span>
				</div>
				<div class="product__cost-row-info"> $${element.wholesale_price_usd} </div>
			</div>`
      // Costs if Promo
    if (element.promo_price_usd) {
      costs = `<div class="product__cost-row product__cost-row--support">
				<div class="product__cost-row-label">
					<span fieldname="product_price_wholesale_label">Wholesale:</span>
				</div>
				<div class="product__cost-row-info product__cost-row-info--lined">
					$${element.wholesale_price_usd}
				</div>
			</div>
			<div class="product__cost-row product__cost-row--lead product__cost-row--promo">
				<div class="product__cost-row-label auth-in">
					<span fieldname="product_ribbon">Promo</span>:
				</div>
				<div class="product__cost-row-info">
					$${element.promo_price_usd}
				</div>
			</div>`
    }

    // populate current results with each element
    // product--grid needs to be dynamic to a degree --list or --grid

    $(view).append(
      `<div class="product ${layoutClass}">
                <div class="product__overlay" data-js-product-interaction-overlay></div>
                ${loggedInStatus ? favourite : ""}
                ${promoRibbon}
                ${element.discount ? discountBadge : ""}
                ${element.is_kit ? kitBadge : ""} 
                <a href="/" class="product__image"><img fieldname="product_thumbnail" src="${element.image_url ? element.image_url : "/images/product-awaiting-image.png"}" alt=""></a>
                <div class="product__details${element.discontinued ? " product__details--w-msg" : ""}${element.coming_soon ? " product__details--w-msg" : ""}"> 
                    <div class="product__details__header${element.discontinued ? " product__details__header--opacity" : ""}">
						<h3 class="product__title"><a href="/"><span fieldname="product_name">${element.title}</span></a></h3>
						<div class="product__costs">
							<div class="product__qty"><span fieldname="product_volume"> ${element.sizes[0]} </span></div> 
							${loggedInStatus ? '<div class="product__meta product__meta--pv-amount">' + element.pv + '<span fieldname="product_pv_label">PV</span></div>' : ""}
							${costs}
						</div>
					</div>
                ${element.coming_soon ? soon : element.discontinued ? dct : "</div>" + cta} 
            </div>`
    )
  })
}
