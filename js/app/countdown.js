/**
 * ------------------------------------------------------------------------
 * Countdown
 * ------------------------------------------------------------------------
 */

// Set the date/time to count down to
var countDownDate = new Date("Jan 5, 2021 09:00:00").getTime()
var $hours = $("[data-js-countdown-hours]")
var $minutes = $("[data-js-countdown-minutes]")
var $seconds = $("[data-js-countdown-seconds]")

// Update the count down every 1 second
var x = setInterval(function() {
  // Get todays date and time
  var now = new Date().getTime()

  // Find the distance between now and the count down date
  var distance = countDownDate - now

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24))
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((distance % (1000 * 60)) / 1000)

  // Display the result
  $hours.text(hours)
  $minutes.text(minutes)
  $seconds.text(seconds)

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x)
    if (document.getElementById("demo")) {
      document.getElementById("demo").innerHTML = "EXPIRED"
    }
  }
}, 1000)
