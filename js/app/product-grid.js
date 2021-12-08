/**
 * ------------------------------------------------------------------------
 * Product Grid
 * ------------------------------------------------------------------------
 */

$(function() {

  // Grid Classes
  var globalGridClasses = 'cards--col-1 cards--col-2 cards--col-3 cards--col-4 cards--col-5 cards--col-6 cards--col-sm-1 cards--col-sm-2 cards--col-sm-3 cards--col-sm-4 cards--col-sm-5 cards--col-sm-6 cards--col-md-1 cards--col-md-2 cards--col-md-3 cards--col-md-4 cards--col-md-5 cards--col-md-6 products--col-1 products--col-2 products--col-3 products--col-4 products--col-5 products--col-6 products--col-sm-1 products--col-sm-2 products--col-sm-3 products--col-sm-4 products--col-sm-5 products--col-sm-6 products--col-md-1 products--col-md-2 products--col-md-3 products--col-md-4 products--col-md-5 products--col-md-6 ';

  // List button
  $('.sort-link--list').on('click', function(e) {
    e.preventDefault();
    var type = $(this).data("type");
    var list = "";
    var list_sm = "";
    var list_md = "";
    var gridClasses = "";
    if (type === "products") {
      if ($(this).data("list")) {
        list = " products--col-" + $(this).data("list");
      }
      if ($(this).data("list-sm")) {
        list_sm = " products--col-sm-" + $(this).data("list-sm");
      }
      if ($(this).data("list-md")) {
        list_md = " products--col-md-" + $(this).data("list-md");
      }
      gridClasses = list + list_sm + list_md;
      $('.search-results .products').removeClass(globalGridClasses).addClass(gridClasses).addClass("products--list").removeClass("products--grid");
    } else {
      if ($(this).data("list")) {
        list = " cards--col-" + $(this).data("list");
      }
      if ($(this).data("list-sm")) {
        list_sm = " cards--col-sm-" + $(this).data("list-sm");
      }
      if ($(this).data("list-md")) {
        list_md = " cards--col-md-" + $(this).data("list-md");
      }
      gridClasses = list + list_sm + list_md;
      $('.cards-' + type).removeClass(globalGridClasses).removeClass("cards--grid").addClass(gridClasses).addClass("cards--list");
      $('.card-' + type + ':not(.card--carousel)').addClass('card-' + type + '--list').removeClass('card-' + type + '--grid');
    }
    // sort menu - active state
    $('.sort-link--grid .icon--grid').removeClass('icon--brand');
    $('.sort-link--grid-small .icon--grid-small').removeClass('icon--brand');
    $(this).find(".icon--list").addClass('icon--brand');
    // ensure .product has coreect class
    $('.search-results .product').removeClass('product--grid').addClass("product--list");
  });

  // Grid button
  $('.sort-link--grid, .sort-link--grid-small').on('click', function(e) {
    e.preventDefault();
    var type = $(this).data("type");
    var grid = "";
    var grid_sm = "";
    var grid_md = "";
    var gridClasses = "";
    if (type === "products") {
      if ($(this).data("grid")) {
        grid = " products--col-" + $(this).data("grid");
      }
      if ($(this).data("grid-sm")) {
        grid_sm = " products--col-sm-" + $(this).data("grid-sm");
      }
      if ($(this).data("grid-md")) {
        grid_md = " products--col-md-" + $(this).data("grid-md");
      }
      gridClasses = grid + grid_sm + grid_md;
      $('.search-results .products').removeClass(globalGridClasses).removeClass("products--list").addClass(gridClasses).addClass("products--grid");
      $('.search-results .product').addClass('product--grid').removeClass("product--list");
    } else {
      if ($(this).data("grid")) {
        grid = " cards--col-" + $(this).data("grid");
      }
      if ($(this).data("grid-sm")) {
        grid_sm = " cards--col-sm-" + $(this).data("grid-sm");
      }
      if ($(this).data("grid-md")) {
        grid_md = " cards--col-md-" + $(this).data("grid-md");
      }
      gridClasses = grid + grid_sm + grid_md;
      $('.cards-' + type).removeClass(globalGridClasses).removeClass("cards--list").addClass(gridClasses).addClass("cards--grid");
      $('.card-' + type + ':not(.card--carousel)').addClass('card-' + type + '--grid').removeClass('card-' + type + '--list');
    }
    // sort menu - active state
    $('.sort-link--list .icon--list').removeClass('icon--brand');
    $('.sort-link--grid-small .icon--grid-small').removeClass('icon--brand');
    $('.sort-link--grid .icon--grid').removeClass('icon--brand');
    if ($(this).hasClass("sort-link--grid")) {
      $(this).find(".icon--grid").addClass('icon--brand');
    } else {
      $(this).find(".icon--grid-small").addClass('icon--brand');
    }
    // ensure .product has coreect class
    $('.search-results .product').removeClass('product--list').addClass("product--grid");
  });
});
