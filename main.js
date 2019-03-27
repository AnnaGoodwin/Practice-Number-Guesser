var minRange = document.querySelector("#min-range-display");
var maxRange = document.querySelector("#max-range-display");
var userInput = document.querySelector("#minrangeinput");
var userInput2 = document.querySelector("#maxrangeinput");
var update = document.querySelector("#update");
var numInput1 = document.querySelector("#guess1");
var numInput2 = document.querySelector("#guess2");
var leftBigNumber = document.querySelector(".left-big-number");
var rightBigNumber = document.querySelector(".right-big-number");
var challenger1NameDisplay = document.querySelector(".challenger1-name-display");
var challenger2NameDisplay = document.querySelector(".challenger2-name-display");
var challenger1NameInput = document.querySelector("#challenger1");
var challenger2NameInput = document.querySelector("#challenger2");
var nameError1 = document.querySelector("#name-error-1");
var submitButton = document.querySelector("#submit");
var randomNum = 0;
var clearButton = document.querySelector("#clear");
var resetButton = document.querySelector("#reset");
var challengerOneResults = document.querySelector("#challenger-1-results");
var challengerTwoResults = document.querySelector("#challenger-2-results");


// var winnerCard = document.querySelector(".box4");
// var winnerName = document.querySelector("#winner-name");
var winnerCardContainer = document.querySelector(".section2")
var winnerCard = document.createElement("div");
var winnerName = document.createElement("p");

var cardName1 = document.querySelector("#challenger1-name");
var cardName2 = document.querySelector("#challenger2-name");
var closeButton = document.querySelector("#close");

var changeMinRange = 1;
var changeMaxRange = 100;

//event listener to update "Current Range" and generate random nunber//
update.addEventListener("click", function() {
  changeMinRange = parseInt(userInput.value);
  minRange.innerHTML = changeMinRange;
  console.log(userInput.value);
  changeMaxRange = parseInt(userInput2.value);
  maxRange.innerHTML = changeMaxRange;
  console.log(userInput2.value);
  randomNum = getRandomNumSecret(changeMinRange, changeMaxRange);
  console.log(randomNum);
  //rules to restrict input//
  $( "#minrangeinput" ).rules( "add", {
  required: true,
  max: changeMaxRange,
  messages: {
    required: "Required input",
    max: "Enter a number smaller than " + changeMaxRange
    }
  });
 
  $( "#maxrangeinput" ).rules( "add", {
  required: true,
  min: changeMinRange,
  messages: {
    required: "Required input",
    min: "Enter a number greater than " + changeMinRange
    }
  });

  $( "#guess1" ).rules( "add", {
  required: true,
  range: [changeMinRange, changeMaxRange],
  messages: {
    required: "Required input"
    }
  });

  $( "#guess2" ).rules( "add", {
  required: true,
  range: [changeMinRange, changeMaxRange],
  messages: {
    required: "Required input"
   }
  });
});

//event listener to clear out game input and reset game//
resetButton.addEventListener("click", function() {
  clearButton.classList.add("disabled");
  resetButton.classList.add("disabled");
  winnerCard.classList.add('hidden')
  resetGame();

});

//event listener to clear game input//
clearButton.addEventListener("click", function() {
  clearButton.classList.add("disabled");
  clearGame();

});

// closeButton.addEventListener("click", function () {
//   winnerCard.classList.add('hidden')
// });
//functions to reset and clear, called in above event listeners ^//
function resetGame() {
	clearGame();
	return;

};
function clearGame() {
  userInput.value = "";
  userInput2.value = "";
  numInput1.value = "";
  numInput2.value = ""; 
  challenger1NameInput.value = "";
  challenger2NameInput.value = "";
  leftBigNumber.innerText = "--";
  rightBigNumber.innerText ="--";
  challengerOneResults.innerText ="Results";
  challengerTwoResults.innerText = "Results";
  challenger1NameDisplay.innerText = "Challenger 1 Name";
  challenger2NameDisplay.innerText = "Challenger 2 Name";
  minRange.innerText = "1";
  maxRange.innerText = "100";
  randomNum = ""
  return;
};

function getRandomNumSecret(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};	


