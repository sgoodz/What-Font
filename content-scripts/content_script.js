console.log("content_scirpt.js loaded...");

//var extensionEnabled = false;

let fontPickerSelected = false;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  //extensionEnabled = request.enableExtension;
  fontPickerSelected = request.fontPickerSelected;
});

console.log(fontPickerSelected);

document.addEventListener("mouseover", function (event) {
  if (fontPickerSelected) {
    var target = event.target;
    var font = window.getComputedStyle(target).fontFamily;
    console.log("Font: " + font);
  }
});
