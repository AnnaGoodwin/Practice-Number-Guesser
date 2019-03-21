var minRange = document.querySelector("#min-range-display");
var maxRange = document.querySelector("#max-range-display");
var userInput = document.querySelector("#min-range-input");
var userInput2 = document.querySelector("#max-range-input");
var update = document.querySelector("#update");
var numInput1 = document.querySelector("#guess1");
var numInput2 = document.querySelector("#guess2");
var leftBigNumber = document.querySelector(".left-big-number");
var rightBigNumber = document.querySelector(".right-big-number");
var submitButton = document.querySelector("#submit");



update.addEventListener("click", function() {
  var changeMinRange = userInput.value;
  minRange.innerHTML = changeMinRange;
  console.log(userInput.value);
  var changeMaxRange = userInput2.value;
  maxRange.innerHTML = changeMaxRange;
  console.log(userInput2.value);

});


submitButton.addEventListener("click", function() {
  leftBigNumber.innerText = numInput1.value;
  rightBigNumber.innerText = numInput2.value;

});



// var challengerOneName =
// document.querySelector("#challenger1");
// var challengerOneText =
// document.querySelector("#guess1");
// var challengerTwo = 
// document.querySelector("#challenger2");
// var challengerTwoGuess =
// document.querySelector("#guess2");
// var getUserNameGuessButton = 
// document.querySelector("#submit");

// getUserNameGuessButton.addEventListener("click",
//   function () {
//     var guesses = challengerOneName.value;
//     console.log(guesses)
//   }

// var getUserInputButton = 
// document.querySelector =()