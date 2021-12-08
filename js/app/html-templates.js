/**
 * ------------------------------------------------------------------------
 * Html Templates
 * ------------------------------------------------------------------------
 * Should be used for prototyping only and not included in production
 */

var ADD_FAVORITE_HTML = '<div class="product__overlay-panel product__overlay-panel-wishlist-saved">' +
  '<span class="product__overlay-icon icon--favorite-fill-brand icon--brand icon--lg"></span>' +
  '<div class="product__overlay-title">Saved to<br/>wishlist</div>' +
  '<a href="#" class="product__overlay-link">Go to my wishlist</a>' +
  '</div>';

var REMOVE_FAVORITE_HTML = '<div class="product__overlay-panel product__overlay-panel-wishlist-removed">' +
  '<span class="product__overlay-icon icon--favorite-brand icon--brand icon--lg"></span>' +
  '<div class="product__overlay-title">Removed from wishlist</div>' +
  '</div>';

var ADD_TO_BAG_HTML = '<div class="product__overlay-panel product__overlay-panel-bag-added">' +
  '<span class="product__overlay-icon icon--complete-brand icon--brand icon--lg"></span>' +
  '<div class="product__overlay-title"><span fieldname="product_added_to_bag_text">Added to bag</span></div>' +
  '<a href="#" class="product__overlay-link"><span fieldname="product_go_to_bag_text">Go to bag</span></a>' +
  '</div>';

var ADD_TO_BAG_ERROR_HTML = '<div class="product__overlay-panel product__overlay-panel-bag-added">' +
  '<span class="product__overlay-icon icon--info-circle icon--brand icon--xl"></span>' +
  '<div class="product__overlay-title"><span fieldname="product_problem_text">Oops, there was a problem</span></div>' +
  '<a href="#" class="product__overlay-link"><span fieldname="product_try_again_link_text">Try again</span></a>' +
  '</div>';

var ADD_TO_BAG_MAX_ERROR_HTML = '<div class="product__overlay-panel product__overlay-panel-bag-added">' +
  '<span class="product__overlay-icon icon--info-circle icon--brand icon--xl"></span>' +
  '<div class="product__overlay-title"><span fieldname="product_limit_sorry_text">Sorry, you can only add {X-number} of this product</span></div>' +
  '</div>';

var MULTIPLE_LOYALTY_HTML = '<div class="multi-loyalty-order">' +
  '<div class="multi-loyalty-order__header">' +
  '<h4 class="multi-loyalty-order__heading"><span fieldname="lrp_multi_add_title">Select your Order</span></h4>' +
  '<button type="button" class="multi-loyalty-order__close" data-multi-loyalty-order-close><span class="icon--cross icon--sm"></span></button>' +
  '</div>' +
  '<ul class="multi-loyalty-order__list">' +
  '<li class="multi-loyalty-order__item">' +
  '<div class="multi-loyalty-order__primary">' +
  '<h5 class="multi-loyalty-order__date"><time datetime="2019-03-12">March 12</time></h5>' +
  '<div class="multi-loyalty-order__prices"><span class="multi-loyalty-order__price">$00.00</span><span class="multi-loyalty-order__pv"><span fieldname="product_pv_label">PV</span>00.00</span></div>' +
  '</div>' +
  '<div class="multi-loyalty-order__secondary">' +
  '<ul class="multi-loyalty-order__products">' +
  '<li class="multi-loyalty-order__product"><img src="/images/assets/product-spearmint.png" height="60" alt="" /></li>' +
  '<li class="multi-loyalty-order__product"><img src="/images/assets/product-spearmint.png" height="60" alt="" /></li>' +
  '<li class="multi-loyalty-order__product multi-loyalty-order__product--more"><img class="multi-loyalty-order__product-img" src="/images/assets/product-spearmint.png" height="60" alt="" /><span class="multi-loyalty-order__product-additional">+10</span></li>' +
  '</ul>' +
  '<button type="button" class="multi-loyalty-order__add ui button primary small" data-multi-loyalty-order-select><span fieldname="lrp_multi_add_button_text">Add</span></button>' +
  '</div>' +
  '</li>' +
  '<li class="multi-loyalty-order__item">' +
  '<div class="multi-loyalty-order__primary">' +
  '<h5 class="multi-loyalty-order__date"><time datetime="2019-03-24">March 24</time></h5>' +
  '<div class="multi-loyalty-order__prices"><span class="multi-loyalty-order__price">$00.00</span><span class="multi-loyalty-order__pv"><span fieldname="product_pv_label">PV</span>00.00</span></div>' +
  '</div>' +
  '<div class="multi-loyalty-order__secondary">' +
  '<ul class="multi-loyalty-order__products">' +
  '<li class="multi-loyalty-order__product"><img src="/images/assets/product-spearmint.png" height="60" alt="" /></li>' +
  '<li class="multi-loyalty-order__product"><img src="/images/assets/product-spearmint.png" height="60" alt="" /></li>' +
  '<li class="multi-loyalty-order__product multi-loyalty-order__product--more"><img class="multi-loyalty-order__product-img" src="/images/assets/product-spearmint.png" height="60" alt="" /><span class="multi-loyalty-order__product-additional">+10</span></li>' +
  '</ul>' +
  '<button type="button" class="multi-loyalty-order__add ui button primary small" data-multi-loyalty-order-select><span fieldname="lrp_multi_add_button_text">Add</span></button>' +
  '</div>' +
  '</li>' +
  '</ul>' +
  '</div>';

