function check(){
	var fråga1 = document.quiz.fråga1.value;
	var fråga2 = document.quiz.fråga2.value;
	var fråga3 = document.quiz.fråga3.value;
	var correct = 0;
	


		if (fråga1 == "Monty_Python") {
			correct++;
		}
		if (fråga2 == "Turtle") {
			correct++;
		}
		if (fråga3 == "Textprogrammering") {
			correct++;
		}
		var messages = ["Bra jobbat!", "Nästan alla rätt","Försök en gång till"];
		var pictures = ["img/gif.gif", "img/meh.gif", "img/fail.gif"];
		var range;
		if (correct == 0) {
		range = 2;
		}

		if (correct > 0 && correct < 3) {
		range = 1;
		}

		if (correct == 3) {
		range = 0;
		}

document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "Du fick " + correct + " rätta svar.";
document.getElementById("picture").src = pictures[range];
}