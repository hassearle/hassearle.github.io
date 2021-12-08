/**
 * ------------------------------------------------------------------------
 * Dropdown
 * ------------------------------------------------------------------------
 */

$(function() {

  $('.ui.dropdown').dropdown();

  $('.ui.dropdown.sort__dropdown')
    .dropdown({
      transition: "fade",
      action: "select",
      onShow: function() {
        $(".js-filter").removeClass('active');
        $(".js-filter").siblings('.dropdown-menu').removeClass('show');

        var menuHeight = $(this).find(".menu").height();
        $(this).find(".menu").css("height", menuHeight);
      },
      onChange: function(value, text, $selectedItem) {
        $(this).find(".item.selected").removeClass("selected");
        $selectedItem.addClass("selected");
        // Add the selected text to the dropdown
        $(this).find(".text").html("<strong>Sort</strong> (1)");

      }
    });

  $('.ui.dropdown.dropdown--fx').dropdown({
    onShow: function() {
      $(this).find('.dropdown__icon').addClass('dropdown__icon--active');
    },
    onChange: function(value, text, $selectedItem) {},
    onHide: function() {
      $(this).find('.dropdown__icon').removeClass('dropdown__icon--active');
    }
  });

  // Account Tel Number Type dropdown < fill stateArray w home item
  var stateArray = [{
    itemValue: "home",
    itemValueCap: "Home",
  }];

  $('.ui.dropdown.tel-add__dropdown').dropdown({
    transition: "fade",
    onShow: function() {
      $(this).find('.dropdown__icon').addClass('dropdown__icon--active');
    },
    onChange: function(value, text, $selectedItem) {
      $(this).find(".item.selected").removeClass("selected");
      $(this).find(".dropdown__active-tick").remove();
      $selectedItem.addClass("selected").append('<span class="icon--tick icon--md dropdown__active-tick"></span>');

      var $addBtn = $(this).parent().find('[data-js-add-tel-number]');
      $addBtn.removeClass('disabled');
    },
    onHide: function() {
      $(this).find('.dropdown__icon').removeClass('dropdown__icon--active');
    },
  });

  function NumberItem(value) {
    this.itemValue = value;
    this.itemValueCap = value.substr(0, 1).toUpperCase() + value.substr(1);
    this.countryCodeMarkup = "<div class='five wide field'> <div class='ui fluid search dropdown dropdown--fx' data-dynamic-dropdown> <input type='hidden' name='country' class='dropdown__hidden'> <i class='dropdown__icon icon--arrow-down icon--md'></i> <input class='search' autocomplete='off' tabindex='0'><div class='default text dropdown__text'> <span fieldname='account_mydetails_phone_country_select_label'>Country Code</span> </div><div class='menu dropdown__menu' tabindex='-1'> <div class='item dropdown__menu-item' data-value='+1' title='US and Canada' fieldname='country_dial_code_US'>US / CA (+1)</div><div class='item dropdown__menu-item' data-value='+44' title='UK' fieldname='country_dial_code_UK'>UK (+44)</div><div class='item dropdown__menu-item' data-value='+33' title='France' fieldname='country_dial_code_FR'>FR (+33)</div><div class='item dropdown__menu-item' data-value='+49' title='Germany' fieldname='country_dial_code_DE'>DE (+49)</div><div class='item dropdown__menu-item' data-value='+39' title='Italy' fieldname='country_dial_code_IT'>IT (+39)</div><div class='item dropdown__menu-item' data-value='+34' title='Spain' fieldname='country_dial_code_ES'>ES (+34)</div><div class='ui divider dropdown__divider'></div><div class='item dropdown__menu-item' data-value='+93' title='Afghanistan' fieldname='country_dial_code_AF'>AF (+93)</div><div class='item dropdown__menu-item' data-value='+355' title='Albania' fieldname='country_dial_code_AL'>AL (+355)</div><div class='item dropdown__menu-item' data-value='+213' title='Algeria' fieldname='country_dial_code_DZ'>DZ (+213)</div><div class='item dropdown__menu-item' data-value='+1-684' title='American Samoa' fieldname='country_dial_code_AS'>AS (+1-684)</div><div class='item dropdown__menu-item' data-value='+376' title='Andorra' fieldname='country_dial_code_AD'>AD (+376)</div><div class='item dropdown__menu-item' data-value='+244' title='Angola' fieldname='country_dial_code_AO'>AO (+244)</div><div class='item dropdown__menu-item' data-value='+1-264' title='Anguilla' fieldname='country_dial_code_AI'>AI (+1-264)</div><div class='item dropdown__menu-item' data-value='+672' title='Antarctica' fieldname='country_dial_code_AQ'>AQ (+672)</div><div class='item dropdown__menu-item' data-value='+1-268' title='Antigua &amp; Barbuda' fieldname='country_dial_code_AG'>AG (+1-268)</div><div class='item dropdown__menu-item' data-value='+54' title='Argentina' fieldname='country_dial_code_AR'>AR (+54)</div><div class='item dropdown__menu-item' data-value='+374' title='Armenia' fieldname='country_dial_code_AM'>AM (+374)</div><div class='item dropdown__menu-item' data-value='+297' title='Aruba' fieldname='country_dial_code_AW'>AW (+297)</div><div class='item dropdown__menu-item' data-value='+61' title='Australia' fieldname='country_dial_code_AU'>AU (+61)</div><div class='item dropdown__menu-item' data-value='+43' title='Austria' fieldname='country_dial_code_AT'>AT (+43)</div><div class='item dropdown__menu-item' data-value='+994' title='Azerbaijan' fieldname='country_dial_code_AZ'>AZ (+994)</div><div class='item dropdown__menu-item' data-value='+1-242' title='Bahamas' fieldname='country_dial_code_BS'>BS (+1-242)</div><div class='item dropdown__menu-item' data-value='+973' title='Bahrain' fieldname='country_dial_code_BH'>BH (+973)</div><div class='item dropdown__menu-item' data-value='+880' title='Bangladesh' fieldname='country_dial_code_BD'>BD (+880)</div><div class='item dropdown__menu-item' data-value='+1-246' title='Barbados' fieldname='country_dial_code_BB'>BB (+1-246)</div><div class='item dropdown__menu-item' data-value='+375' title='Belarus' fieldname='country_dial_code_BY'>BY (+375)</div><div class='item dropdown__menu-item' data-value='+32' title='Belgium' fieldname='country_dial_code_BE'>BE (+32)</div><div class='item dropdown__menu-item' data-value='+501' title='Belize' fieldname='country_dial_code_BZ'>BZ (+501)</div><div class='item dropdown__menu-item' data-value='+229' title='Benin' fieldname='country_dial_code_BJ'>BJ (+229)</div><div class='item dropdown__menu-item' data-value='+1-441' title='Bermuda' fieldname='country_dial_code_BM'>BM (+1-441)</div><div class='item dropdown__menu-item' data-value='+975' title='Bhutan' fieldname='country_dial_code_BT'>BT (+975)</div><div class='item dropdown__menu-item' data-value='+591' title='Bolivia' fieldname='country_dial_code_BO'>BO (+591)</div><div class='item dropdown__menu-item' data-value='+387' title='Bosnia' fieldname='country_dial_code_BA'>BA (+387)</div><div class='item dropdown__menu-item' data-value='+267' title='Botswana' fieldname='country_dial_code_BW'>BW (+267)</div><div class='item dropdown__menu-item' data-value='+47' title='Bouvet Island' fieldname='country_dial_code_BV'>BV (+47)</div><div class='item dropdown__menu-item' data-value='+55' title='Brazil' fieldname='country_dial_code_BR'>BR (+55)</div><div class='item dropdown__menu-item' data-value='+246' title='British Indian Ocean Territory' fieldname='country_dial_code_IO'>IO (+246)</div><div class='item dropdown__menu-item' data-value='+1-284' title='British Virgin Islands' fieldname='country_dial_code_VG'>VG (+1-284)</div><div class='item dropdown__menu-item' data-value='+673' title='Brunei' fieldname='country_dial_code_BN'>BN (+673)</div><div class='item dropdown__menu-item' data-value='+359' title='Bulgaria' fieldname='country_dial_code_BG'>BG (+359)</div><div class='item dropdown__menu-item' data-value='+226' title='Burkina Faso' fieldname='country_dial_code_BF'>BF (+226)</div><div class='item dropdown__menu-item' data-value='+257' title='Burundi' fieldname='country_dial_code_BI'>BI (+257)</div><div class='item dropdown__menu-item' data-value='+855' title='Cambodia' fieldname='country_dial_code_KH'>KH (+855)</div><div class='item dropdown__menu-item' data-value='+237' title='Cameroon' fieldname='country_dial_code_CM'>CM (+237)</div><div class='item dropdown__menu-item' data-value='+238' title='Cape Verde' fieldname='country_dial_code_CV'>CV (+238)</div><div class='item dropdown__menu-item' data-value='+599' title='Caribbean Netherlands' fieldname='country_dial_code_BQ'>BQ (+599)</div><div class='item dropdown__menu-item' data-value='+1-345' title='Cayman Islands' fieldname='country_dial_code_KY'>KY (+1-345)</div><div class='item dropdown__menu-item' data-value='+236' title='Central African Republic' fieldname='country_dial_code_CF'>CF (+236)</div><div class='item dropdown__menu-item' data-value='+235' title='Chad' fieldname='country_dial_code_TD'>TD (+235)</div><div class='item dropdown__menu-item' data-value='+56' title='Chile' fieldname='country_dial_code_CL'>CL (+56)</div><div class='item dropdown__menu-item' data-value='+86' title='China' fieldname='country_dial_code_CN'>CN (+86)</div><div class='item dropdown__menu-item' data-value='+61' title='Christmas Island' fieldname='country_dial_code_CX'>CX (+61)</div><div class='item dropdown__menu-item' data-value='+61' title='Cocos (Keeling) Islands' fieldname='country_dial_code_CC'>CC (+61)</div><div class='item dropdown__menu-item' data-value='+57' title='Colombia' fieldname='country_dial_code_CO'>CO (+57)</div><div class='item dropdown__menu-item' data-value='+269' title='Comoros' fieldname='country_dial_code_KM'>KM (+269)</div><div class='item dropdown__menu-item' data-value='+242' title='Congo - Brazzaville' fieldname='country_dial_code_CG'>CG (+242)</div><div class='item dropdown__menu-item' data-value='+243' title='Congo - Kinshasa' fieldname='country_dial_code_CD'>CD (+243)</div><div class='item dropdown__menu-item' data-value='+682' title='Cook Islands' fieldname='country_dial_code_CK'>CK (+682)</div><div class='item dropdown__menu-item' data-value='+506' title='Costa Rica' fieldname='country_dial_code_CR'>CR (+506)</div><div class='item dropdown__menu-item' data-value='+385' title='Croatia' fieldname='country_dial_code_HR'>HR (+385)</div><div class='item dropdown__menu-item' data-value='+53' title='Cuba' fieldname='country_dial_code_CU'>CU (+53)</div><div class='item dropdown__menu-item' data-value='+599' title='Cura√ßao' fieldname='country_dial_code_CW'>CW (+599)</div><div class='item dropdown__menu-item' data-value='+357' title='Cyprus' fieldname='country_dial_code_CY'>CY (+357)</div><div class='item dropdown__menu-item' data-value='+420' title='Czech Republic' fieldname='country_dial_code_CZ'>CZ (+420)</div><div class='item dropdown__menu-item' data-value='+225' title='Cote d'Ivoire' fieldname='country_dial_code_CI'>CI (+225)</div><div class='item dropdown__menu-item' data-value='+45' title='Denmark' fieldname='country_dial_code_DK'>DK (+45)</div><div class='item dropdown__menu-item' data-value='+253' title='Djibouti' fieldname='country_dial_code_DJ'>DJ (+253)</div><div class='item dropdown__menu-item' data-value='+1-767' title='Dominica' fieldname='country_dial_code_DM'>DM (+1-767)</div><div class='item dropdown__menu-item' data-value='+1-809,1-829,1-849' title='Dominican Republic' fieldname='country_dial_code_DO'>DO (+1-809,1-829,1-849)</div><div class='item dropdown__menu-item' data-value='+593' title='Ecuador' fieldname='country_dial_code_EC'>EC (+593)</div><div class='item dropdown__menu-item' data-value='+20' title='Egypt' fieldname='country_dial_code_EG'>EG (+20)</div><div class='item dropdown__menu-item' data-value='+503' title='El Salvador' fieldname='country_dial_code_SV'>SV (+503)</div><div class='item dropdown__menu-item' data-value='+240' title='Equatorial Guinea' fieldname='country_dial_code_GQ'>GQ (+240)</div><div class='item dropdown__menu-item' data-value='+291' title='Eritrea' fieldname='country_dial_code_ER'>ER (+291)</div><div class='item dropdown__menu-item' data-value='+372' title='Estonia' fieldname='country_dial_code_EE'>EE (+372)</div><div class='item dropdown__menu-item' data-value='+251' title='Ethiopia' fieldname='country_dial_code_ET'>ET (+251)</div><div class='item dropdown__menu-item' data-value='+500' title='Falkland Islands' fieldname='country_dial_code_FK'>FK (+500)</div><div class='item dropdown__menu-item' data-value='+298' title='Faroe Islands' fieldname='country_dial_code_FO'>FO (+298)</div><div class='item dropdown__menu-item' data-value='+679' title='Fiji' fieldname='country_dial_code_FJ'>FJ (+679)</div><div class='item dropdown__menu-item' data-value='+358' title='Finland' fieldname='country_dial_code_FI'>FI (+358)</div><div class='item dropdown__menu-item' data-value='+594' title='French Guiana' fieldname='country_dial_code_GF'>GF (+594)</div><div class='item dropdown__menu-item' data-value='+689' title='French Polynesia' fieldname='country_dial_code_PF'>PF (+689)</div><div class='item dropdown__menu-item' data-value='+262' title='French Southern Territories' fieldname='country_dial_code_TF'>TF (+262)</div><div class='item dropdown__menu-item' data-value='+241' title='Gabon' fieldname='country_dial_code_GA'>GA (+241)</div><div class='item dropdown__menu-item' data-value='+220' title='Gambia' fieldname='country_dial_code_GM'>GM (+220)</div><div class='item dropdown__menu-item' data-value='+995' title='Georgia' fieldname='country_dial_code_GE'>GE (+995)</div><div class='item dropdown__menu-item' data-value='+233' title='Ghana' fieldname='country_dial_code_GH'>GH (+233)</div><div class='item dropdown__menu-item' data-value='+350' title='Gibraltar' fieldname='country_dial_code_GI'>GI (+350)</div><div class='item dropdown__menu-item' data-value='+30' title='Greece' fieldname='country_dial_code_GR'>GR (+30)</div><div class='item dropdown__menu-item' data-value='+299' title='Greenland' fieldname='country_dial_code_GL'>GL (+299)</div><div class='item dropdown__menu-item' data-value='+1-473' title='Grenada' fieldname='country_dial_code_GD'>GD (+1-473)</div><div class='item dropdown__menu-item' data-value='+590' title='Guadeloupe' fieldname='country_dial_code_GP'>GP (+590)</div><div class='item dropdown__menu-item' data-value='+1-671' title='Guam' fieldname='country_dial_code_GU'>GU (+1-671)</div><div class='item dropdown__menu-item' data-value='+502' title='Guatemala' fieldname='country_dial_code_GT'>GT (+502)</div><div class='item dropdown__menu-item' data-value='+224' title='Guinea' fieldname='country_dial_code_GN'>GN (+224)</div><div class='item dropdown__menu-item' data-value='+245' title='Guinea-Bissau' fieldname='country_dial_code_GW'>GW (+245)</div><div class='item dropdown__menu-item' data-value='+592' title='Guyana' fieldname='country_dial_code_GY'>GY (+592)</div><div class='item dropdown__menu-item' data-value='+509' title='Haiti' fieldname='country_dial_code_HT'>HT (+509)</div><div class='item dropdown__menu-item' data-value='+672' title='Heard &amp; McDonald Islands' fieldname='country_dial_code_HM'>HM (+672)</div><div class='item dropdown__menu-item' data-value='+504' title='Honduras' fieldname='country_dial_code_HN'>HN (+504)</div><div class='item dropdown__menu-item' data-value='+852' title='Hong Kong' fieldname='country_dial_code_HK'>HK (+852)</div><div class='item dropdown__menu-item' data-value='+36' title='Hungary' fieldname='country_dial_code_HU'>HU (+36)</div><div class='item dropdown__menu-item' data-value='+354' title='Iceland' fieldname='country_dial_code_IS'>IS (+354)</div><div class='item dropdown__menu-item' data-value='+91' title='India' fieldname='country_dial_code_IN'>IN (+91)</div><div class='item dropdown__menu-item' data-value='+62' title='Indonesia' fieldname='country_dial_code_ID'>ID (+62)</div><div class='item dropdown__menu-item' data-value='+98' title='Iran' fieldname='country_dial_code_IR'>IR (+98)</div><div class='item dropdown__menu-item' data-value='+964' title='Iraq' fieldname='country_dial_code_IQ'>IQ (+964)</div><div class='item dropdown__menu-item' data-value='+353' title='Ireland' fieldname='country_dial_code_IE'>IE (+353)</div><div class='item dropdown__menu-item' data-value='+972' title='Israel' fieldname='country_dial_code_IL'>IL (+972)</div><div class='item dropdown__menu-item' data-value='+1-876' title='Jamaica' fieldname='country_dial_code_JM'>JM (+1-876)</div><div class='item dropdown__menu-item' data-value='+81' title='Japan' fieldname='country_dial_code_JP'>JP (+81)</div><div class='item dropdown__menu-item' data-value='+962' title='Jordan' fieldname='country_dial_code_JO'>JO (+962)</div><div class='item dropdown__menu-item' data-value='+7' title='Kazakhstan' fieldname='country_dial_code_KZ'>KZ (+7)</div><div class='item dropdown__menu-item' data-value='+254' title='Kenya' fieldname='country_dial_code_KE'>KE (+254)</div><div class='item dropdown__menu-item' data-value='+686' title='Kiribati' fieldname='country_dial_code_KI'>KI (+686)</div><div class='item dropdown__menu-item' data-value='+965' title='Kuwait' fieldname='country_dial_code_KW'>KW (+965)</div><div class='item dropdown__menu-item' data-value='+996' title='Kyrgyzstan' fieldname='country_dial_code_KG'>KG (+996)</div><div class='item dropdown__menu-item' data-value='+856' title='Laos' fieldname='country_dial_code_LA'>LA (+856)</div><div class='item dropdown__menu-item' data-value='+371' title='Latvia' fieldname='country_dial_code_LV'>LV (+371)</div><div class='item dropdown__menu-item' data-value='+961' title='Lebanon' fieldname='country_dial_code_LB'>LB (+961)</div><div class='item dropdown__menu-item' data-value='+266' title='Lesotho' fieldname='country_dial_code_LS'>LS (+266)</div><div class='item dropdown__menu-item' data-value='+231' title='Liberia' fieldname='country_dial_code_LR'>LR (+231)</div><div class='item dropdown__menu-item' data-value='+218' title='Libya' fieldname='country_dial_code_LY'>LY (+218)</div><div class='item dropdown__menu-item' data-value='+423' title='Liechtenstein' fieldname='country_dial_code_LI'>LI (+423)</div><div class='item dropdown__menu-item' data-value='+370' title='Lithuania' fieldname='country_dial_code_LT'>LT (+370)</div><div class='item dropdown__menu-item' data-value='+352' title='Luxembourg' fieldname='country_dial_code_LU'>LU (+352)</div><div class='item dropdown__menu-item' data-value='+853' title='Macau' fieldname='country_dial_code_MO'>MO (+853)</div><div class='item dropdown__menu-item' data-value='+389' title='Macedonia' fieldname='country_dial_code_MK'>MK (+389)</div><div class='item dropdown__menu-item' data-value='+261' title='Madagascar' fieldname='country_dial_code_MG'>MG (+261)</div><div class='item dropdown__menu-item' data-value='+265' title='Malawi' fieldname='country_dial_code_MW'>MW (+265)</div><div class='item dropdown__menu-item' data-value='+60' title='Malaysia' fieldname='country_dial_code_MY'>MY (+60)</div><div class='item dropdown__menu-item' data-value='+960' title='Maldives' fieldname='country_dial_code_MV'>MV (+960)</div><div class='item dropdown__menu-item' data-value='+223' title='Mali' fieldname='country_dial_code_ML'>ML (+223)</div><div class='item dropdown__menu-item' data-value='+356' title='Malta' fieldname='country_dial_code_MT'>MT (+356)</div><div class='item dropdown__menu-item' data-value='+692' title='Marshall Islands' fieldname='country_dial_code_MH'>MH (+692)</div><div class='item dropdown__menu-item' data-value='+596' title='Martinique' fieldname='country_dial_code_MQ'>MQ (+596)</div><div class='item dropdown__menu-item' data-value='+222' title='Mauritania' fieldname='country_dial_code_MR'>MR (+222)</div><div class='item dropdown__menu-item' data-value='+230' title='Mauritius' fieldname='country_dial_code_MU'>MU (+230)</div><div class='item dropdown__menu-item' data-value='+262' title='Mayotte' fieldname='country_dial_code_YT'>YT (+262)</div><div class='item dropdown__menu-item' data-value='+52' title='Mexico' fieldname='country_dial_code_MX'>MX (+52)</div><div class='item dropdown__menu-item' data-value='+691' title='Micronesia' fieldname='country_dial_code_FM'>FM (+691)</div><div class='item dropdown__menu-item' data-value='+373' title='Moldova' fieldname='country_dial_code_MD'>MD (+373)</div><div class='item dropdown__menu-item' data-value='+377' title='Monaco' fieldname='country_dial_code_MC'>MC (+377)</div><div class='item dropdown__menu-item' data-value='+976' title='Mongolia' fieldname='country_dial_code_MN'>MN (+976)</div><div class='item dropdown__menu-item' data-value='+382' title='Montenegro' fieldname='country_dial_code_ME'>ME (+382)</div><div class='item dropdown__menu-item' data-value='+1-664' title='Montserrat' fieldname='country_dial_code_MS'>MS (+1-664)</div><div class='item dropdown__menu-item' data-value='+212' title='Morocco' fieldname='country_dial_code_MA'>MA (+212)</div><div class='item dropdown__menu-item' data-value='+258' title='Mozambique' fieldname='country_dial_code_MZ'>MZ (+258)</div><div class='item dropdown__menu-item' data-value='+95' title='Myanmar' fieldname='country_dial_code_MM'>MM (+95)</div><div class='item dropdown__menu-item' data-value='+264' title='Namibia' fieldname='country_dial_code_NA'>NA (+264)</div><div class='item dropdown__menu-item' data-value='+674' title='Nauru' fieldname='country_dial_code_NR'>NR (+674)</div><div class='item dropdown__menu-item' data-value='+977' title='Nepal' fieldname='country_dial_code_NP'>NP (+977)</div><div class='item dropdown__menu-item' data-value='+31' title='Netherlands' fieldname='country_dial_code_NL'>NL (+31)</div><div class='item dropdown__menu-item' data-value='+687' title='New Caledonia' fieldname='country_dial_code_NC'>NC (+687)</div><div class='item dropdown__menu-item' data-value='+64' title='New Zealand' fieldname='country_dial_code_NZ'>NZ (+64)</div><div class='item dropdown__menu-item' data-value='+505' title='Nicaragua' fieldname='country_dial_code_NI'>NI (+505)</div><div class='item dropdown__menu-item' data-value='+227' title='Niger' fieldname='country_dial_code_NE'>NE (+227)</div><div class='item dropdown__menu-item' data-value='+234' title='Nigeria' fieldname='country_dial_code_NG'>NG (+234)</div><div class='item dropdown__menu-item' data-value='+683' title='Niue' fieldname='country_dial_code_NU'>NU (+683)</div><div class='item dropdown__menu-item' data-value='+672' title='Norfolk Island' fieldname='country_dial_code_NF'>NF (+672)</div><div class='item dropdown__menu-item' data-value='+850' title='North Korea' fieldname='country_dial_code_KP'>KP (+850)</div><div class='item dropdown__menu-item' data-value='+1-670' title='Northern Mariana Islands' fieldname='country_dial_code_MP'>MP (+1-670)</div><div class='item dropdown__menu-item' data-value='+47' title='Norway' fieldname='country_dial_code_NO'>NO (+47)</div><div class='item dropdown__menu-item' data-value='+968' title='Oman' fieldname='country_dial_code_OM'>OM (+968)</div><div class='item dropdown__menu-item' data-value='+92' title='Pakistan' fieldname='country_dial_code_PK'>PK (+92)</div><div class='item dropdown__menu-item' data-value='+680' title='Palau' fieldname='country_dial_code_PW'>PW (+680)</div><div class='item dropdown__menu-item' data-value='+970' title='Palestine' fieldname='country_dial_code_PS'>PS (+970)</div><div class='item dropdown__menu-item' data-value='+507' title='Panama' fieldname='country_dial_code_PA'>PA (+507)</div><div class='item dropdown__menu-item' data-value='+675' title='Papua New Guinea' fieldname='country_dial_code_PG'>PG (+675)</div><div class='item dropdown__menu-item' data-value='+595' title='Paraguay' fieldname='country_dial_code_PY'>PY (+595)</div><div class='item dropdown__menu-item' data-value='+51' title='Peru' fieldname='country_dial_code_PE'>PE (+51)</div><div class='item dropdown__menu-item' data-value='+63' title='Philippines' fieldname='country_dial_code_PH'>PH (+63)</div><div class='item dropdown__menu-item' data-value='+870' title='Pitcairn Islands' fieldname='country_dial_code_PN'>PN (+870)</div><div class='item dropdown__menu-item' data-value='+48' title='Poland' fieldname='country_dial_code_PL'>PL (+48)</div><div class='item dropdown__menu-item' data-value='+351' title='Portugal' fieldname='country_dial_code_PT'>PT (+351)</div><div class='item dropdown__menu-item' data-value='+974' title='Qatar' fieldname='country_dial_code_QA'>QA (+974)</div><div class='item dropdown__menu-item' data-value='+40' title='Romania' fieldname='country_dial_code_RO'>RO (+40)</div><div class='item dropdown__menu-item' data-value='+7' title='Russia' fieldname='country_dial_code_RU'>RU (+7)</div><div class='item dropdown__menu-item' data-value='+250' title='Rwanda' fieldname='country_dial_code_RW'>RW (+250)</div><div class='item dropdown__menu-item' data-value='+262' title='Réunion' fieldname='country_dial_code_RE'>RE (+262)</div><div class='item dropdown__menu-item' data-value='+685' title='Samoa' fieldname='country_dial_code_WS'>WS (+685)</div><div class='item dropdown__menu-item' data-value='+378' title='San Marino' fieldname='country_dial_code_SM'>SM (+378)</div><div class='item dropdown__menu-item' data-value='+966' title='Saudi Arabia' fieldname='country_dial_code_SA'>SA (+966)</div><div class='item dropdown__menu-item' data-value='+221' title='Senegal' fieldname='country_dial_code_SN'>SN (+221)</div><div class='item dropdown__menu-item' data-value='+381 p' title='Serbia' fieldname='country_dial_code_RS'>RS (+381 p)</div><div class='item dropdown__menu-item' data-value='+248' title='Seychelles' fieldname='country_dial_code_SC'>SC (+248)</div><div class='item dropdown__menu-item' data-value='+232' title='Sierra Leone' fieldname='country_dial_code_SL'>SL (+232)</div><div class='item dropdown__menu-item' data-value='+65' title='Singapore' fieldname='country_dial_code_SG'>SG (+65)</div><div class='item dropdown__menu-item' data-value='+1-721' title='Sint Maarten' fieldname='country_dial_code_SX'>SX (+1-721)</div><div class='item dropdown__menu-item' data-value='+421' title='Slovakia' fieldname='country_dial_code_SK'>SK (+421)</div><div class='item dropdown__menu-item' data-value='+386' title='Slovenia' fieldname='country_dial_code_SI'>SI (+386)</div><div class='item dropdown__menu-item' data-value='+677' title='Solomon Islands' fieldname='country_dial_code_SB'>SB (+677)</div><div class='item dropdown__menu-item' data-value='+252' title='Somalia' fieldname='country_dial_code_SO'>SO (+252)</div><div class='item dropdown__menu-item' data-value='+27' title='South Africa' fieldname='country_dial_code_ZA'>ZA (+27)</div><div class='item dropdown__menu-item' data-value='+500' title='South Georgia &amp; South Sandwich Islands' fieldname='country_dial_code_GS'>GS (+500)</div><div class='item dropdown__menu-item' data-value='+82' title='South Korea' fieldname='country_dial_code_KR'>KR (+82)</div><div class='item dropdown__menu-item' data-value='+211' title='South Sudan' fieldname='country_dial_code_SS'>SS (+211)</div><div class='item dropdown__menu-item' data-value='+94' title='Sri Lanka' fieldname='country_dial_code_LK'>LK (+94)</div><div class='item dropdown__menu-item' data-value='+590' title='Saint Barthélemy' fieldname='country_dial_code_BL'>BL (+590)</div><div class='item dropdown__menu-item' data-value='+290 n' title='St. Helena' fieldname='country_dial_code_SH'>SH (+290 n)</div><div class='item dropdown__menu-item' data-value='+1-869' title='St. Kitts &amp; Nevis' fieldname='country_dial_code_KN'>KN (+1-869)</div><div class='item dropdown__menu-item' data-value='+1-758' title='St. Lucia' fieldname='country_dial_code_LC'>LC (+1-758)</div><div class='item dropdown__menu-item' data-value='+590' title='St. Martin' fieldname='country_dial_code_MF'>MF (+590)</div><div class='item dropdown__menu-item' data-value='+508' title='St. Pierre &amp; Miquelon' fieldname='country_dial_code_PM'>PM (+508)</div><div class='item dropdown__menu-item' data-value='+1-784' title='St. Vincent &amp; Grenadines' fieldname='country_dial_code_VC'>VC (+1-784)</div><div class='item dropdown__menu-item' data-value='+249' title='Sudan' fieldname='country_dial_code_SD'>SD (+249)</div><div class='item dropdown__menu-item' data-value='+597' title='Suriname' fieldname='country_dial_code_SR'>SR (+597)</div><div class='item dropdown__menu-item' data-value='+47' title='Svalbard &amp; Jan Mayen' fieldname='country_dial_code_SJ'>SJ (+47)</div><div class='item dropdown__menu-item' data-value='+268' title='Swaziland' fieldname='country_dial_code_SZ'>SZ (+268)</div><div class='item dropdown__menu-item' data-value='+46' title='Sweden' fieldname='country_dial_code_SE'>SE (+46)</div><div class='item dropdown__menu-item' data-value='+41' title='Switzerland' fieldname='country_dial_code_CH'>CH (+41)</div><div class='item dropdown__menu-item' data-value='+963' title='Syria' fieldname='country_dial_code_SY'>SY (+963)</div><div class='item dropdown__menu-item' data-value='+239' title='Sao Tome and Principe' fieldname='country_dial_code_ST'>ST (+239)</div><div class='item dropdown__menu-item' data-value='+886' title='Taiwan' fieldname='country_dial_code_TW'>TW (+886)</div><div class='item dropdown__menu-item' data-value='+992' title='Tajikistan' fieldname='country_dial_code_TJ'>TJ (+992)</div><div class='item dropdown__menu-item' data-value='+255' title='Tanzania' fieldname='country_dial_code_TZ'>TZ (+255)</div><div class='item dropdown__menu-item' data-value='+66' title='Thailand' fieldname='country_dial_code_TH'>TH (+66)</div><div class='item dropdown__menu-item' data-value='+670' title='Timor-Leste' fieldname='country_dial_code_TL'>TL (+670)</div><div class='item dropdown__menu-item' data-value='+228' title='Togo' fieldname='country_dial_code_TG'>TG (+228)</div><div class='item dropdown__menu-item' data-value='+690' title='Tokelau' fieldname='country_dial_code_TK'>TK (+690)</div><div class='item dropdown__menu-item' data-value='+676' title='Tonga' fieldname='country_dial_code_TO'>TO (+676)</div><div class='item dropdown__menu-item' data-value='+1-868' title='Trinidad &amp; Tobago' fieldname='country_dial_code_TT'>TT (+1-868)</div><div class='item dropdown__menu-item' data-value='+216' title='Tunisia' fieldname='country_dial_code_TN'>TN (+216)</div><div class='item dropdown__menu-item' data-value='+90' title='Turkey' fieldname='country_dial_code_TR'>TR (+90)</div><div class='item dropdown__menu-item' data-value='+993' title='Turkmenistan' fieldname='country_dial_code_TM'>TM (+993)</div><div class='item dropdown__menu-item' data-value='+1-649' title='Turks &amp; Caicos Islands' fieldname='country_dial_code_TC'>TC (+1-649)</div><div class='item dropdown__menu-item' data-value='+688' title='Tuvalu' fieldname='country_dial_code_TV'>TV (+688)</div><div class='item dropdown__menu-item' data-value='+1-340' title='U.S. Virgin Islands' fieldname='country_dial_code_VI'>VI (+1-340)</div><div class='item dropdown__menu-item' data-value='+256' title='Uganda' fieldname='country_dial_code_UG'>UG (+256)</div><div class='item dropdown__menu-item' data-value='+380' title='Ukraine' fieldname='country_dial_code_UA'>UA (+380)</div><div class='item dropdown__menu-item' data-value='+971' title='United Arab Emirates' fieldname='country_dial_code_AE'>AE (+971)</div><div class='item dropdown__menu-item' data-value='+598' title='Uruguay' fieldname='country_dial_code_UY'>UY (+598)</div><div class='item dropdown__menu-item' data-value='+998' title='Uzbekistan' fieldname='country_dial_code_UZ'>UZ (+998)</div><div class='item dropdown__menu-item' data-value='+678' title='Vanuatu' fieldname='country_dial_code_VU'>VU (+678)</div><div class='item dropdown__menu-item' data-value='+39-06' title='Vatican City' fieldname='country_dial_code_VA'>VA (+39-06)</div><div class='item dropdown__menu-item' data-value='+58' title='Venezuela' fieldname='country_dial_code_VE'>VE (+58)</div><div class='item dropdown__menu-item' data-value='+84' title='Vietnam' fieldname='country_dial_code_VN'>VN (+84)</div><div class='item dropdown__menu-item' data-value='+681' title='Wallis &amp; Futuna' fieldname='country_dial_code_WF'>WF (+681)</div><div class='item dropdown__menu-item' data-value='+212' title='Western Sahara' fieldname='country_dial_code_EH'>EH (+212)</div><div class='item dropdown__menu-item' data-value='+967' title='Yemen' fieldname='country_dial_code_YE'>YE (+967)</div><div class='item dropdown__menu-item' data-value='+260' title='Zambia' fieldname='country_dial_code_ZM'>ZM (+260)</div><div class='item dropdown__menu-item' data-value='+263' title='Zimbabwe' fieldname='country_dial_code_ZW'>ZW (+263)</div><div class='item dropdown__menu-item' data-value='+358' title='Åland Islands' fieldname='country_dial_code_AX'>AX (+358)</div></div></div></div>";
    this.markup = '<div class="field"><div class="tel-add__header"><label class="tel-add__label"><span fieldname="account_mydetails_new_phone_' + this.itemValue + '_label">' + this.itemValueCap + ' Number' + '</span></label><a href="#" class="tel-add__delete" data-js-tel-add-delete><span fieldname="account_mydetails_phone_delete">Delete number</span></a></div><div class="fields">' + this.countryCodeMarkup + '<div class="seven wide field"><input type="tel" placeholder="000000000" fieldname="account_mydetails_phone_placeholder" class="tel-add__phone-field"></div></div></div>';

    this.createItem = function() {
      var $el = $("<div id=" + this.itemValue + " class=" + 'tel-add__item' + ">" + this.markup + "</div>");
      $($el).insertBefore(".tel-add__inner");
    };
  }

  $('[data-js-add-tel-number]').on("click", function(e) {
    var $value = $(this).prev().find('.dropdown__hidden')[0].value;
    var numberBlock = new NumberItem($value);
    $(this).addClass('disabled');
    $(this).parent().parent().hide();

    if (stateArray.length < 3) {
      $(this).parent().parent().parent().next().show(); // only show 'add new number' if less than 4 items
    }

    if ($(this).prev().find('.dropdown__hidden')[0].value !== "") {
      numberBlock.createItem();
      stateArray.push(numberBlock);
    }

    $(this).prev().find('.dropdown__menu-item.selected.active').removeClass('active').addClass('disabled').find('.dropdown__active-tick').replaceWith('<span class="dropdown__added-msg"><span fieldname="account_mydetails_phone_country_added_label">Already added</span></span>');

    if (stateArray.length > 3) {
      $(this).addClass('disabled');
    }

    $(this).prev().find('.dropdown__text').html('<div class="default text dropdown__text"><span fieldname="account_mydetails_number_type_default">Please select a number type...</span></div>');
    $(this).prev().find('.dropdown__hidden')[0].value = "";
  });

  $(document).on("click", '[data-js-tel-add-delete]', function(e) {
    e.preventDefault();
    var item = this.parentNode.parentNode.parentNode;
    var id = item.id;

    // select the item out of stateArray
    var filterArray = stateArray.filter(function(value, index, arr) {
      if (id === value.itemValue) {
        return value;
      }
    });

    // remove filterArray item from stateArray
    stateArray = stateArray.filter(function(value, index, arr) {
      return value !== filterArray[0];
    });

    // find item in dropdown
    var $dropItem = $(item).parent().find(".tel-add__inner .dropdown .dropdown__menu [data-value='" + id + "']");

    $dropItem.removeClass('disabled').removeClass('selected');
    $dropItem.find('.dropdown__added-msg').remove();

    $(item).parent().find('.tel-add__btn').addClass('disabled');

    $(item).parent().parent().find('[data-js-add-phone-trigger]').show();

    item.remove();

  });

  // Important to add a dynamic hook to these 4 number blocks that are added via JS
  $(document).on("click", '[data-dynamic-dropdown]', function(e) {
    $(this).dropdown();
  });

  $("[data-js-add-phone-trigger]").on("click", function(e) {
    $(this).prev(".tel-add").show();
    $(this).prev(".tel-add").find('.tel-add__inner').show();
    $(this).hide();
  });
  // end tel-add

  // Account extra Email Add
  // Mve to account JS files.
  // On click of "add new email" link
  $("[data-js-add-email-trigger]").on("click", function(e) {
    e.preventDefault();
    $(this).prev(".email-add").show();
    $(this).hide();
  });
  // On click of delete link
  $("[data-js-delete-additional-email]").on("click", function(e) {
    e.preventDefault();
    $(this).parent().parent().hide().next().show();
  });

  // DESKTOP DROPDOWN FILTER AS PER USER/ADVOCATE SEARCH
  // filter-dt dropdowns - desktop filter (user / advocate filter)
  var filterDt = $('[data-js-filter-dt]');
  var filterDtDropdown = $('[data-js-dropdown-filter-dt].ui.dropdown.dropdown--filter-dt');
  var i = 0;
  filterDtDropdown.each(function(index) {
    i++;
    $(this).attr("id", "filter-dt" + i);
    $(this)[0].aCounter = 0;
    $(this)[0].aOneOnly = $(this).data('dropdown-one-only');
    $(this)[0].dropdownControls = $(this).data('dropdown-controls');

    if ($(this)[0].dropdownControls !== undefined) { // or check if it's a string better / or an ele selector
      $(this).next().addClass('disabled'); // better than next would be closest maybe?
    }
  });

  filterDtDropdown.dropdown({
    useLabels: false,
    maxSelections: false,
    preserveHTML: true,

    action: function(text, value, e) { // < Nothing else built in now occurs ~ bespoke action -//
      if (!$(e).hasClass('dropdown__menu-item--header')) {

        if ($(this)[0].dropdownControls !== undefined) { // 
          $($(this)[0].dropdownControls).removeClass('disabled');
        }

        if ($(this)[0].aOneOnly !== undefined) { // single dropdown item selection only:
          // all item actions
          $(this).find('.dropdown__menu-item').removeClass('active').removeClass('selected').find(".dropdown__active-tick").remove();
          // 'this' specific actions
          $(e).toggleClass('active');
          $(e).parent().prev('.dropdown__text').text($(this).find('.dropdown__menu-item.active').text());
          $(e).parent().parent().find('.dropdown__menu-number').text('1');
          $(e).not('.dropdown__menu-item--header').addClass('selected').append('<span class="icon--tick-circle-fill icon--brand icon--md dropdown__active-tick"></span>');

        } else { // normal multi select:

          $(e).toggleClass('active');
          if ($(e).hasClass('active')) { // add item
            $(e).not('.dropdown__menu-item--header').addClass('selected').append('<span class="icon--tick-circle-fill icon--brand icon--md dropdown__active-tick"></span>');
            $(this)[0].aCounter++;

            if ($(this)[0].aCounter === 0) { // 0 items
              $(e).parent().prev('.dropdown__text').text('Select ' + $(e).parent().parent().find('input')[0].name);
            }
            if ($(this)[0].aCounter === 1) { // ONE item added
              $(e).parent().prev('.dropdown__text').text(e.innerText);
              $(this).find('.dropdown__menu-item.active').text();
              $(e).parent().prev('.dropdown__text').text($(this).find('.dropdown__menu-item.active').text());
            }
            if ($(this)[0].aCounter > 1) { // x items added
              $(e).parent().prev('.dropdown__text').text($(this)[0].aCounter + ' Selected');
            }

            $(e).parent().find('.dropdown__menu-number').text($(this)[0].aCounter);

          } else { // remove item
            $(e).removeClass('selected').find(".dropdown__active-tick").remove();
            $(this)[0].aCounter--;
            $(e).parent().find('.dropdown__menu-number').text($(this)[0].aCounter);

            if ($(this)[0].aCounter === 0) { // 0 items
              $(e).parent().prev('.dropdown__text').text('Select ' + $(e).parent().parent().find('input')[0].name);
            }
            if ($(this)[0].aCounter === 1) { // ONE item added
              $(e).parent().prev('.dropdown__text').text(e.innerText);
              $(this).find('.dropdown__menu-item.active').text();
              $(e).parent().prev('.dropdown__text').text($(this).find('.dropdown__menu-item.active').text());
            }
            if ($(this)[0].aCounter > 1) { // x items added
              $(e).parent().prev('.dropdown__text').text($(this)[0].aCounter + ' Selected');
            }
          }

        }

      }
    },
    onShow: function() {
      $(this).find('.dropdown__icon').addClass('dropdown__icon--active');
      $(this).find('.dropdown__menu-item--header').addClass('selected');
    },
    onChange: function(value, text, $selectedItem) {},
    onHide: function() {
      $(this).find('.dropdown__icon').removeClass('dropdown__icon--active');
    },
    onAdd: function(addedValue, addedText, $addedChoice) {
      $($addedChoice).append('<span class="icon--tick-circle-fill icon--brand icon--md dropdown__active-tick"></span>');
    }
  });

  // Clear dropdown btn action
  $('[data-js-clear-dropdown]').on('click', function(e) {
    e.preventDefault();
    $(this).parent().addClass('selected');
    $(this).parent().parent().parent().dropdown('clear');
    $(this).parent().parent().parent().find('.dropdown__menu [class*="icon--"]').remove();
    $(this).parent().parent().parent()[0].aCounter = 0;
    $(this).prev('.dropdown__menu-status').children('.dropdown__menu-number').text($(this).parent().parent().parent()[0].aCounter);

    // clear other menu if controlled by it
    $($(this).parent().parent().parent()[0].dropdownControls).addClass('disabled').dropdown('clear').find('.dropdown__menu [class*="icon--"]').remove();
    $($(this).parent().parent().parent()[0].dropdownControls)[0].aCounter = 0;
    $($(this).parent().parent().parent()[0].dropdownControls).find('.dropdown__menu-number').text('0');

  });

});
