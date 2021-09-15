let boutonAction=document.getElementById("action");
console.log(boutonAction);
boutonAction.addEventListener("click", function(){
    getSelectionText();
    alert("test");
    // paste dans la pop up
});

function getSelectionText() {
    console.log("step1");
    if (window.getSelection) {
        console.log("step2");
      //only work if supported
      var selection = window.getSelection(); //get the selection object
      alert(
        "Selected text: \n" + selection.toString()
      );
    }
  }
