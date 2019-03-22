var minRange = document.querySelector("#min-range-display");
var maxRange = document.querySelector("#max-range-display");
var userInput = document.querySelector("#min-range-input");
var userInput2 = document.querySelector("#max-range-input");
var update = document.querySelector("#update");
var numInput1 = document.querySelector("#guess1");
var numInput2 = document.querySelector("#guess2");
var leftBigNumber = document.querySelector(".left-big-number");
var rightBigNumber = document.querySelector(".right-big-number");
var challenger1NameDisplay = document.querySelector(".challenger1-name-display");
var challenger2NameDisplay = document.querySelector(".challenger2-name-display");
var challenger1NameInput = document.querySelector("#challenger1");
var challenger2NameInput = document.querySelector("#challenger2")
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
  challenger1NameDisplay.innerText = challenger1NameInput.value;
  challenger2NameDisplay.innerText = challenger2NameInput.value;
});

function getRandomNumSecret(min, max) {
	min = Math.ceil(userInput).value;
	max = Math.floor(userInput2).value;
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
