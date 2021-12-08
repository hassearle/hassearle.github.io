/**
 * ------------------------------------------------------------------------
 * Photoupload (Photo upload)
 * ------------------------------------------------------------------------
 *
 * Notes
 *  Instructions
 *    -  When the image has been uploaded, cropped and Save & Exit
 *       is clicked, the addFormDropzone.processQueue() function
 *       is called.  This will submit the form js-profile-photo to
 *       the form action (currently set to /save_profile_endpoint).
 *       A server side function is required to save this image to
 *       the server.
 *	Decision points
 *		- What is the max file to be? (maxFilesize)
 *	Assumptions
 *		- Only wish to upload a single image
 */

// Tell Dropzone not to look for the elements automatically
Dropzone.autoDiscover = false
$(function() {
  var $currentImageContainer = $("#js-profile-photo-current")
    // transform cropper dataURI output to a Blob which Dropzone accepts
  function dataURItoBlob(dataURI) {
    //console.log('Photoupload dataURItoBlob called...');
    var byteString = atob(dataURI.split(",")[1])
    var ab = new ArrayBuffer(byteString.length)
    var ia = new Uint8Array(ab)
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i)
    }
    return new Blob([ab], {
      type: "image/jpeg",
    })
  }
  // modal window template - embedded in modal-profile-photo.html
  if (!$(".crop-tpl")[0]) {
    return
  }
  var modalTemplate = $(".crop-tpl")[0].innerHTML
    // initialize dropzone
  if (document.querySelector("#js-profile-photo-current")) {
    var addFormDropzone = new Dropzone("#js-profile-photo", {
      maxFilesize: 50, // MB
      maxFiles: 1,
      parallelUploads: 10000,
      uploadMultiple: false,
      autoProcessQueue: false,
      previewTemplate: document.querySelector("#js-profile-photo-current").innerHTML,
      previewsContainer: "#js-profile-photo-current",
      thumbnailWidth: 160,
      thumbnailHeight: 160,
      clickable: "#js-profile-photo .dropzone__wrapper",
    })
    addFormDropzone.on("success", function(file, responseText) {
      console.log("addFormDropzone success called...")
      window.location = responseText
    })
    addFormDropzone.on("addedfile", function(file) {
        // console.log('addFormDropzone addedfile called...');
        file.previewElement.addEventListener("click", function() {
          // console.log('addFormDropzone file.previewElement click called...');
          //addFormDropzone.removeFile(file);
        })
      })
      // listen to thumbnail event
    addFormDropzone.on("thumbnail", function(file) {
      // console.log('addFormDropzone called...', file, file.cropped);
      // ignore files which were already cropped and re-rendered
      // to prevent infinite loop
      if (file.cropped) {
        return
      }
      // cache filename to re-assign it to cropped file
      var cachedFilename = file.name
        // remove not cropped file from dropzone (we will replace it later)
      addFormDropzone.removeFile(file)
        // dynamically create modals to allow multiple files processing
      var $cropperModal = $(modalTemplate)
        // 'Crop and Upload' button in a modal
      var $uploadCrop = $cropperModal.find("#js-crop-upload")
      var $uploadCropRotateLeft = $cropperModal.find("#js-rotate-left")
      var $uploadCropRotateRight = $cropperModal.find("#js-rotate-right")
        // Create an image node for Cropper.js
      var $img = new Image()
      var cropper
        // initialize FileReader which reads uploaded file
      var reader = new FileReader()
      reader.onloadend = function() {
          // add uploaded and read image to modal
          $cropperModal.find("#js-cropped-img-container").html($img)
            //$img.attr('src', reader.result);
          $img.src = reader.result
            // Create Cropper.js
          cropper = new Cropper($img, {
            autoCropArea: 1,
            zoomOnWheel: false,
          })
        }
        // read uploaded file (triggers code above)
      reader.readAsDataURL(file)
      $currentImageContainer.hide()
        //$cropperModal.modal('show');
      $("#js-profile-photo #dropzone-crop").prepend($cropperModal)
      $("#js-profile-photo .dropzone__wrapper").hide()
      $("#js-profile-photo-current .preview, #js-profile-photo-current .profile-photo__delete").remove()
        // listener for 'Crop and Upload' button in modal
      $uploadCrop.on("click", function() {
        // console.log('uploadCrop called...');
        // get cropped image data
        var blob = cropper.getCroppedCanvas().toDataURL()
          // transform it to Blob object
        var newFile = dataURItoBlob(blob)
          // set 'cropped to true' (so that we don't get to that listener again)
        newFile.cropped = true
          // assign original filename
        newFile.name = cachedFilename
          // add cropped file to dropzone
        addFormDropzone.addFile(newFile)
          // process the queue (Submits the form)
        console.log("Processing Queue.")
        addFormDropzone.processQueue()
          // update the avatar with the new version
        $("[data-js-account-avatar]").attr("src", blob)
          // hide the cropper modal
        $cropperModal.hide()
        $("#js-profile-photo-current").show()
        $("#js-profile-photo .dropzone__wrapper").show()

        var $modalWindow = $("#js-profile-photo-modal")
        $modalWindow.modal("hide")
      })

      $uploadCropRotateLeft.on("click", function() {
        // console.log('uploadCropRotateLeft called...');
        cropper.rotate(-10)
      })
      $uploadCropRotateRight.on("click", function() {
        // console.log('uploadCropRotateRight called...');
        cropper.rotate(10)
      })
    })
  }
  // Remove Profile Image
  $("[data-js-profile-photo-current]").on("click", function(e) {
    e.preventDefault()

    // Infotrax TODO: Server side function to delete the image

    // Replace the image src
    $(this).closest("#js-profile-photo-current").find(".profile-photo__current").attr("src", "/images/avatar-placeholder.png")
    $("[data-js-account-avatar]").attr("src", "/images/avatar-placeholder.png")
  })
})
