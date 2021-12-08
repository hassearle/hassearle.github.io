/**
 * ------------------------------
 * ProductSort.js
 * ------------------------------
 *
 * A helper that contains the sort logic. Any change here should not require any
 * changes elsewhere
 */

/**
 * Update the sort
 *
 * @param String sortType
 */
function applySort(products, sortType) {
  // sortType = 'sort-'+sortType;
  // console.dir(sortType);

  if (products != null && products.length > 0) {
    products.sort((a, b) => {
      switch (sortType) {
        case "sort-a-to-z":
          return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1

        case "sort-z-to-a":
          return a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1

        case "sort-price-ascending":
          var price1 =
            a.promo_price_usd ||
            a.wholesale_price_usd ||
            a.retail_price_usd
          var price2 =
            b.promo_price_usd ||
            b.wholesale_price_usd ||
            b.retail_price_usd
          return price1 < price2 ? -1 : 1

        case "sort-price-descending":
          var price1 =
            a.promo_price_usd ||
            a.wholesale_price_usd ||
            a.retail_price_usd
          var price2 =
            b.promo_price_usd ||
            b.wholesale_price_usd ||
            b.retail_price_usd
          return price1 > price2 ? -1 : 1

        case "sort-pv-ascending":
          return a.pv < b.pv ? -1 : 1

        case "sort-pv-descending":
          return a.pv > b.pv ? -1 : 1
      }
    })
  }
  return products
}
