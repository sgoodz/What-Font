document.addEventListener("DOMContentLoaded", function () {
  var enableExtensionCheckbox = document.getElementById("enableExtension");
  const selectFontPickerElement = document.querySelector(".selectFont");

  let fontPickerSelected = false;

  selectFontPickerElement.addEventListener("click", function () {
    if (!fontPickerSelected) {
      selectFontPickerElement.style.background = "blue";
      fontPickerSelected = true;
    } else {
      selectFontPickerElement.style.background = "white";
      fontPickerSelected = false;
    }

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      let tabId = tabs[0].id;
      chrome.tabs.sendMessage(tabId, {
        fontPickerSelected: fontPickerSelected,
      });
    });
  });
});
