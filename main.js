console.log("JS Started");
/* Random number generator.
1: Creates variable "number" based on uder input in textbox #value.
2: Makes a new variable "newNumber" which is number+1, since random function is not inclusive.
3: Creates variable "randNum" which first uses Math.random to generate a number between 0-"newNumber", and then rounds it down.
4: Puts the random number into the textbox "#winning"
*/
let randomNumber = function() {
	let number = parseInt(document.querySelector("#value").value);
	let newNumber = number += 1;
	console.log(newNumber);
	let randNum = Math.floor(Math.random() * newNumber);
	document.querySelector("#winning").innerHTML = randNum;
}

//Clicker game functions
//Update: sets all their labels to current values, rounded to 2 decimal places.
//Called every time any button is clicked, and also every second.
let update = function () {
	document.querySelector("#numberOfBoxes").innerHTML = Math.round(boxes*100)/100;
	document.querySelector("#numberOfPixels").innerHTML = pixels;
	document.querySelector("#boxesPerSecond").innerHTML = Math.round((pixels/10)*100)/100;
	document.querySelector("#boxesCost").innerHTML = Math.round(pixelCost*100)/100;
}

//Adds a box every time the main box is clicked
let boxes = 0;
let boxClick = function() {
	boxes++;
	update();
}
 //Adds a pixel, worth 0.1 boxes/second, when button is clicked, for 10 boxes.
//Increases cost of next pixel by 5%. 
let pixels = 0;
var pixelCost = 10;
let newPixel = function() {
	if (boxes >= pixelCost) {
		pixels++;
		boxes -= 10;
		pixelCost *= 1.05;
		update();
	}
}

//Adds 0.1 boxes for each pixel every second, and then updates labels.
let funVar = function() {
	let pixelSecs = (pixels/10);
	boxes += pixelSecs;
	update();
}
setInterval(funVar, 1000);