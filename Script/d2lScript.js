console.log("JS Running");
let helpDisplay = false;
let toolsDisplay = false;
let annDisplay = false; //ann = announcement
const topButton1 = document.getElementById('topButton1');
const topButton2 = document.getElementById('topButton2');
const anDDButton = document.getElementById('anDDButton')
const helpMenu = document.getElementById("helpMenu");
const toolsMenu = document.getElementById("toolsMenu");
const annMenu = document.getElementById("annDropDown")
const helpButton = function () {
	if (helpDisplay == false) {
		document.getElementById("helpMenu").style.display = 'block';
		helpDisplay = true;
	} else {
		document.getElementById("helpMenu").style.display = "none";
		helpDisplay = false;
	}
	if (toolsDisplay == true || annDisplay == true) {
		document.getElementById("toolsMenu").style.display = 'none';
		toolsDisplay = false;
		document.getElementById("annDropDown").style.display = "none";
		annDisplay = false;
	}
}

const toolsButton = function () {
	if (toolsDisplay == false) {
		document.getElementById("toolsMenu").style.display = 'block';
		toolsDisplay = true;
	} else {
		document.getElementById("toolsMenu").style.display = 'none';
		toolsDisplay = false;
	}
	if (helpDisplay == true || annDisplay == true) {
		document.getElementById("helpMenu").style.display = 'none';
		helpDisplay = false;
		document.getElementById("annDropDown").style.display = "none";
		annDisplay = false;
	}
}
const annButton = function() {
	if (annDisplay == false) {
		document.getElementById("annDropDown").style.display = 'block';
		annDisplay = true;
	} else {
		document.getElementById("annDropDown").style.display = "none";
		annDisplay = false;
	}
	if (toolsDisplay == true || helpDisplay == true) {
		document.getElementById("toolsMenu").style.display = 'none';
		toolsDisplay = false;
		document.getElementById("helpMenu").style.display = 'none';
		helpDisplay = false;
	}
}

addEventListener('click', function(event) {
	if (!helpMenu.contains(event.target) && !topButton1.contains(event.target)) {
		helpMenu.style.display = "none";
		helpDisplay = false;
	}
	if (!topButton2.contains(event.target) && !toolsMenu.contains(event.target)) {
		toolsMenu.style.display = "none"
		toolsDisplay = false;
	}
	if (!anDDButton.contains(event.target) && !annMenu.contains(event.target)) {
		annMenu.style.display = "none"
		annDisplay = false;
	}
})