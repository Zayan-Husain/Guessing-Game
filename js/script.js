$(document).ready(function(){
	var numberToGuess = 4;
	$(".container").on("click", ".submitNumber", function() {
		var userGuess = $(".numberInput").val();
		var textToChange = $(".higherOrLowerTxt");
		if(userGuess == numberToGuess) {
			textToChange.text("You won!");
		}

		if(userGuess < numberToGuess) {
			textToChange.text("Higher.");
		}

		if(userGuess > numberToGuess) {
			textToChange.text("Lower.");
		}
	})
});