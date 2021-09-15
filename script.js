let divNote = document.createElement("div");

divNote.setAttribute("id", "divNote");
divNote.style.position = "fixed";
divNote.style.top = "2px";
divNote.style.left = "2px";
divNote.style.width = "50vh";
divNote.style.height = "50vh";
divNote.style.backgroundColor = "#e7e9eb";
divNote.style.border = "1px darkgrey solid";
divNote.style.zIndex = 1000;
document.body.appendChild(divNote);

console.log(divNote);

let divTextArray = document.createElement("textarea");
divTextArray.style.resize = "none";
divTextArray.style.width = "95%";
divTextArray.style.height = "75%";
divTextArray.style.fontFamily = "Arial, Helvetica";
divTextArray.style.margin = "5px";
divTextArray.style.border = "1px solid grey";
divTextArray.style.position = "relative";

divNote.appendChild(divTextArray);

let btnSize = document.createElement("button");
btnSize.textContent = "Resize";
btnSize.classList.add("btnResize");
btnSize.style.height = "40px";
btnSize.style.width = "50px";
btnSize.style.position = "relative";
btnSize.style.backgroundColor = "#059862";
//---
divNote.appendChild(btnSize);
//---
btnSize.onclick = function () {
  if (btnSize.classList.contains("btnResize")) {
    document.getElementById("divNote").style.height = "10px";
    btnSize.classList.replace("btnResize", "btnExpand");
  } else {
    document.getElementById("divNote").style.height = "50vh";
    btnSize.classList.replace("btnExpand", "btnResize");
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
divNote.appendChild(btnSave);

//=====================
let btnPaste = document.createElement("button");
btnPaste.textContent = "Paste";
btnPaste.style.height = "40px";
btnPaste.style.width = "50px";
btnPaste.style.position = "relative";
btnPaste.style.backgroundColor = "#d5f200";
btnPaste.style.margin = "2px";
//---
divNote.appendChild(btnPaste);

btnPaste.onclick = function () {
  if (divTextArray.value == "") {
    divTextArray.value = window.getSelection().toString();
  } else {
    divTextArray.value =
      divTextArray.value + "\n" + window.getSelection().toString();
  }
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
divNote.appendChild(btnClear);

btnClear.onclick = function () {
  divTextArray.value = "";
};

btnSave.onclick = function () {
  var textFileAsBlob = new Blob([divTextArray.value], {
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
};
