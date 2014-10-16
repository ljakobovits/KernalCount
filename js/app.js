

	var userGuess;
	var randomNumber;
	var feedback;
	var validGuess;
	var guessCount;
	var maxValue;
	var previousGuess;


$(document).ready(function(){

    console.log("yooo");

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

				if (previousGuess) {
					comparePriorGuess(userGuess, randomNumber, previousGuess);
					
				}

			}
		}
		previousGuess = userGuess;
		console.log("previous guess: " + previousGuess)
		$('#userGuess').val("");
		if (!userWon) {
			guessCount++;
			$('#count').text(guessCount);
		}

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
	guessCount = 1;
	userWon = 0;
	$('#count').text(guessCount);
	$('#guessList').text("");
	console.log("reset");
	previousGuess = 0;

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
		else if (Math.abs(answer-guess) < 5) {
			$('#feedback').text("You're VERY Hot!");
		}

		else if (Math.abs(answer-guess) < 10) {
			$('#feedback').text("You're Hot!");
		}
		
		else if (Math.abs(answer-guess) < 30) {
			$('#feedback').text("You're Warm.");
		}

		else if (Math.abs(answer-guess) < 50) {
			$('#feedback').text("You're Cool.");
		}

		else if (Math.abs(answer-guess) <= 100) {
			$('#feedback').text("You're Cold.");
		}

		else {
			$('#feedback').text("You're Very Cold.");
		}
	}


	function comparePriorGuess(guess, answer, lastGuess) {
		console.log ("prior guess");

		if (+guess === +answer) {
			
		}

		else if(Math.abs(answer-guess) > Math.abs(answer-lastGuess))
		{
			$('#feedback').append(" Getting Colder.");
		}

		else
		{
			$('#feedback').append(" Getting Hotter.");
		}
	}



	function recordGuess (guess) {
		console.log("Valid Guesses: "+guessCount);
		$('#guessList').append('<li>'+guess+'</li>');
	}