var MULTIPLE_LOYALTY_2PLUS_HTML = '<div class="multi-loyalty-order">' +
  '<div class="multi-loyalty-order__header">' +
  '<h4 class="multi-loyalty-order__heading"><span fieldname="lrp_multi_add_title">Select your Order</span></h4>' +
  '<button type="button" class="multi-loyalty-order__close" data-multi-loyalty-order-close><span class="icon--cross icon--sm"></span></button>' +
  '</div>' +
  '<ul class="multi-loyalty-order__list">' +
  '<li class="multi-loyalty-order__item">' +
  '<div class="multi-loyalty-order__primary">' +
  '<h5 class="multi-loyalty-order__date"><time datetime="2019-03-12">March 12</time></h5>' +
  '<div class="multi-loyalty-order__prices"><span class="multi-loyalty-order__price">$00.00</span><span class="multi-loyalty-order__pv"><span fieldname="product_pv_label">PV</span>00.00</span></div>' +
  '</div>' +
  '<div class="multi-loyalty-order__secondary">' +
  '<ul class="multi-loyalty-order__products">' +
  '<li class="multi-loyalty-order__product"><img src="/images/assets/product-spearmint.png" height="60" alt="" /></li>' +
  '<li class="multi-loyalty-order__product"><img src="/images/assets/product-spearmint.png" height="60" alt="" /></li>' +
  '<li class="multi-loyalty-order__product multi-loyalty-order__product--more"><img class="multi-loyalty-order__product-img" src="/images/assets/product-spearmint.png" height="60" alt="" /><span class="multi-loyalty-order__product-additional">+10</span></li>' +
  '</ul>' +
  '<button type="button" class="multi-loyalty-order__add ui button primary small" data-multi-loyalty-order-select><span fieldname="lrp_multi_add_button_text">Add</span></button>' +
  '</div>' +
  '</li>' +
  '<li class="multi-loyalty-order__item">' +
  '<div class="multi-loyalty-order__primary">' +
  '<h5 class="multi-loyalty-order__date"><time datetime="2019-03-24">March 24</time></h5>' +
  '<div class="multi-loyalty-order__prices"><span class="multi-loyalty-order__price">$00.00</span><span class="multi-loyalty-order__pv"><span fieldname="product_pv_label">PV</span>00.00</span></div>' +
  '</div>' +
  '<div class="multi-loyalty-order__secondary">' +
  '<ul class="multi-loyalty-order__products">' +
  '<li class="multi-loyalty-order__product"><img src="/images/assets/product-spearmint.png" height="60" alt="" /></li>' +
  '<li class="multi-loyalty-order__product"><img src="/images/assets/product-spearmint.png" height="60" alt="" /></li>' +
  '<li class="multi-loyalty-order__product multi-loyalty-order__product--more"><img class="multi-loyalty-order__product-img" src="/images/assets/product-spearmint.png" height="60" alt="" /><span class="multi-loyalty-order__product-additional">+10</span></li>' +
  '</ul>' +
  '<button type="button" class="multi-loyalty-order__add ui button primary small" data-multi-loyalty-order-select><span fieldname="lrp_multi_add_button_text">Add</span></button>' +
  '</div>' +
  '</li>' +
  '<li class="multi-loyalty-order__item">' +
  '<div class="multi-loyalty-order__primary">' +
  '<h5 class="multi-loyalty-order__date"><time datetime="2019-03-24">March 24</time></h5>' +
  '<div class="multi-loyalty-order__prices"><span class="multi-loyalty-order__price">$00.00</span><span class="multi-loyalty-order__pv"><span fieldname="product_pv_label">PV</span>00.00</span></div>' +
  '</div>' +
  '<div class="multi-loyalty-order__secondary">' +
  '<ul class="multi-loyalty-order__products">' +
  '<li class="multi-loyalty-order__product"><img src="/images/assets/product-spearmint.png" height="60" alt="" /></li>' +
  '<li class="multi-loyalty-order__product"><img src="/images/assets/product-spearmint.png" height="60" alt="" /></li>' +
  '<li class="multi-loyalty-order__product multi-loyalty-order__product--more"><img class="multi-loyalty-order__product-img" src="/images/assets/product-spearmint.png" height="60" alt="" /><span class="multi-loyalty-order__product-additional">+10</span></li>' +
  '</ul>' +
  '<button type="button" class="multi-loyalty-order__add ui button primary small" data-multi-loyalty-order-select><span fieldname="lrp_multi_add_button_text">Add</span></button>' +
  '</div>' +
  '</li>' +
  '<li class="multi-loyalty-order__item">' +
  '<div class="multi-loyalty-order__primary">' +
  '<h5 class="multi-loyalty-order__date"><time datetime="2019-03-24">March 24</time></h5>' +
  '<div class="multi-loyalty-order__prices"><span class="multi-loyalty-order__price">$00.00</span><span class="multi-loyalty-order__pv"><span fieldname="product_pv_label">PV</span>00.00</span></div>' +
  '</div>' +
  '<div class="multi-loyalty-order__secondary">' +
  '<ul class="multi-loyalty-order__products">' +
  '<li class="multi-loyalty-order__product"><img src="/images/assets/product-spearmint.png" height="60" alt="" /></li>' +
  '<li class="multi-loyalty-order__product"><img src="/images/assets/product-spearmint.png" height="60" alt="" /></li>' +
  '<li class="multi-loyalty-order__product multi-loyalty-order__product--more"><img class="multi-loyalty-order__product-img" src="/images/assets/product-spearmint.png" height="60" alt="" /><span class="multi-loyalty-order__product-additional">+10</span></li>' +
  '</ul>' +
  '<button type="button" class="multi-loyalty-order__add ui button primary small" data-multi-loyalty-order-select><span fieldname="lrp_multi_add_button_text">Add</span></button>' +
  '</div>' +
  '</li>' +
  '<li class="multi-loyalty-order__item">' +
  '<div class="multi-loyalty-order__primary">' +
  '<h5 class="multi-loyalty-order__date"><time datetime="2019-03-24">March 24</time></h5>' +
  '<div class="multi-loyalty-order__prices"><span class="multi-loyalty-order__price">$00.00</span><span class="multi-loyalty-order__pv"><span fieldname="product_pv_label">PV</span>00.00</span></div>' +
  '</div>' +
  '<div class="multi-loyalty-order__secondary">' +
  '<ul class="multi-loyalty-order__products">' +
  '<li class="multi-loyalty-order__product"><img src="/images/assets/product-spearmint.png" height="60" alt="" /></li>' +
  '<li class="multi-loyalty-order__product"><img src="/images/assets/product-spearmint.png" height="60" alt="" /></li>' +
  '<li class="multi-loyalty-order__product multi-loyalty-order__product--more"><img class="multi-loyalty-order__product-img" src="/images/assets/product-spearmint.png" height="60" alt="" /><span class="multi-loyalty-order__product-additional">+10</span></li>' +
  '</ul>' +
  '<button type="button" class="multi-loyalty-order__add ui button primary small" data-multi-loyalty-order-select><span fieldname="lrp_multi_add_button_text">Add</span></button>' +
  '</div>' +
  '</li>' +
  '</ul>' +
  '</div>';

