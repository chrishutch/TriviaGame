$(document).ready(function() {
	//Variables for the questions, answers, and timer
	var timer = 30;
	var intervalId;
	var correctAnswer;
	var wrongAnswer;
	var answers = {
        a1: ["Mercury", "Pluto", "Jupiter", "Mars"],
        a2: ["7 billion years ago", "13.8 billion years ago", "800 billion years ago", "1.2 trillion years ago"],
        a3: ["1 minute", "8 minutes", "Instantaneous", "24 hours"],
        a4: ["White dwarf", "Red Giant", "Neutron star", "White hole"],
        a5: ["Mily Galaxy", "Pinwheel Galaxy", "Milky Way Galaxy", "Andromeda Galaxy"]
      };
	var questions = {
        q1: ["What's the closest planet to us?"],
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

	//Start game on click
	$('#startButton').click(function(){
		//Start game function
		startGame();
		//Hide the start button
		$('#startButton').hide();
	});

	//Start game function
	function startGame() {
		console.log("Game Started!");
		startQuestion();
	};
	function startQuestion(){
		//Start the timer
		time();
		//Question 1
      	$('#start').html('<h2>'+questionsArray[questionIndex][0]+'</h2>');
      	logArray(answersArray[answerIndex]);
    	//$('#theAnswers').html(answersArray[answerIndex]);
	};
	$('#next').click(function () {
		questionIndex++;
		answerIndex++;
		startQuestion();

	});
	//Use this function to print the answers
	function logArray(list) {
        for (var i = 0; i < list.length; i++) {
          $('#theAnswers').append(list[i]+'<br>');
          console.log(list[i]);
        }
      }
     //This functions starts the timer
	function time(){
		clearInterval(intervalId);
      	intervalId = setInterval(decrement, 1000);
	}
	//This functions decreases the timer and stops it
    function decrement() {
      //  Decrease timer by one.
      timer--;
      //Display the time remaining
      $("#display").html("<h2>Time Remaining: " + timer + "</h2>");
      //  Once number hits zero...
      if (timer === 0) {
        //This stops the function.
        clearInterval(intervalId);
        //Alert the user that time is up.
        console.log("Time Up!");
        $("#display").html("<h2>Time's Up!</h2>");
      }
    }





});