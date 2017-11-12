'use strict'

console.log('~~~~FIRST')
var CV_URL =
  'https://vision.googleapis.com/v1/images:annotate?key=' + window.apiKey
console.log('HIT')
$(function() {
  $('#fileform').on('submit', uploadFiles)
})
console.log('HIT AFTER')

/**
 * 'submit' event handler - reads the image bytes and sends it to the Cloud
 * Vision API.
 */
function uploadFiles(event) {
  event.preventDefault() // Prevent the default form post

  // Grab the file and asynchronously convert to base64.
  var file = $('#fileform [name=fileField]')[0].files[0]
  var reader = new FileReader()
  reader.onloadend = processFile
  reader.readAsDataURL(file)
}

/**
 * Event handler for a file's data url - extract the image data and pass it off.
 */
function processFile(event) {
  var content = event.target.result
  sendFileToCloudVision(content.replace('data:image/jpeg;base64,', ''))
  console.log('content:', content)
}
// console.log('HELLO')
/**
 * Sends the given file contents to the Cloud Vision API and outputs the
 * results.
 */
function sendFileToCloudVision(content) {
  // Strip out the file prefix when you convert to json.
  console.log('content when sent:', content)
  var request = {
    requests: [
      {
        image: {
          content: content
        },
        features: [
          {
            type: 'LANDMARK_DETECTION',
            maxResults: 5
          }
        ]
      }
    ]
  }
  console.log('request', request)

  $('#results').text('Loading...')
  $.post({
    url: CV_URL,
    data: JSON.stringify(request),
    contentType: 'application/json'
  })
    .fail(function(jqXHR, textStatus, errorThrown) {
      $('#results').text('ERRORS: ' + textStatus + ' ' + errorThrown)
    })
    // .done(displayJSON)
    .done(data => console.log(data))
}


/**
 * Displays the results.
 */
function displayJSON(data) {
  console.log('DISPLAYJSON HIT')
  console.log("DATA", data)
  var contents = JSON.stringify(data)
  console.log('Contents:', contents)
  $('#results').text(contents)
  var evt = new Event('results-displayed')
  evt.results = contents
  document.dispatchEvent(evt)
}
console.log('~~~~~~~~~~~~~~~~~~END')