var ADD_TO_LOYALTY_HTML = '<div class="product__overlay-panel product__overlay-panel-loyalty-added">' +
  '<span class="product__overlay-icon icon--loyalty-order icon--brand icon--lg"></span>' +
  '<div class="product__overlay-title"><span fieldname="product_added_to_loyalty_text">Added to Loyalty</span><br>Aug 19</div>' +
  '<a href="#" class="product__overlay-link"><span fieldname="product_manage_loyalty_link_text">Manage Loyalty</span></a>' +
  '</div>';

var LRP_PRODUCT_CARD_HTML =
  '<div class="product product-lrp">' +
  '<div class="product__overlay" data-js-product-interaction-overlay=""></div>' +
  '<div class="product-lrp__details-info">' +
  '<span fieldname="lrp_monthly_label">Monthly item</span>' +
  "</div>" +
  '<div class="product-lrp__inner">' +
  '<div class="bag__loader bag__loader--inner" data-bag-loader>' +
  '<span class="icon--loader a-rotate"></span>' +
  "</div>" +
  '<div class="product__actions product__actions--rmv-btn" data-js-lrp-remove-product>' +
  '<span class="u--visuallyhidden">Remove this product</span>' +
  '<span class="icon--cross icon--sm"></span>' +
  "</div>" +
  '<div class="product-lrp__image">' +
  '<img fieldname="product_thumbnail" src="/images/assets/product-breathe-thumbnail.png" alt="Lemon Spray">' +
  "</div>" +
  '<div class="product-lrp__details"><h3 class="product-lrp__title">' +
  '<span fieldname="product_name">Lemon Spray</span>' +
  "</h3>" +
  '<div class="product-lrp__size"><span fieldname="product_volume">15ml</span></div>' +
  '<div class="product-lrp__price">' +
  '<span fieldname="product_currency">$</span>100.00' +
  "</div>" +
  "</div>" +
  '<div class="product-lrp__footer">' +
  '<div class="quantity-field quantity-field--fluid">' +
  '<label class="u--visuallyhidden">Quantity</label>' +
  '<button type="button" class="quantity-field__button quantity-field__button--decrement" data-js-bag-inc-down-product-lrp>' +
  '<span class="u--visuallyhidden">Add 1</span>' +
  '<i class="icon--minus"></i>' +
  "</button>" +
  '<input class="quantity-field__input" type="text" value="1" name="quantity">' +
  '<button type="button" class="quantity-field__button quantity-field__button--increment" data-js-bag-inc-up-product-lrp>' +
  '<span class="u--visuallyhidden">Remove 1</span>' +
  '<i class="icon--add"></i>' +
  "</button>" +
  "</div>" +
  "</div>" +
  '<div class="product-lrp__points">' +
  '<div class="product-lrp__points-inner">' +
  '<div class="product-lrp__points-content product-lrp__points-content--heading">' +
  '<h4 class="product-lrp__points-title"><span fieldname="lrp_pwp_label">Purchase with points?</span></h4>' +
  "</div>" +
  '<div class="product-lrp__quantity quantity-field">' +
  '<label class="u--visuallyhidden">Quantity</label>' +
  '<button type="button" class="quantity-field__button quantity-field__button--decrement">' +
  '<span class="u--visuallyhidden">Add 1</span>' +
  '<i class="icon--minus"></i>' +
  "</button>" +
  '<input class="quantity-field__input" type="text" value="0">' +
  '<button type="button" class="quantity-field__button quantity-field__button--increment">' +
  '<span class="u--visuallyhidden">Remove 1</span>' +
  '<i class="icon--add"></i>' +
  "</button>" +
  "</div>" +
  '<div class="product-lrp__points-content">' +
  '<p class="product-lrp__points-note"><span fieldname="lrp_pwp_used_label">Points used</span>: <strong>0.00</strong></p>' +
  "</div>" +
  "</div>" +
  "</div>" +
  "</div>" +
  "</div>";

