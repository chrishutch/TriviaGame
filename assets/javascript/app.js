$(document).ready(function() {
	//Variables for the questions, answers, and timer
	var timer = 30;
	var intervalId;
	var correctAnswer;
	var wrongAnswer;
	var answers;
	var question;

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
		//Question 1
		question = "What's the closest star to us?";
		console.log(question);
		$('#start').html('<h2>'+question+'</h2>');
		time();

	};
	function time(){
		clearInterval(intervalId);
      	intervalId = setInterval(decrement, 1000);
	}
    function decrement() {
      //  Decrease number by one.
      timer--;
      //  Show the number in the #show-number tag.
      $("#display").html("<h2>Time Remaining: " + timer + "</h2>");
      //  Once number hits zero...
      if (timer === 0) {
        //  ...run the stop function.
       // startQuestion();
        clearInterval(intervalId);
        //  Alert the user that time is up.
        console.log("Time Up!");
      }
    }





});