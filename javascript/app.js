// INITIALIZING ALL GLOBAL VARIABLES


var questions = ["!P || (Q && ( !P||Q ))",
				"P && (Q || !(Q && P))", 
				"P && Q && !(P||Q)",
				"Q && ((!P || Q) || (P && !Q))"];
var initPage =  `<button type="button" class="btn btn-success" id="questions">START</button>` 
var mainContent;
var score;
var right = 0;
var wrong = 0;
var time;
var setTime;
var counter = 0;
var qAnswers = ["True","False","False","True"];

//________________________________________________________________________________________________________________________________________

//Start Game
function startGame(){
	$("#test").html(initPage);
};

$("#test").on("click", function(){
	loadQuestions();
});

function loadQuestions(){
		$("#test").html(`<p> True or False? </p> ${questions[counter]} <p> <form><input id="True" type="radio" name="True" value="True"> True <br>
			<input id="False" type="radio" name="False" value="False"> False <br>`);
		$(`#${qAnswers[counter]}`).on("click",function(){
			right++;
		})
		counter++;
		loadQuestions();



};
function timer() {
	time = setInterval(decrement, 1000);
	setTime = 16;
	 function decrement() {
		if (qT>0) {
			qT--;
			$(".timer").html("<h2 class='timeID'>Time:</h2><h3 class ='timeID'>" + qT + "</h3>")
		}
		if (qT === 0) {
			clearInterval(countDown);
			$(".timer").html("<h2>Times Up!</h2>");
			outOfTime();
		}
	}
};

startGame();

