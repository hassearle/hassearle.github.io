/**
 * ------------------------------------------------------------------------
 * Drill Filter
 * ------------------------------------------------------------------------
 */

//  devnote fieldname string change - now 'Select a' + dynamic:
//  enroll_filter_all

$(document).ready(function() {
    // Drill Filter
    var item = $(".drill-filter__item")
      // check if it has child menu and add class if so
    item.each(function() {
      if (this.children.length > 1) {
        $(this).addClass("drill-filter__node__parent")
        $(this).addClass("has-child-nodes")
        $(this).find("> .drill-filter__node").addClass("drill-filter__node__parent")

        var parentName = $(this).find("> .drill-filter__node > *:not(.drill-filter__node__child-count)").text()

        if (!$(this).hasClass("drill-filter__item__header")) {
          $(this).attr("data-filter-name", parentName)
        }

        $(this)
          .find("> .drill-filter__node")
          .append("<span class='drill-filter__node__child-count'><span fieldname='enroll_filter_all'>Select a " + parentName + "</span></span>")
        $(this).find(".drill-filter__list .drill-filter__node").addClass("drill-filter__node__child")
      }
    })

    // Set the height of the dropdown menu
    $(".dropdown-toggle").on("click", function() {
      var $element = $(this)
      var maxHeight = 0

      setTimeout(function() {
        $element
          .siblings(".dropdown-menu")
          .find(".drill-filter__list")
          .each(function() {
            if ($(this).height() > maxHeight) {
              maxHeight = $(this).height()
            }
          })
        $(".drill-filter").height(maxHeight + 40)
      }, 100)
      $("body").addClass("js-filter-active")
    })

    // add an id to each node
    var node = $(".drill-filter__node")
    var i = 0
    node.each(function() {
      i++
      $(this).attr("data-filter-node-id", i)
    })

    // prevent the dropdown from closing when selecting a node
    $(".drill-filter__node__parent, .drill-filter__heading").on("click", function(e) {
      e.stopPropagation()
    })

    $(".drill-filter__node__parent > .drill-filter__node").on("click", function(e) {
      if (!$(this).parent().hasClass("disabled")) {
        e.stopPropagation()
        $(".drill-filter__node__parent.open").removeClass("open")
        $(this).closest(".drill-filter__list").toggleClass("child-open")
        $(this).toggleClass("open")
      }
    })

    $("[data-js-drill-nav-back]").on("click", function(e) {
      e.preventDefault()
      e.stopPropagation()
      $(".drill-filter__list.child-open").removeClass("child-open")
      $(".drill-filter__node.drill-filter__node__parent.open").removeClass("open")
    })

    $(".drill-filter__node:not(.drill-filter__node__parent)").on("click", function(e) {
      e.stopPropagation()

      var nodeValue = $(this).text()
      var nodeId = $(this).data("filter-node-id")

      // which [sub] menu are we on? - as we need to count locally per submenu not just global total in getFilterCount()
      var thisFilter = $(this).closest("[data-filter-name]")
        // single selection option
      var singleSelection = thisFilter.data("dropdown-one-only")
      if (singleSelection !== undefined) {
        thisFilter.addClass("single-selection-only")
        thisFilter.find(".drill-filter__node").removeClass("drill-filter__node--focus")
      }
      // controls another option (disabled)
      var controlsAnother = thisFilter.data("dropdown-controls-mob")
      if (controlsAnother !== undefined) {
        $("[" + controlsAnother + "]").removeClass("disabled")
      }

      let selectedFilter = $(this).data("jsFilter")

      $(this).toggleClass("drill-filter__node--focus")
      if ($(this).hasClass("drill-filter__node--focus")) {
        // add
        $(this)
          .closest(".filter__wrapper")
          .find("ul.filter-selections__list")
          .append("<li data-filter-node-id='" + nodeId + "' data-js-filter='filter-category-all' data-js-filter-selected='" + selectedFilter + "' class='filter-selections__item'><span  class='filter-selections__link'><i class='filter-selections__icon icon--cross icon--primary icon--xs'></i>" + nodeValue + "</span></li>")
        thisFilter.find(".drill-filter__item--counter .drill-filter__item-counter-number").text(thisFilter.find(".drill-filter__node--focus").length)
      } else {
        // remove
        $(this)
          .closest(".filter__wrapper")
          .find("ul.filter-selections__list [data-filter-node-id='" + nodeId + "']")
          .remove()
        thisFilter.find(".drill-filter__item--counter .drill-filter__item-counter-number").text(thisFilter.find(".drill-filter__node--focus").length)
      }

      // close all child nodes
      if (!$(this).hasClass("drill-filter__node__child")) {
        $(".drill-filter__list").removeClass("child-open")
        $(".drill-filter__node__parent").removeClass("open")
      }

      getFilterCount($(this).closest(".filter__wrapper"))
    })

    // Reset Filter THIS Submenu
    $("[data-js-filter-reset-submenu]").on("click", function(e) {
      e.preventDefault()

      var localItem = $(this).closest("[data-filter-name]").find(".drill-filter__node")
      localItem.each(function() {
        localItem.removeClass("has-child-active")
        localItem.removeClass("drill-filter__node--focus")
      })

      // Reset 'Select a' Country / County / Item text on filter home menu
      var itemParent = $(this).closest("[data-filter-name]")
      var itemParentData = itemParent.data("filter-name")
      itemParent.find(".drill-filter__node__child-count").text("Select a " + itemParentData)

      // Clear the selections
      $(".filter-selections__list").html("")

      $(this).closest(".filter__wrapper").find(".filter__count").text("")
      $(this).parent().parent().find(".drill-filter__item-counter-number").text("0")

      $("[data-js-selected-filter-label]").text("Select a filter")

      // if controlled by another then it should be cleared and disabled too
      var controlsAnother = itemParent.data("dropdown-controls-mob")
      if (controlsAnother !== undefined) {
        $("[" + controlsAnother + "]")
          .addClass("disabled")
          .children(".drill-filter__node")
          .removeClass("has-child-active")
          .find(".drill-filter__node__child-count")
          .text("Select a " + $("[" + controlsAnother + "]").data("filter-name"))

        $("[" + controlsAnother + "] .drill-filter__node").removeClass("drill-filter__node--focus")
        $("[" + controlsAnother + "] .drill-filter__item-counter-number").text("0")
        $("[data-js-filter-apply]").addClass("disabled")
      }
    })

    // Reset Filter CLEAR ALL Submenus
    $("[data-js-filter-reset]").on("click", function(e) {
      e.preventDefault()
      var item = $(this).closest(".filter__wrapper").find(".drill-filter__node")
      item.each(function() {
        item.removeClass("has-child-active")
          //item.find(".drill-filter__node__child-count").html("<span fieldname='enroll_filter_all'>All</span>");
        item.removeClass("drill-filter__node--focus")
      })

      var itemParent = $(this).closest(".filter__wrapper").find(".drill-filter__item.drill-filter__node__parent:not(.drill-filter__item__header)")
      itemParent.each(function() {
        var itemParentData = $(this).data("filter-name")
        $(this)
          .find(".drill-filter__node__child-count")
          .html('<span fieldname="enroll_filter_all">Select a ' + itemParentData + "</span>")
      })

      var controlsAnother = itemParent.data("dropdown-controls-mob")
      if (controlsAnother !== undefined) {
        $("[" + controlsAnother + "]").addClass("disabled")
      }

      // Clear the selections
      $(".filter-selections__list").html("")
      $(this).closest(".filter__wrapper").find(".filter__count").text("")
      $(this).parent().parent().find(".drill-filter__item-counter-number").text("0")

      $("[data-js-selected-filter-label]").text("Select a filter")

      // $("[data-js-filter-apply]").prop("disabled", true)
      // $("[data-js-filter-apply]").attr("disabled", "disabled")
      $("[data-js-result-count]").html("")
    })

    function getFilterCount(section) {
      var item = section.find(".drill-filter__node__parent")

      item.each(function(index, element) {
        var focusItem = $(this).find(".drill-filter__list .drill-filter__node--focus")
        var totalChild = focusItem.length

        if (totalChild > 1) {
          // 'X Selected' MULTIPLE
          $(this).find("> .drill-filter__node").addClass("has-child-active")
          $(this)
            .find("> .drill-filter__node .drill-filter__node__child-count")
            .text(totalChild + " Selected")
          $(this)
            .find("[data-js-selected-filter-label]")
            .text(+totalChild + " selected")
          $("[data-js-filter-apply]").removeClass("disabled")
        } else if (totalChild === 1) {
          // Actual Item text displayed (as one single selection)
          $(this).find("> .drill-filter__node").addClass("has-child-active")
          $(this).find("> .drill-filter__node .drill-filter__node__child-count").text($(focusItem).text())
          $(this).find("[data-js-selected-filter-label]").text($(focusItem).text())
          $("[data-js-filter-apply]").removeClass("disabled")
        } else {
          // no items so 'Select a' X
          $(this).find("> .drill-filter__node").removeClass("has-child-active")

          var parentName = $(this).find("> .drill-filter__node .drill-filter__node__child-count").closest(".drill-filter__item.drill-filter__node__parent").data("filter-name")
          $(this)
            .find("> .drill-filter__node .drill-filter__node__child-count")
            .text("Select a " + parentName)
            //$(this).find("[data-js-selected-filter-label]").text("0 selected"); // not sure of this action - rmv
        }
      })

      // get the overall total of selected nodes (globally - both / all submenus) global counter of all submenus too - so cant be used as selection counter
      var total = section.find(".drill-filter__node--focus").length

      if (total > 0) {
        section.find(".filter__count").text("(" + total + ")")
        $("[data-js-result-count]").html("22 results")
      } else {
        section.find(".filter__count").text("")
        $("[data-js-selected-filter-label]").text("Select a filter")
        $("[data-js-result-count]").html("")
      }
    }

    // Apply Filter
    $("[data-js-filter-apply], [data-js-drill-nav-close]").on("click", function() {
      $(".js-filter").removeClass("active").siblings(".dropdown-menu").removeClass("show")
      $(".filter__wrapper").removeClass("filter-active")
      $("body").removeClass("js-filter-active")
    })

    // remove the select filter
    $(document).on("click", ".filter-selections__item", function(e) {
      e.preventDefault()

      var nodeId = $(this).data("filter-node-id")

      $(this).fadeOut(400, function() {
        var section = $(this).closest(".filter__wrapper")
        $(this).remove()
        $(".drill-filter__node[data-filter-node-id='" + nodeId + "']").removeClass("drill-filter__node--focus")
        getFilterCount(section)
      })
    })
  }) // end doc ready
