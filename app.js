var btnTranslate = document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
//console.log(txtInput);
var outputDiv= document.querySelector("#output");
//console.log(outputDiv);
//callback
function clickHandler() {
   outputDiv.innerText= "abnmcjk "+txtInput.value;
}
btnTranslate.addEventListener("click",clickHandler);

// console.log(btnTranslate);