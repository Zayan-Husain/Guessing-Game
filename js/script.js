$(document).ready(function(){
	var numberToGuess = Math.floor(Math.random() * 100) + 1;
	var numberOfGuesses = 0;
	$(".container").on("click", ".submitNumber", function() {
		var userGuess = $(".numberInput").val();
		var textToChange = $(".higherOrLowerTxt");
		if(userGuess == numberToGuess) {
			textToChange.text("You won! It took you " + numberOfGuesses + " guesses");
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
