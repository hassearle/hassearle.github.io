// youtube script
var tag = document.createElement("script");
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player,
  videoContainer = document.querySelectorAll(".video-player");

function onYouTubeIframeAPIReady() {
  for (var i = 0; i < videoContainer.length; i++) {
    if (videoContainer[i] !== null) {
      player = new YT.Player(videoContainer[i].querySelector(".video-player__embed"), {
        events: {
          onReady: onPlayerReady,
        },
      });
    }
  }
}

function onPlayerReady(event) {
  var $iframe = $(event.target.getIframe());
  var $posterElem = $iframe.closest(".video-player").find(".video-player__poster");
  if ($posterElem) {
    $posterElem.on("click", function() {
      this.classList.add("u--hidden");
      event.target.playVideo();
    });
  }
}