var ADD_TO_ORDER_HTML = '<div class="product__overlay-panel product__overlay-panel--order-added">' +
  '<span class="product__overlay-icon icon--bag-fill icon--brand icon--lg"></span>' +
  '<div class="product__overlay-title"><span fieldname="enroll_added_text">Added to Order</span></div>' +
  '<a href="#" class="product__overlay-link"><span fieldname="enroll_view_order_text">View Order</span></a>' +
  '</div>';

// Notifications

var NOTIFICATION_DANGER = '<div class="ui message notification notification--danger" style="display:none;">' +
  '<div class="ui middle aligned stackable container">' +
  '<div class="row">' +
  '<div class="twelve wide column">' +
  '<i class="notification__close icon--cross icon--md" data-js-notification-close></i>' +
  '<i class="notification__icon icon--error-fill icon--xs"></i>' +
  '<div class="notification__copy">This is an urgent error message that the user must action or dismiss. <a class="notification__cta" href="#">CTA for action</a></div>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</div>';

var NOTIFICATION_WARNING = '<div class="ui message notification notification--warning" style="display:none;">' +
  '<div class="ui middle aligned stackable container">' +
  '<div class="row">' +
  '<div class="twelve wide column">' +
  '<i class="notification__close icon--cross icon--md" data-js-notification-close></i>' +
  '<i class="notification__icon icon--error-fill icon--xs"></i>' +
  '<div class="notification__copy">This is a warning message, not quite as urgent. <a class="notification__cta" href="#">CTA for action if needed</a>.</div>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</div>';

