$(document).ready(function() {
	//Variables for the questions, answers, and timer
	var timer;
	var intervalId;
	var correctAnswer = ["Mars", "13.8 billion years old", "8 minutes", "Neutron star", "Milky Way Galaxy"];
	//This array holds the correct answer images
	var correctImage = ["0.gif", "1.gif", "2.gif", "3.gif", "4.gif"];
	//User's scores
	var wrongAnswer = 0;
	var unanswered = 0;
	var score = 0;
	var answers = {
        a1: ["Mercury", "Pluto", "Jupiter", "Mars"],
        a2: ["7 billion years old", "13.8 billion years old", "800 billion years old", "1.2 trillion years old"],
        a3: ["1 minute", "8 minutes", "Instantaneous", "24 hours"],
        a4: ["White dwarf", "Red Giant", "Neutron star", "White hole"],
        a5: ["Mily Galaxy", "Pinwheel Galaxy", "Milky Way Galaxy", "Andromeda Galaxy"]
      };
	var questions = {
        q1: ["Which of these planets are the closest to us?"],
        q2: ["How old is the universe?"],
        q3: ["How long does it take for light to reach the Earth?"],
        q4: ["Which of these can be formed in a supernova?"],
        q5: ["What is the name of the galaxy we live in?"]
      };
      // Variable to hold the index of current question and answer.
      var questionIndex = 0;
      var answerIndex = 0;
      // Array of questions and answers
      var questionsArray = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5];
      var answersArray = [answers.a1, answers.a2, answers.a3, answers.a4, answers.a5];
      var gameBegin;
      //Hides the reset button when the window reloads
      $('#reset').hide();

	//Start game on click
	$('#startButton').click(function(){
		//Start game function
		gameBegin = true;
		startGame();
		//Hide the start button
		$('#startButton').hide();
		showReset();
	});
	//Start game function
	function startGame() {
		console.log("Game Started!");
		startQuestion();
	};
	//Starts the first question
	function startQuestion(){
		//Start the timer
		time();
		//This asks and displays the questions
      	$('#start').html('<h2>'+questionsArray[questionIndex][0]+'</h2>');
      	logArray(answersArray[answerIndex]);
	};
	//This functions moves to the next question 
	//and moves to the score card at the end
	function next() {
		//There are 5 questions
		if(questionIndex < 4){
			questionIndex++;
			answerIndex++;
			startQuestion();
			$("#answer1, #answer2, #answer3, #answer0").show();
			$('#images').hide();
		}
		//On the last question
		else if (questionIndex === 4){
			gameBegin = false;
			stop();
			$('#images').hide();
			$("#answer1, #answer2, #answer3, #answer0").hide();
			$('#display').hide();
			$('#start').html("<h2>Your score is: "+ score+"<br>You guessed wrong: "+wrongAnswer+"<br>You didn't guess at all: "+unanswered+'</h2>');
			showReset();
		}
	};
	//Checks if the user clicks on the right or wrong answer
	$("#answer1, #answer2, #answer3, #answer0").on("click", function(word) {
		//Grabs the string of the clicked answer
		var word = "";
		word = $(this).text();
		//Check if the correct answer and prints correct answer
		if(word == correctAnswer[answerIndex]){
			$('#start').html("<h2>You're Right!</h2>");
			$("#answer1, #answer2, #answer3, #answer0").hide();
			showImage();
			setTimeout(next, 4000);
			stop();
			score++;
		}
		//Checks if the wrong answer is selected
		else if (word != correctAnswer[answerIndex]){
			$('#start').html("<h2>You're Wrong! The correct answer is: "+correctAnswer[answerIndex]+"</h2>");
			$("#answer1, #answer2, #answer3, #answer0").hide();
			showImage();
			stop();
			setTimeout(next, 4000);
			wrongAnswer++;
		}
      });
	//Functions shows and displays correct image
	function showImage() {
		$('#images').show();
		$('#images').html("<img src='assets/images/"+correctImage[answerIndex]+"'>");
	};
	//Reset button action
	$("#reset").on("click", function(){
		//Reset game to first question
		reset();
		//Hides reset button
		$('#reset').hide();
	});
	//Use this function to print the answers
	function logArray(list) {
        for (var i = 0; i < list.length; i++) {
          $('#answer'+i).html(list[i]+'<br>');
        }
      }
     //This functions starts the timer
	function time(){
		//Set timer to 30 seconds
		timer = 30;
		clearInterval(intervalId);
		//Decreases timer by 1 second
      	intervalId = setInterval(decrement, 1000);
	}
	//Resets game to beginning
	function reset(){
		questionIndex = 0;
		answerIndex = 0;
		$("#answer1, #answer2, #answer3, #answer0").show();
		$('#display').show();
		time();
		wrongAnswer = 0;
		unanswered = 0;
		score = 0;
		startGame();
	}
	//Hides or show reset button
	function showReset(){
		if (gameBegin == true) {
			$('#reset').hide();
		}
		else if (gameBegin == false){
			$('#reset').show();
		}
	}
	//This functions decreases the timer and stops it
    function decrement() {
      // Decrease timer by one
      timer--;
      //Display the time remaining
      $("#display").html("<h2>Time Remaining: " + timer + "</h2>");
      //  Once number hits zero...
      if (timer === 0) {
        //Alert the user that time is up.
        console.log("Time Up!");
        $("#display").html("<h2>Time's Up!</h2>");
        $('#start').html('<h2>You ran out of time! The correct answer is: '+correctAnswer[answerIndex]+'</h2>');
		$("#answer1, #answer2, #answer3, #answer0").hide();
		stop();
		setTimeout(next, 3000);
		unanswered++;
      }
  	}
  	//Stop the timer
    function stop() {
    	//Stops the count here and set the clock to not be running.
    	clearInterval(intervalId);
    }
});