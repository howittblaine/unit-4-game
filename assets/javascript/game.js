$(document).ready(function() {

	// ******* NUMBER ARRAYS *******

	// random computer variable array
	var rand = [];

	for (var r = 19; r < 121; r++) {
		rand.push(r);
	}

	// card numbers array
	var cards = [];

	for (var c = 1; c < 13; c++) {

		cards.push(c);
	}

	// console.log(cards);

	// ******* GLOBAL VARIABLES *******

	// random variables selected by computer
	var randNumber; // number to match
	var cardNumbers = []; // for array of random card values

	var c1;
	var c2;
	var c3;
	var c4;

  var totalScore = 0; // user's score

	var wins = 0;
	var losses = 0;

	// ******* FUNCTIONS *******

	// pick a random number
	function pickRandomNumber(arr) {

		var x = arr[Math.floor(Math.random() * arr.length)];
		randNumber = x;
		$("#randomNumber").html(randNumber);

		console.log("random number: " + randNumber);

	} // END of pickRandomNumber function

	// pick random numbers for cards

	function pickRandomCards(arr) {

		for (var y = 0; y < 4; y++){

			var a = arr[Math.floor(Math.random() * arr.length)];

			cardNumbers.push(a);
		}
    // check which numbers have been picked
		console.log("card numbers: " + cardNumbers);

	} // END of pickRandomCards function

	function cardValues(arr) {

		// change value of each card button according to array
		for (i = 0; i < arr.length; i++) {

		$("#button-" + (i+1)).attr("value", arr[i]);
		console.log(this);
		}
		c1 = arr[0];
		c2 = arr[1];
		c3 = arr[2];
		c4 = arr[3];
	} // END of cardValues function

	function gameReset(x) {

		cardNumbers = []; // clears card number values

		pickRandomNumber(rand);

		pickRandomCards(cards);

		cardValues(cardNumbers);

		totalScore = 0;
		$("#totalNumber").html(totalScore);

		alert(x);
	} // END of gameReset function

	// *** GAME SETTINGS AT START ***

	pickRandomNumber(rand); // random number to match
	pickRandomCards(cards); // array of random card values
	cardValues(cardNumbers);

		// card button functions

		$("#button-1").on("click", function() {

			totalScore += c1;
			$("#totalNumber").html(totalScore);
		});

		$("#button-2").on("click", function() {

			totalScore += c2;
			$("#totalNumber").html(totalScore);
		});

		$("#button-3").on("click", function() {

			totalScore += c3;
			$("#totalNumber").html(totalScore);
		});

		$("#button-4").on("click", function() {

			totalScore += c4;
			$("#totalNumber").html(totalScore);
		});

	$("button").on("click", function() {
		// this is what happens if the user wins
		if (totalScore == randNumber) {

			wins++;
			console.log(totalScore);
			$("#totalNumber").html(totalScore);
			$("#wins").html("Wins: " + wins);


			setTimeout(function() {gameReset("BLAZERS WIN!!")}, 200);
		}

		else if (totalScore > randNumber){

			losses++;
			$("#totalNumber").html(totalScore);
			$("#losses").html("Losses: " + losses);

			setTimeout(function() {gameReset("YOU LOSE!")}, 200);
		}
	});

}); // end of script