var NOTIFICATION_SUCCESS = '<div class="ui message notification notification--success" style="display:none;">' +
  '<div class="ui middle aligned stackable container">' +
  '<div class="row">' +
  '<div class="twelve wide column">' +
  '<i class="notification__close icon--cross icon--md" data-js-notification-close></i>' +
  '<i class="notification__icon icon--tick-circle-fill icon--xs"></i>' +
  '<div class="notification__copy">Success message. YEY!</div>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</div>';

var NOTIFICATION_INFO = '<div class="ui message notification notification--info" style="display:none;">' +
  '<div class="ui middle aligned stackable container">' +
  '<div class="row">' +
  '<div class="twelve wide column">' +
  '<i class="notification__close icon--cross icon--md" data-js-notification-close></i>' +
  '<i class="notification__icon icon--alert-circle-fill icon--xs"></i>' +
  '<div class="notification__copy">This is just a general notification</div>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</div>';

var NOTIFICATION_ORDER_LIMIT = '<div class="ui message notification notification--danger" style="display:none;">' +
  '<div class="ui middle aligned stackable container">' +
  '<div class="row">' +
  '<div class="twelve wide column">' +
  '<i class="notification__close icon--cross icon--md" data-js-notification-close></i>' +
  '<i class="notification__icon icon--error-fill icon--xs"></i>' +
  '<div class="notification__copy"><p><span fieldname="global_order_limit_error">You have exceeded the &pound;250.00 limit on your order, please check and remove some items before continuing</span></p> <a class="notification__cta" href="#" data-js-update-products-link><span fieldname="global_order_limit_error_button_text">Update Products</span></a></div>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</div>';
var NOTIFICATION_CHECKOUT_ORDER_LIMIT = '<div class="ui message notification notification--danger" style="display:none;">' +
  '<div class="ui middle aligned stackable container">' +
  '<div class="row">' +
  '<div class="twelve wide column">' +
  '<i class="notification__close icon--cross icon--md" data-js-notification-close></i>' +
  '<i class="notification__icon icon--error-fill icon--xs"></i>' +
  '<div class="notification__copy"><p><span fieldname="global_order_limit_error">You have exceeded the &pound;250.00 limit on your order, please check and remove some items before continuing</span></p> <a class="notification__cta" href="in-page-alerts-bag.html"><span fieldname="global_order_limit_error_bag_button_text">Update Bag</span></a></div>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</div>';

