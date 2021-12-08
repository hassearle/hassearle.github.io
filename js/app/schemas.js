/**
 * ------------------------------------------------------------------------
 * Schemas
 * ------------------------------------------------------------------------
 */

// Returns video schema markup from supplied data
function schemaMarkupVideo(oVideoDataYouTube, sSrcVideo) {
  var oSnippetData = oVideoDataYouTube.items[0].snippet;
  //
  var sSchemaMarkup = document.createElement("script");
  sSchemaMarkup.type = "application/ld+json";
  //
  oVideoDetails = {
    "@context": "http://schema.org/",
    "@type": "VideoObject",
    name: oSnippetData.title,
    description: oSnippetData.description,
    uploadDate: oSnippetData.publishedAt,
    thumbnailUrl: oSnippetData.thumbnails.default.url,
    embedUrl: sSrcVideo,
  };
  //
  sSchemaMarkup.innerHTML = JSON.stringify(oVideoDetails);
  //
  return sSchemaMarkup;
}

// Requests video data (json) from YouTube api
function requestDataVideoYoutube(sIdVideoYoutube, elemIframe, sSrcVideo) {
  // Creates ajax call to Youtube api
  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" +
      sIdVideoYoutube +
      "&key=" +
      "AIzaSyB-u-zBXwzWsVNzb-nTNb1JjqrY6_QnLUQ",
    dataType: "jsonp",
    success: function(oVideoDataYouTube) {
      // Schema markup
      var oSchemaMarkupVideo = schemaMarkupVideo(oVideoDataYouTube, sSrcVideo);

      // Insert schema into dom after the iframe
      elemIframe.parentNode.insertBefore(
        oSchemaMarkupVideo,
        elemIframe.nextSibling
      );
    },
  });
  //
}

$(document).ready(function() {
  // Queries dom for iframes
  var iframes = document.querySelectorAll("iframe");

  // Cycles through iframes
  for (i = 0; i < iframes.length; ++i) {
    // Verifies iframe is a Youtube embed
    if (iframes[i].src.startsWith("https://www.youtube.com/embed/")) {
      var sIframeSrcYoutube = iframes[i].src.toString(); // Eg. "https://www.youtube.com/embed/wjbHnTrTeKc?enablejsapi=1"
      sIframeSrcYoutube = sIframeSrcYoutube.replace(
        "https://www.youtube.com/embed/",
        ""
      ); // Remove url path before video ID
      //
      var aIframeSrcYoutube = sIframeSrcYoutube.split("?"); // Splits string by url variables, eg. "wjbHnTrTeKc?enablejsapi=1"
      var sIdVideoYoutube = aIframeSrcYoutube[0].toString(); // Assigns first part of youtube ID

      // Sends video details to function that requests data from youtube
      requestDataVideoYoutube(
        sIdVideoYoutube,
        iframes[i],
        iframes[i].src.toString()
      );
    }
    //
  }
  //
});
