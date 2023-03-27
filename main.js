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

//Snake game
//Grid variable is a nested array.
//"positionY" corresponds to the first array position, eg. positionY at 0 will give "grid[0][x]"
//Each position in the nested array is the x position, so Y=1,X=2 gives "grid[1][2]" = "#twoOne"
//I messed up the labels so that it displays X first, while the grid works on Y first, but its ok.
let grid = [["#zeroZero","#oneZero","#twoZero","#threeZero"]];
grid [1] = ["#zeroOne","#oneOne","#twoOne","#threeOne"]
grid [2] = ["#zeroTwo","#oneTwo","#twoTwo","#threeTwo"]
grid [3] = ["#zeroThree","#oneThree","#twoThree","#threeThree"]
let positionX = 0;
let positionY = 0;
//Each function here does the following steps when the corresponding button is pressed:
//1: checks to see if the user will move off the map. If it wont:
//2: creates a variable called "oldY/X" stored as the current value of "positionX/Y"
//3: increases "positionX/Y" by 1.
//4: finds the old position of the X and changes it to an o
//5: finds the new position of the X and changes it to an X
let northButton = function() {
	if (positionY >= 1) {
		let oldY = positionY;
		positionY -= 1;
		document.querySelector(grid[oldY][positionX]).innerHTML = "o";
		document.querySelector(grid[positionY][positionX]).innerHTML = "X";
	}
}
let southButton = function() {
	if (positionY <= 2) {
		let oldY = positionY;
		positionY += 1;
		document.querySelector(grid[oldY][positionX]).innerHTML = "o";
		document.querySelector(grid[positionY][positionX]).innerHTML = "X";
	}
}
let westButton = function() {
	if (positionX >= 1) {
		let oldX = positionX;
		positionX -= 1;
		document.querySelector(grid[positionY][oldX]).innerHTML = "o";
		document.querySelector(grid[positionY][positionX]).innerHTML = "X";
	}
}
let eastButton = function() {
	if (positionX <= 2) {
		let oldX = positionX;
		positionX += 1;
		document.querySelector(grid[positionY][oldX]).innerHTML = "o";
		document.querySelector(grid[positionY][positionX]).innerHTML = "X";
	}
}