var PAYMENT_METHOD_CARD = '<li class="row-select__item is-checked">' +
  '<div class="row-select__inner">' +
  '<div class="row-select__field">' +
  '<div class="form-check-label form-check-label--flush">' +
  '<input type="radio" class="row-select__input form-check-input" name="payment-options" id="payment-method-card" checked="checked">' +
  '<span class="radiomark radiomark--flush"></span>' +
  '</div>' +
  '</div>' +
  '<dl class="row-select__content">' +
  '<dt class="row-select__title">' +
  '<label for="payment-method-card" class="row-select__label">' +
  '<span fieldname="checkout_payment_debit">Debit Card</span>' +
  '</label>' +
  '</dt>' +
  '<dd class="row-select__desc"><span class="row-select__desc--primary">**** **** **** 1234</span> <span class="row-select__desc--secondary"><span class="u--visuallyhidden-sm">EXP </span>10/21</span></dd>' +
  '<dd class="row-select__note"><span fieldname="checkout_delivery_address_default">Default</span></dd>' +
  '<dd class="row-select__icon"><i class="icon--payment-mastercard icon--xl"></i></dd>' +
  '</dl>' +
  '<button type="button" class="row-select__button" data-js-edit-payment-method="">' +
  '<i class="icon--edit icon--md"></i><span class="u--visuallyhidden">Edit payment method</span>' +
  '</button>' +
  '</div>' +
  '</li>';

var PAYMENT_METHOD_DIRECT_DEBIT = '<li class="row-select__item is-checked">' +
  '<div class="row-select__inner">' +
  '<div class="row-select__field">' +
  '<div class="form-check-label form-check-label--flush">' +
  '<input type="radio" class="row-select__input form-check-input" name="payment-options" id="payment-method-dd" checked="checked">' +
  '<span class="radiomark radiomark--flush"></span>' +
  '</div>' +
  '</div>' +
  '<dl class="row-select__content">' +
  '<dt class="row-select__title">' +
  '<label for="payment-method-dd" class="row-select__label"><span fieldname="checkout_payment_dd">Direct Debit</span>' +
  '</label></dt>' +
  '<dd class="row-select__desc"><span class="row-select__desc--primary"><span class="u--visuallyhidden-sm">Acct #: </span>1234 5678</span> <span class="row-select__desc--secondary"><span class="u--visuallyhidden-sm">Sort: </span>01-02-33</span></dd>' +
  '<dd class="row-select__icon"><i class="icon--direct-debit icon--xl"></i></dd>' +
  '</dl>' +
  '<button type="button" class="row-select__button" data-js-edit-payment-method-dd="">' +
  '<i class="icon--edit icon--md"></i><span class="u--visuallyhidden">Edit payment method</span>' +
  '</button>' +
  '</div>' +
  '</li>';

