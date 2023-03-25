function randomNumber() {
	var randNum = Math.floor(Math.random() * 11);
	document.getElementById("winning").innerHTML = randNum;
}