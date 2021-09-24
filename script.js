let divContainer = document.createElement("div");

divContainer.setAttribute("id", "divContainer");
divContainer.style.position = "fixed";
divContainer.style.top = "2px";
divContainer.style.left = "2px";
divContainer.style.width = "60vh";
divContainer.style.height = "50vh";
divContainer.style.backgroundColor = "#e7e9eb";
divContainer.style.border = "1px darkgrey solid";
divContainer.style.zIndex = 1000;
divContainer.style.resize = "both";
divContainer.style.overflow = "auto";
document.body.appendChild(divContainer);

console.log(divContainer);

let divNote = document.createElement("div");
divNote.style.width = "95%";
divNote.style.height = "75%";
divNote.style.fontFamily = "Arial, Helvetica";
divNote.style.fontSize = "12px";
divNote.style.margin = "5px";
divContainer.style.backgroundColor = "white";
divNote.style.border = "1px solid green";
divNote.style.position = "relative";
divNote.style.overflow = "scroll";

divContainer.appendChild(divNote);

let divTextArea = document.createElement("textarea");
divTextArea.style.resize = "none";
divTextArea.style.width = "95%";
divTextArea.style.height = "75%";
divTextArea.style.fontFamily = "Arial, Helvetica";
divNote.style.fontSize = "12px";
divTextArea.style.margin = "5px";
divTextArea.style.border = "1px solid red";
divTextArea.style.position = "relative";
divTextArea.style.display = "none";

divContainer.appendChild(divTextArea);

/*
let btnSize = document.createElement("button");
btnSize.textContent = "Resize";
btnSize.classList.add("btnResize");
btnSize.style.height = "40px";
btnSize.style.width = "50px";
btnSize.style.position = "relative";
btnSize.style.backgroundColor = "#059862";
//---
divContainer.appendChild(btnSize);
//---
btnSize.onclick = function () {
  if (btnSize.classList.contains("btnResize")) {
    document.getElementById("divContainer").style.height = "10px";
    btnSize.classList.replace("btnResize", "btnExpand");
  } else {
    document.getElementById("divContainer").style.height = "50vh";
    btnSize.classList.replace("btnExpand", "btnResize");
  }
};
*/

//=====================
let btnPaste = document.createElement("button");
btnPaste.textContent = "Paste";
btnPaste.style.height = "40px";
btnPaste.style.width = "50px";
btnPaste.style.position = "relative";
btnPaste.style.backgroundColor = "#5df200";
btnPaste.style.margin = "2px";
//---
divContainer.appendChild(btnPaste);

btnPaste.onclick = function () {
  let selectedText = window.getSelection().toString();
  selectedText = selectedText.replace(/(?:\r\n|\r|\n)/g, "<br>");
  if (divTextArea.value == "") {
    divTextArea.value = selectedText;
  } else {
    divTextArea.value = divTextArea.value + "<br><br>" + selectedText;
  }
  divNote.innerHTML = divTextArea.value;
};

//=====================
let btnClear = document.createElement("button");
btnClear.textContent = "Clear";
btnClear.style.height = "40px";
btnClear.style.width = "50px";
btnClear.style.position = "relative";
btnClear.style.backgroundColor = "#f435c5";
btnClear.style.margin = "2px";
//---
divContainer.appendChild(btnClear);

btnClear.onclick = function () {
  divTextArea.value = "";
  divNote.innerHTML = "";
};

//=====================
let btnExport = document.createElement("button");
btnExport.textContent = "Export";
btnExport.style.height = "40px";
btnExport.style.width = "50px";
btnExport.style.position = "relative";
btnExport.style.backgroundColor = "#277CF1";
btnExport.style.margin = "2px";
//---
divContainer.appendChild(btnExport);

btnExport.onclick = function () {
  var textFileAsBlob = new Blob([divTextArea.value], {
    type: "text/plain",
  });
  var fileNameToSaveAs = "file.html";
  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";

  // Chrome allows the link to be clicked
  // without actually adding it to the DOM.
  downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  downloadLink.click();
};

//=====================
let btnBold = document.createElement("button");
btnBold.textContent = "Bold";
btnBold.style.height = "40px";
btnBold.style.width = "50px";
btnBold.style.position = "relative";
btnBold.style.backgroundColor = "#d5f200";
btnBold.style.margin = "2px";
//---
divContainer.appendChild(btnBold);

btnBold.onclick = function () {
  var selection = window.getSelection();
  var selectionText = selection.toString();
  const regex = new RegExp(selectionText, "g");
  divTextArea.value = divTextArea.value.replace(
    regex,
    "<span style='background-color:yellow;'>" + selectionText + "</span>"
  );
  divNote.innerHTML = divTextArea.value;
};

//=====================
let btnEdit = document.createElement("button");
btnEdit.textContent = "Edit";
btnEdit.style.height = "40px";
btnEdit.style.width = "50px";
btnEdit.style.position = "relative";
btnEdit.style.backgroundColor = "#2aaCF1";
btnEdit.style.margin = "2px";
//---
divContainer.appendChild(btnEdit);

btnEdit.onclick = function () {
  if (divTextArea.style.display == "none") {
    divTextArea.style.display = "block";
  } else {
    divTextArea.style.display = "none";
  }
};

//=====================
let btnSave = document.createElement("button");
btnSave.textContent = "Save";
btnSave.style.height = "40px";
btnSave.style.width = "50px";
btnSave.style.position = "relative";
btnSave.style.backgroundColor = "#277CF1";
btnSave.style.margin = "2px";
//---
divContainer.appendChild(btnSave);

btnSave.onclick = function () {
  divNote.innerHTML = divTextArea.value;
};