var PAYMENT_METHOD_WIRE = '<li class="row-select__item is-checked">' +
  '<div class="row-select__inner">' +
  '<div class="row-select__field">' +
  '<div class="form-check-label form-check-label--flush">' +
  '<input type="radio" class="row-select__input form-check-input" name="payment-options" id="payment-method-wire" value="wire" checked="checked">' +
  '<span class="radiomark radiomark--flush"></span>' +
  '</div>' +
  '</div>' +
  '<dl class="row-select__content">' +
  '<dt class="row-select__title">' +
  '<label for="payment-method-wire" class="row-select__label"><span fieldname="checkout_payment_wire">Wire Transfer</span></label>' +
  '</dt>' +
  '<dd class="row-select__icon"><i class="icon--transfer icon--xl"></i></dd>' +
  '</dl>' +
  '<a href="#" class="row-select__hideshow-btn" data-js-payment-title-details-btn="">' +
  '<span class="row-select__btn-show" fieldname="checkout_payment_wire_show_details" data-js-payment-title-details-btn-show="">Show details</span>' +
  '<span class="row-select__btn-hide" fieldname="checkout_payment_wire_hide_details" data-js-payment-title-details-btn-hide="">Hide details</span>' +
  '</a>' +
  '<button type="button" class="row-select__button" data-js-edit-payment-method-wire-transfer="">' +
  '<i class="icon--edit icon--md"></i><span class="u--visuallyhidden">Edit payment method</span>' +
  '</button>' +
  '</div>' +
  '<div class="row-select__inner row-select__hideshow-panel" data-js-payment-title-details-panel="">' +
  '<div class="wire-transfer__items">' +
  '<dl class="wire-transfer__details">' +
  '<dt class="wire-transfer__title" fieldname="checkout_wire_bank_name_label">Bank name:</dt>' +
  '<dd class="wire-transfer__desc" fieldname="checkout_wire_bank_name_value">JPMorgan Chase</dd>' +
  '<dt class="wire-transfer__title" fieldname="checkout_wire_bank_address_label">Bank address:</dt>' +
  '<dd class="wire-transfer__desc" fieldname="checkout_wire_bank_address_value">' +
  '25 Bank Street,<br>' +
  'London, E14 5JP' +
  '</dd>' +
  '</dl>' +
  '<dl class="wire-transfer__details">' +
  '<dt class="wire-transfer__title" fieldname="checkout_wire_receiver_label">Receiver:</dt>' +
  '<dd class="wire-transfer__desc" fieldname="checkout_wire_receiver_value_1">CHASGB2L</dd>' +
  '<dt class="wire-transfer__title" fieldname="checkout_wire_swift_bic_label">SWIFT/BIC-Code:</dt>' +
  '<dd class="wire-transfer__desc" fieldname="checkout_wire_swift_bic_value">CHASGB2L</dd>' +
  '<dt class="wire-transfer__title" fieldname="checkout_wire_iban_label">IBAN#:</dt>' +
  '<dd class="wire-transfer__desc" fieldname="checkout_wire_iban_value">GB15CHAS60924241214314</dd>' +
  '</dl>' +
  '<dl class="wire-transfer__details">' +
  '<dt class="wire-transfer__title" fieldname="checkout_wire_receiver_label">Receiver:</dt>' +
  '<dd class="wire-transfer__desc" fieldname="checkout_wire_receiver_value_2">DOTERRA EUROPE LTD</dd>' +
  '<dt class="wire-transfer__title" fieldname="checkout_wire_amount_label">Amount:</dt>' +
  '<dd class="wire-transfer__desc">$98.30</dd>' +
  '<dt class="wire-transfer__title" fieldname="checkout_wire_reference_label">Reference#:</dt>' +
  '<dd class="wire-transfer__desc">60005140</dd>' +
  '</dl>' +
  '</div>' +
  '</div>' +
  '</li>';

var PROMO_CODE_ORDER_SUMMARY_ERROR = '<div class="form__alert alert alert--danger">' +
  '<i class="alert__icon icon--error-fill-danger icon--sm"></i>' +
  '<span>{promocode}<span fieldname="checkout_order_summary_promo_error"> Invalid Promo</span>' +
  '</span>' +
  '</div>';

var PROMO_CODE_ORDER_SUMMARY_ROW = '<dt class="order-summary__title order-summary--promo" style="display: block;"><span fieldname="checkout_order_summary_promo">Promo</span> <span class="order-summary__promo-code" data-js-order-summary-promo-code="">FR££SHIP</span>:</dt><dd class="order-summary__value order-summary--promo" style="display: block;">-£9.00</dd>';

var PROMO_CODE_ORDER_SUMMARY_ROW_MOBILE = "<dt class='order-summary__title order-summary--promo' style='display: block;'>" +
  "<span fieldname='checkout_order_summary_promo'>Promo</span> " +
  "<span class='order-summary__promo-code' data-js-order-summary-promo-code=''>FR££SHIP</span>:</dt>" +
  "<dd class='order-summary__value order-summary--promo' style='display: block;'>-£9.00</dd>";
