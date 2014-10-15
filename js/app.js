

	var userGuess;
	var randomNumber;
	var feedback;
	var validGuess;
	var guessCount;
	var maxValue;


$(document).ready(function(){

    console.log("hi");

	newGame();
	randomNumber  = pickNumber();

	$(".new").click(function(){
    	newGame();
		randomNumber  = pickNumber();

  	});

	
	$("form").submit(function(event){
		
		event.preventDefault();
    	userGuess = $('#userGuess').val();
    	if (userWon) {
    		$('#feedback').text("You already won!  Start a new game.");

    	}
    	else {
			validGuess = checkValidity(userGuess);
			if (validGuess) {
				giveFeedback(userGuess, randomNumber);
				recordGuess(userGuess);
			}
		}
			$('#userGuess').val("");

  });


	
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  	/*--- Display information modal box ---*/
  	$(".showcorn").click(function(){
    	$(".overlay2").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close2").click(function(){
  		$(".overlay2").fadeOut(1000);
  	});


});

/* Define Functions */

maxValue = 1000;

newGame = function(){
	setFocus();
	$('#feedback').text("Make your Guess!"); 
	userGuess = "";
	$('#userGuess').val("");
	validGuess = 0;
	console.log("valid guess: " + validGuess);
	guessCount = 0;
	userWon = 0;


}


function pickNumber() {
	randomNumber = Math.floor(Math.random() * maxValue);
	console.log("Random Number: " + randomNumber);
	return randomNumber;
}


function setFocus() {
		document.getElementById("userGuess").focus();
	}

function checkValidity(userGuess) {
	if (isNaN(userGuess)) {
		$('#feedback').text("Oops! Please enter a number"); 
		return false;
		}

		else if (userGuess < 0) {
		$('#feedback').text("Oops! Enter a postive number");
		return false;
	}

		else if (userGuess > maxValue) {
		$('#feedback').text("Must be less than " + maxValue);
		return false; 
	}

	else {
		return true;
	}

}


	function giveFeedback(guess, answer) {
		console.log ("answer " + answer)
		console.log ("guess " + guess)
		if (+guess === +answer) {
			$('#feedback').text("You got it!  It took you " +guessCount + " guesses.");
			userWon = 1;
		}
		else if (Math.abs(answer-guess) < 10) {
			$('#feedback').text("VERY Hot! (within 10)");
		}

		else if (Math.abs(answer-guess) < 30) {
			$('#feedback').text("Hot! (within 20)");
		}
		
		else if (Math.abs(answer-guess) < 50) {
			$('#feedback').text(" Warm (within 50)");
		}

		else if (Math.abs(answer-guess) <= 100) {
			$('#feedback').text("Cool (within 100)");
		}

		else {
			$('#feedback').text("Cold (off by more than 100)");
		}
	}



	function recordGuess (guess) {
		guessCount++;
		console.log("Valid Guesses: "+guessCount);
		$('#count').text(guessCount);
		$('#guessList').append('<li>'+guess+'</li>');
	}








