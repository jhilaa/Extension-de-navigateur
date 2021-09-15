getLocalStorage();

let newText;
function getCurrentTab() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
    chrome.tabs.sendMessage(
      tab[0].id,
      { greeting: "hello" },
      function (response) {
        if (document.getElementById("textarea").value == "") {
          newText = response;
        } else {
          newText = newText + "\n" + response;
        }

        document.getElementById("textarea").value = newText;
        setLocalStorage(newText);
      }
    );
  });
}

let boutonAction = document.getElementById("action");
boutonAction.addEventListener("click", function () {
  getCurrentTab();
});

let boutonClear = document.getElementById("clear");
boutonClear.addEventListener("click", function () {
  chrome.storage.local.clear();
  newText = "";
  document.getElementById("textarea").value = "";
});

/*let textAreaInput = document.getElementById("textarea");
textAreaInput.addEventListener("change", function (e) {
  setLocalStorage(e.target.value);
});*/

let boutonSave = document.getElementById("save");
boutonSave.addEventListener("click", function () {
  setLocalStorage(document.getElementById("textarea").value);
});

function setLocalStorage(value) {
  chrome.storage.local.set({ key: value });
}
function getLocalStorage() {
  chrome.storage.local.get(["key"], function (result) {
    newText = result.key === undefined ? "" : result.key;
    document.getElementById("textarea").value = newText;
  });
}

function saveTextAsFile() {
  var textToWrite = document.getElementById("textarea").value;
  var textFileAsBlob = new Blob([textToWrite], {
    type: "text/plain",
  });
  var fileNameToSaveAs = "file.txt";
  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";

  // Chrome allows the link to be clicked
  // without actually adding it to the DOM.
  downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  downloadLink.click();
}

var buttonExport = document.getElementById("export");
buttonExport.addEventListener("click", saveTextAsFile);
