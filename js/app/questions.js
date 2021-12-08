/**
 * ------------------------------------------------------------------------
 * Questions
 * ------------------------------------------------------------------------
 */

// common-questions toggle show / hide answer - mobile only
if (window.innerWidth < 767) {
  $('.js-toggle-mob').hide();
  $('<a href="#" class="common-questions__show"><span class="show-question">Show</span><span class="hide-question">Hide</span></a>').insertBefore('.js-toggle-mob');
  $('.common-questions__show').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('common-questions__show--active');
    $(this).parent().find('.common-questions__answer').toggleClass('common-questions__answer--active');
  });
}

function showQuestionsDt() {
  if (window.innerWidth > 768) {
    $('.js-toggle-mob').show();
    $('.common-questions__show').hide();
  }
}
$(window).resize(showQuestionsDt);
