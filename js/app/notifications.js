$(function() {

  $("[data-js-show-notification]").on("click", function(e) {
    e.preventDefault();

    // Remove any existing notifications
    $("#header").find(".notification").remove();
    $("body").removeClass("notification-on");
    $("#site-canvas");

    // Get the notification type from the data attribute
    var notificationType = $(this).data("notification-type");
    var notificationHtml = "";
    switch (notificationType) {
      case "danger":
        notificationHtml = $(NOTIFICATION_DANGER);
        break;
      case "warning":
        notificationHtml = $(NOTIFICATION_WARNING);
        break;
      case "success":
        notificationHtml = $(NOTIFICATION_SUCCESS);
        break;
      case "info":
        notificationHtml = $(NOTIFICATION_INFO);
        break;
      case "orderLimit":
        notificationHtml = $(NOTIFICATION_ORDER_LIMIT);
        break;
      case "checkoutOrderLimit":
        notificationHtml = $(NOTIFICATION_CHECKOUT_ORDER_LIMIT);
        break;

      default:
        break;
    }

    // Add the Notification
    if (notificationHtml !== "") {
      $("#header").prepend(notificationHtml);
      var $notification = $("#header").find(".notification");
      var notificationHeight = $notification.outerHeight() - 5;
      var notificationHeightWithBorder = $notification.outerHeight();
      var $canvasElem = $("#site-canvas");
      $notification.css("margin-top", "-" + notificationHeight + "px");
      $canvasElem.css("margin-top", notificationHeightWithBorder + "px");

      setTimeout(function() {
        $("#header").find(".notification").css({
          "display": "block"
        });
      }, 100);

      setTimeout(function() {
        $("#header").find(".notification").css({
          "margin-top": "0"
        });
        $("body").addClass("notification-on");
      }, 100);

      // Hide the notification after duration
      var autoHide = $(this).data("notification-auto-hide");
      if (autoHide) {
        setTimeout(function() {
          $notification.css("margin-top", "-" + notificationHeight + "px");
          $canvasElem.css("margin-top", notificationHeightWithBorder + "px");
          $("body").removeClass("notification-on");
        }, 3000);
        setTimeout(function() {
          $("#header").find(".notification").remove();
          $canvasElem.css("margin-top", "0");
        }, 3000);
      }
    }

    // Close Button
    $("[data-js-notification-close]").on("click", function() {

      $notification.css("margin-top", "-" + notificationHeight + "px");
      $canvasElem.css("margin-top", "0");
      $("body").removeClass("notification-on");

      setTimeout(function() {
        $("#header").find(".notification").remove();
      }, 500);
    });

    // 'Update Products' link on Order Limit notification
    $('[data-js-update-products-link]').on('click', function(e) {
      e.preventDefault();

      // switch to 'Update Products' tab
      $('.lrp-manage-tabs__items').find('.item').tab('change tab', 'products');

      // and scroll to the tabs list
      $([document.documentElement, document.body]).animate({
        scrollTop: $(".lrp-manage-tabs__items").offset().top - 150
      }, 1000);
    });

  });
});
