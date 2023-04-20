console.log("hi mom!"); //confirm JS running
//Defining page elements as variables
const announcements = document.getElementById("announcements");
const notifications = document.getElementById("notifications");
const links = document.getElementById("links");
const brightspace = document.getElementById("brightspace");
const homePage = [announcements, notifications, links, brightspace]; //all homepage content
const classesBar = document.getElementById("classesBar");
const classesStatus = document.getElementById("classesStatus");
const classes = document.getElementsByClassName("class"); //all classes
const classImages = document.getElementsByClassName("classImage");
const classesContainers = document.getElementsByClassName("classContainer"); //All class main pages
let classSelected = false;
let classesOpened = false;
let currentSelect;
//Function to select class.
const selectClass = function(classDiv) {
	if (classSelected == false) { //no class selected, display the class just clicked on
		for (let i = 0; i < homePage.length; i++) { //hide homepage
			homePage[i].style.display = "none";
		}
		classes[classDiv].style.backgroundColor = "#6682c6";
		classImages[classDiv].style.filter = "brightness(100%)";
		classesContainers[classDiv].style.display = "block"; //display selected class
		classSelected = true;
		closeClasses();
		currentSelect = classDiv;
	} else if (classSelected == true && currentSelect !== classDiv) { //class already selected, user clicked on a different class
		for (let i = 0; i < classes.length; i++) { //show classes as unselected, close any class divs that are open
			classes[i].style.backgroundColor = "#556ca5";
			classImages[i].style.filter = "brightness(70%)";
			classesContainers[i].style.display = "none";
		}
		classes[classDiv].style.backgroundColor = "#6682c6";
		classImages[classDiv].style.filter = "brightness(100%)";
		classesContainers[classDiv].style.display = "block"; //display selected class
		currentSelect = classDiv;
		closeClasses();
		classSelected = true;
	} else if (classSelected == true && currentSelect == classDiv) { //user clicked on same class currently selected (display home)
		for (let i = 0; i < homePage.length; i++) { //reveal Homepage
			homePage[i].style.display = "block";
		}
		classesContainers[classDiv].style.display = "none"; //close current selected class
		classImages[classDiv].style.filter = "brightness(70%)";
		classes[classDiv].style.backgroundColor = "#556ca5";
		classSelected = false;
		currentSelect = -1; //no class will be -1, nothing selected.
	} 
}
//Show home page on home icon click
const goHome = function() {
	for (let i = 0; i < homePage.length; i++) { //reveal Homepage
		homePage[i].style.display = "block";
	}
	for (let i = 0; i < classes.length; i++) { //show classes as unselected
		classes[i].style.backgroundColor = "#556ca5";
		classesContainers[i].style.display = "none";
	}
	classSelected = false;
	currentSelect = -1; //no class will be -1, nothing selected.
}

const openClasses = function() { //use screen.width to fix classes not opening properly.
	if (classesOpened == false) {
		for (let i = 0; i < homePage.length; i++) { //reveal Homepage
			homePage[i].style.display = "none";
			classesContainers[i].style.display = "none";
		}
	classesBar.style.display = "block";
	classesStatus.innerHTML = "Close";
	classesOpened = true;
	} else {
		for (let i = 0; i < homePage.length; i++) { //reveal Homepage
			homePage[i].style.display = "block";
			classesContainers[i].style.display = "none";
		}
		classesBar.style.display = "none";
		classesStatus.innerHTML = "Open"
		classesOpened = false;
	}
}

const closeClasses = function() {
	console.log(window.innerWidth)
	if (window.innerWidth < 800) {
		classesBar.style.display = "none";
		classesStatus.innerHTML = "Open"
		classesOpened = false;
	} 
}