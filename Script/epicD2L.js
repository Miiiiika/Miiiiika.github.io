console.log("hi mom!"); //confirm JS running
//Defining page elements as variables
const announcements = document.getElementById("announcements");
const notifications = document.getElementById("notifications");
const links = document.getElementById("links");
const brightspace = document.getElementById("brightspace");
const homePage = [announcements, notifications, links, brightspace]; //all homepage content
const classes = document.getElementsByClassName("class"); //all classes
const classesContainers = document.getElementsByClassName("classContainer"); //All class main pages
let classSelected = false;
let currentSelect;
//Function to select class.
const selectClass = function(classDiv) {
	if (classSelected == false) { //no class selected, display the class just clicked on
		for (let i = 0; i < homePage.length; i++) { //hide homepage
			homePage[i].style.display = "none";
		}
		classes[classDiv].style.backgroundColor = "#6682c6";
		classesContainers[classDiv].style.display = "block";
		classSelected = true;
		currentSelect = classDiv;
	} else if (classSelected == true && currentSelect !== classDiv) { //class already selected, user clicked on a different class
		for (let i = 0; i < classes.length; i++) { //show classes as unselected
			classes[i].style.backgroundColor = "#556ca5";
			classesContainers[i].style.display = "none";
		}
		classes[classDiv].style.backgroundColor = "#6682c6";
		classesContainers[classDiv].style.display = "block";
		currentSelect = classDiv;
		classSelected = true;
	} else if (classSelected == true && currentSelect == classDiv) { //user clicked on same class currently selected (display home)
		for (let i = 0; i < homePage.length; i++) { //reveal Homepage
			homePage[i].style.display = "block";
		}
		classesContainers[classDiv].style.display = "none";
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