var numberToGuess = Math.floor(Math.random() * 100) + 1;
$(document).ready(function(){
	var numberOfGuesses = 1;
	$(".container").on("click", ".submitNumber", function() {
		var userGuess = $(".numberInput").val();
		var textToChange = $(".higherOrLowerTxt");
		if(userGuess == numberToGuess) {
			if(numberOfGuesses == 1) {
				textToChange.text("You won! It took you " + numberOfGuesses + " guess.");
			} else if(numberOfGuesses => 2) {
				textToChange.text("You won! It took you " + numberOfGuesses + " guesses.");
			}
		}

		if(userGuess < numberToGuess) {
			textToChange.text("Higher.");
			numberOfGuesses ++;
		}

		if(userGuess > numberToGuess) {
			textToChange.text("Lower.");
			numberOfGuesses ++;
		}
	})
	
	
});
