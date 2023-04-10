console.log("JS Running");
let helpDisplay = false;
let toolsDisplay = false;
const topButton1 = document.getElementById('topButton1');
const topButton2 = document.getElementById('topButton2');
const helpMenu = document.getElementById("helpMenu");
const toolsMenu = document.getElementById("toolsMenu");
const helpButton = function () {
	if (helpDisplay == false) {
		document.getElementById("helpMenu").style.display = 'block';
		helpDisplay = true;
	} else {
		document.getElementById("helpMenu").style.display = "none";
		helpDisplay = false;
	}
	if (toolsDisplay == true) {
		document.getElementById("toolsMenu").style.display = 'none';
		toolsDisplay = false;
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
	if (helpDisplay == true) {
		document.getElementById("helpMenu").style.display = 'none';
		helpDisplay = false;
	}
}
addEventListener('click', function(event) {
	if (!helpMenu.contains(event.target) && !topButton1.contains(event.target) && !topButton2.contains(event.target) && !toolsMenu.contains(event.target)) {
		helpMenu.style.display = "none";
		toolsMenu.style.display = "none"
		helpDisplay = false;
	}
})