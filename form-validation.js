$(document).ready(function() {
  $("#user-guess-form").validate({
     debug: true,

    rules: {
      maxrangeinput: {
        required: true,
        min: changeMinRange,
      },

      minrangeinput: {
        required: true,
        max: changeMaxRange,
      },
      
      guess1: {
        required: true,
        range: [changeMinRange, changeMaxRange]
      },
      guess2: {
        required: true,
        range: [changeMinRange, changeMaxRange]
      },
      challenger1: "required",
      challenger2: "required",
    },
    // // Specify validation error messages
    messages: {
      minrangeinput: "Enter a value",
      maxrangeinput: "Enter a value",
      guess1: {
        required: "Enter a value"
        //range: "Enter a number between {0} and {1}"
      },
      guess2: {
        required: "Enter a value"
        //range: "Enter a number between {0} and {1}"
      },
      challenger1: "Enter a name",
      challenger2: "Enter a name"
    }

  });

  $("#submit").click(function(){  // capture the click
        if($("#user-guess-form").valid()){   // test for validity
          leftBigNumber.innerText = numInput1.value;
          rightBigNumber.innerText = numInput2.value;
          challenger1NameDisplay.innerText = challenger1NameInput.value;
          challenger2NameDisplay.innerText = challenger2NameInput.value;
          clearButton.classList.remove("disabled");
          resetButton.classList.remove("disabled");

          if(parseInt(numInput1.value) < randomNum) {
            challengerOneResults.innerHTML = "That's too low!";
          } else if(parseInt(numInput1.value) === randomNum) {
            challengerOneResults.innerHTML = "BOOM!";
          } else if(parseInt(numInput1.value) > randomNum) {
            challengerOneResults.innerHTML = "That's too high!";
          } else { 
            challengerOneResults.innerHTML = "";
          }
        

          if(parseInt(numInput2.value) < randomNum) {
            challengerTwoResults.innerHTML = "That's too low!";
          } else if(parseInt(numInput2.value) === randomNum) {
            challengerTwoResults.innerHTML = "BOOM!";
          } else {
            challengerTwoResults.innerHTML = "That's too high!";
          }

          //debugger;
         

          if(challengerOneResults.innerHTML  || challengerTwoResults.innerHTML === "BOOM!") {
            
            var winner;

            if (challengerOneResults.innerHTML === "BOOM!") {
              winner = challenger1NameInput.value;
            } else if (challengerTwoResults.innerHTML === "BOOM!") {
              winner = challenger2NameInput.value;
            }

            var winnerCard = document.createElement("div");
            winnerCard.classList.add("box4");
            var winnerName = document.createElement("p");
            
            updateMinMaxRange();

            //use document.creatElement to create a new winnerCARD 

             winnerCard.innerHTML = `<h4><span id ="challenger1-name">${challenger1NameDisplay.innerText}</span><span class="vs"> VS </span>
             <span id= "challenger2-name">${challenger2NameDisplay.innerText}</span></h4><hr/>
            <h1 id="winner-name">${winner}</h1>
            <h1 id="winner-display">WINNER</h1>
           <hr/>
          <button id="close">X</button></p>`
      // debugger;
      winnerCardContainer.append(winnerCard);
      var closeButton = document.querySelector("#close");
      closeButton.addEventListener("click", function () {
});

          } 
                // do stuff if form is valid
            console.log("Valid");
          } else {
            // do stuff if form is not valid
            console.log("Not Valid");
          }

        });

});