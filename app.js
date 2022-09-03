var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
//console.log(txtInput);
var outputDiv = document.querySelector("#output");
//console.log(outputDiv);
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
   return serverURL + "?" + "text=" + text;
}
function errorHandler(error) {
   console.log("error occured", error);
   alert("Something wrong with server! try again after sometime");
}
function clickHandler() {
   //taking input
   var inputText = txtInput.value;
   //calling server for processing
   fetch(getTranslationURL(inputText))
      .then(response => response.json())
      .then(json => {
         var translatedText = json.contents.translated;
         outputDiv.innerText = translatedText; // output
        })
      .catch(errorHandler)
}

btnTranslate.addEventListener("click",clickHandler);

//callback
// function clickHandler() {
//    outputDiv.innerText= "abnmcjk "+txtInput.value;
// }


// console.log(btnTranslate);