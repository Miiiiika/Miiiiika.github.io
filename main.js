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
let grid = [["#zeroThree","#oneThree","#twoThree","#threeThree"]];
grid [1] = ["#zeroTwo","#oneTwo","#twoTwo","#threeTwo"];
grid [2] = ["#zeroOne","#oneOne","#twoOne","#threeOne"];
grid [3] = ["#zeroZero","#oneZero","#twoZero","#threeZero"];
let positionX = 0;
let positionY = 0;
//Creating a score variable and a random X and Y position for the score tile. Gets a random number between 1-3 so that the S never spawns on top of the X.
let score = 0;
let scoreY = Math.floor((Math.random() * 3) + 1);
let scoreX = Math.floor((Math.random() * 3) + 1);
document.querySelector(grid[scoreY][scoreX]).innerHTML = "S";

/*
moveFunction moves the X and scores if applicable.
0: Take arguments from the buttons for directionX/Y. For example, north button means 0x, +1y, and so gives "moveFunction(0, 1)".
1: Assign variables oldY/X to the current position values, assign potentialY/X to their values after moving.
2: Check if the potential movement would bring the X out of bounds. Then, check the direction that's being moved: if directionX = 0, we know it's is moving on the Y axis, and vice-versa.
3: modify positionX/Y by directionX/Y.
4: Find the grid position of the old X and assign it an "o".
5: Find the grid position of the new X and assign it an "X".
6: If the X is on a scoring tile, increase score by 1.
7: Assign random position to the next score tile (using a while loop ensures that the next tile is never the same tile as the current X), and then update the label for it.
*/
moveFunction = function(directionX, directionY) {
	let oldY = positionY;
	let oldX = positionX;
	let potentialY = positionY + directionY;
	let potentialX = positionX + directionX;
	if (potentialY > -1 && potentialY < 4 && directionX == 0) {
		positionY += directionY;
		document.querySelector(grid[oldY][positionX]).innerHTML = "o";
		document.querySelector(grid[positionY][positionX]).innerHTML = "X";
	} else if (potentialX > -1 && potentialX < 4 && directionY == 0) {
		positionX += directionX;
		document.querySelector(grid[positionY][oldX]).innerHTML = "o";
		document.querySelector(grid[positionY][positionX]).innerHTML = "X";
	}
	if (positionY == scoreY && positionX == scoreX) {
		score++;
		document.querySelector("#score").innerHTML = score;
		while (positionY == scoreY && positionX == scoreX) {
			scoreY = Math.floor(Math.random() * 4);
			scoreX = Math.floor(Math.random() * 4);
		}
		document.querySelector(grid[scoreY][scoreX]).innerHTML = "S";
	}
}
let northButton = function() {
	moveFunction(0, 1);
}
let southButton = function() {
	moveFunction(0, -1);
}
let westButton = function() {
	moveFunction(-1, 0);
}
let eastButton = function() {
	moveFunction(1, 0);
}