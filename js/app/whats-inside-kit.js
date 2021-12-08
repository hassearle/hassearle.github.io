/**
 * ------------------------------------------------------------------------
 * Whats Inside Kit
 * ------------------------------------------------------------------------
 */

$(function() {

  $("[data-js-wi-link]").on("click", function(e) {
    e.preventDefault();

    var paneId = $(this).data("target");
    $(".product-whats-inside-kit__content").addClass("inactive");
    $(paneId).addClass("active").removeClass("inactive");
  });

  $("[data-js-wi-back]").on("click", function(e) {
    e.preventDefault();

    var paneId = $(this).closest(".product-whats-inside-kit__info-detail").attr("id");

    $("#" + paneId).removeClass("active").addClass("inactive");
    $(".product-whats-inside-kit__content").removeClass("inactive");
  });

  $("[data-js-link-pane-detail]").on("click", function(e) {
    e.preventDefault();

    var paneId = "#pane" + $(this).data("link-pane");

    $(paneId).addClass("inactive");
    $(".product-whats-inside-kit__content").addClass("inactive");

    var paneDetailId = $(this).data("link-pane-detail");

    $(paneId + "_detail [data-pane-detail=" + paneDetailId + "]").addClass("active");
  });

  $("[data-js-wi-pane-back]").on("click", function(e) {
    e.preventDefault();

    var paneId = $(this).closest(".product-whats-inside-kit__info-list-item__pane__detail__wrapper").attr("id");
    $("[data-js-pane-detail]").removeClass("active");
    $("#" + paneId.replace("_detail", "")).addClass("active").removeClass("inactive");
  });

  $("[data-js-wi-close]").on("click", function(e) {
    $(".product-whats-inside-kit__info-detail").removeClass("active").removeClass("inactive");
    $(".product-whats-inside-kit__content").removeClass("inactive");
    $("[data-js-pane-detail]").removeClass("active");
  });

  // What's Inside section
  // product detail - suppliment page - Ingredients list - clip word length on mobile only
  // 1. Animating mask with hidden overflow:

  function mobileWordClip() {
    if (window.innerWidth < 767) {

      // What's Inside section
      // product detail - suppliment page - Ingredients list - clip word length on mobile
      var $content = $('[data-js-clip-word-length-mob]');

      // if text length is greater than say 500 chars
      if ($content[0] && $content[0].innerText.length > 500) {

        // add initial clip class
        $content.addClass('product-whats-inside__footer-content--clipped');

        $('[data-js-clip-word-read-more]').on('click', function(e) {
          e.preventDefault();

          if ($content.hasClass('product-whats-inside__footer-content--clipped')) {
            $content.removeClass('product-whats-inside__footer-content--clipped');
            $(this).children('.product-whats-inside__js-read-more-text').hide();
            $(this).children('.product-whats-inside__js-read-less-text').show();
          } else {
            $content.addClass('product-whats-inside__footer-content--clipped');
            $(this).children('.product-whats-inside__js-read-more-text').show();
            $(this).children('.product-whats-inside__js-read-less-text').hide();
          }

        });

      }

    } else {
      $('.product-whats-inside__footer-content').removeClass('product-whats-inside__footer-content--clipped');
      $('.product-whats-inside__js-read-more').remove();
    }
  }
  mobileWordClip();
  $(window).resize(mobileWordClip);

  // 2. This version adds ellipsis read more/less text

  // What's Inside section - product detail - suppliment page - Ingredients list - clip word length on mobile
  // var $content = $('[data-clip-word-length-mob] p > span');
  // var $body = $content.html();
  // var wordsArray = $.trim($body).split(",");

  // function mobileWordClip(){

  //     if (window.innerWidth < 767) {

  //         var showItemsNum = 13;
  //         var ellipsestext = "...";
  //         var moretext = "<span fieldname='clip_word_read_more_mob'>Read more...</span>";
  //         var lesstext = "<span fieldname='clip_word_read_less_mob'>Read less...</span>";

  //         if(wordsArray.length > showItemsNum) {

  //             var intro = wordsArray.slice(0, showItemsNum);
  //             var more = wordsArray.slice(showItemsNum, wordsArray.length);

  //             $('[data-clip-word-length-mob]').addClass('clip-word');
  //             var html = intro + '<span class="clip-word__ellipses moreellipses">' + ellipsestext + '&nbsp;</span><span class="clip-word__more-content morecontent"><span style="display:none;">' + more + '</span>&nbsp;&nbsp;<a href="#" class="clip-word__more-link clip-word__more-link--more morelink more">' + moretext + '</a></span>';

  //             $('[data-clip-word-length-mob] p > span').html(html); 

  //         }

  //         // Make the link a block layout option:
  //         // $(".clip-word__more-link").addClass('clip-word__more-link--block'); 

  //         $(".clip-word__more-link").click(function(){
  //             if($(this).hasClass("clip-word__more-link--less")) {
  //                 $(this).removeClass("clip-word__more-link--less");
  //                 $(this).addClass("clip-word__more-link--more");
  //                 $(this).html(moretext);
  //                 $('[data-clip-word-length-mob]').addClass('clip-word--clipped');
  //             } else {
  //                 $(this).addClass("clip-word__more-link--less");
  //                 $(this).removeClass("clip-word__more-link--more");
  //                 $(this).html(lesstext);
  //                 $('[data-clip-word-length-mob]').removeClass('clip-word--clipped');
  //             }
  //             $(this).parent().prev().slideToggle(200);
  //             $(this).prev().slideToggle(200);
  //             return false;
  //         }); 

  //     } else {
  //         $('.product-whats-inside__footer-content').removeClass('product-whats-inside__footer-content--clipped');
  //         //$('.product-whats-inside__js-read-more').remove();
  //         $('[data-clip-word-length-mob]').html($content.html());
  //     }
  // }
  // mobileWordClip();
  // $(window).resize(mobileWordClip);

});
