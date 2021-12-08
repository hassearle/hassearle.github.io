/**
 * ------------------------------------------------------------------------
 * Pagination
 * ------------------------------------------------------------------------
 */

$(function() {

  // Pagination reset function
  function paginationReset() {
    $('.pagination:not(.pagination--search) .pagination__item.is-active').removeClass('is-active');
  }

  // Pagination functionality
  $('.pagination:not(.pagination--search) .pagination__item').on('click', function(e) {
    e.preventDefault();

    // Check pagination option isn't disabled
    if (!$(this).hasClass('is-disabled')) {

      // Pagination refs
      var pagList = $(this).parent('.pagination__list');
      var pagPrev = pagList.find('.pagination__prev');
      var pagNext = pagList.find('.pagination__next');
      //
      var pagActive = pagList.find('.is-active').index();
      var pagClicked = $(this).index();
      var pagTotal = pagList.find('.pagination__item').length;
      //
      var classActive = 'is-active';
      var classDisabled = 'is-disabled';

      // Ignores prev/next buttons
      if ((pagClicked !== 0) && (pagClicked !== (pagTotal - 1))) {

        paginationReset();

        // 01. Update active item index (pagActive)
        pagActive = pagClicked;

        // 02. Set 'is-active' class
        pagList.find('.pagination__item').eq(pagActive).addClass(classActive);

        // 03. Enable/disable prev/next buttons
        // Prev
        if (pagActive === 1) {
          pagPrev.addClass(classDisabled);
        } else {
          pagPrev.removeClass(classDisabled);
        }
        //
        if (pagActive === (pagTotal - 2)) {
          pagNext.addClass(classDisabled);
        } else {
          pagNext.removeClass(classDisabled);
        }

      }
      //
      //
      // Handles prev/next button clicks
      if ((pagClicked === 0) || (pagClicked === (pagTotal - 1))) {

        paginationReset();

        // Prev
        if (pagClicked === 0) {
          //
          pagList.find('.pagination__item').eq(pagActive - 1).addClass(classActive);
          pagNext.removeClass(classDisabled);

          // If first number
          if (pagActive === 2) {
            pagPrev.addClass(classDisabled);
          }

        }

        // Next
        if (pagClicked === (pagTotal - 1)) {
          //
          pagList.find('.pagination__item').eq(pagActive + 1).addClass(classActive);
          pagPrev.removeClass(classDisabled);

          // If last number
          if (pagActive === (pagTotal - 3)) {
            pagNext.addClass(classDisabled);
          }

        }

      }
      //

    }

  });

});
