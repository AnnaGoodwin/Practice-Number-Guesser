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

var changeMinRange = 1;
var changeMaxRange = 100;


update.addEventListener("click", function() {
  changeMinRange = parseInt(userInput.value);
  minRange.innerHTML = changeMinRange;
  console.log(userInput.value);
  changeMaxRange = parseInt(userInput2.value);
  maxRange.innerHTML = changeMaxRange;
  console.log(userInput2.value);
  randomNum = getRandomNumSecret(changeMinRange, changeMaxRange);
  console.log(randomNum);
  //update range values for range rule in validation function
  $( "#guess1" ).rules( "add", {
  required: true,
  range: [changeMinRange, changeMaxRange],
  messages: {
    required: "Required input",
    // range: jQuery.validator.format("Enter a number between {0} and {1}")
    }
  });
  $( "#guess2" ).rules( "add", {
  required: true,
  range: [changeMinRange, changeMaxRange],
  messages: {
    required: "Required input",
   }
  });
});


// submitButton.addEventListener("click", function() {
//   // leftBigNumber.innerText = numInput1.value;
//   rightBigNumber.innerText = numInput2.value;
//   challenger1NameDisplay.innerText = challenger1NameInput.value;
//   challenger2NameDisplay.innerText = challenger2NameInput.value;
//   clearButton.classList.remove("disabled");
//   resetButton.classList.remove("disabled");
//   if(parseInt(numInput1.value) < randomNum) {
//   	challengerOneResults.innerHTML = "That's too low!";
//   } else if(parseInt(numInput1.value) === randomNum) {
//   	challengerOneResults.innerHTML = "BOOM!";
//   } else {
//   	challengerOneResults.innerHTML = "That's too high!";
//   }
//  if(parseInt(numInput2.value) < randomNum) {
//     challengerTwoResults.innerHTML = "That's too low!";
//   } else if(parseInt(numInput2.value) === randomNum) {
//     challengerTwoResults.innerHTML = "BOOM!";
//   } else {
//     challengerTwoResults.innerHTML = "That's too high!";
//   }
//   if(challenger1NameInput.value === undefined) {
//     nameError1.classList.remove("hidden")
//   }

// });

resetButton.addEventListener("click", function() {
  clearButton.classList.add("disabled");
  resetButton.classList.add("disabled");
  resetGame();

});

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
  return;
};

function getRandomNumSecret(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};	


