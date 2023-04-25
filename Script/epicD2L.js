console.log("A Wooden Horse"); //confirm JS running
//Defining page elements as variables
const announcements = document.getElementById("announcements");
const notifications = document.getElementById("notifications");
const links = document.getElementById("links");
const brightspace = document.getElementById("brightspace");
const homePage = [announcements, notifications, links, brightspace]; //all homepage content
const classesBar = document.getElementById("classesBar");
const classesStatus = document.getElementById("classesStatus");
const classes = document.getElementsByClassName("class"); //all classes
let openedClasses = document.getElementsByClassName("selectedClass");
const classImages = document.getElementsByClassName("classImage");
let openedImages = document.getElementsByClassName("selectedClassImage");
let hiddenClassContainers = document.getElementsByClassName("hiddenClassContainer");
let openClassesContainers = document.getElementsByClassName("classContainer"); //All class main pages
let classSelected = false;
let classBarOpened = false;
let currentSelect;
let classHidden = false;
//Function to select class.
const selectClass = function(classDiv) {
	if (classSelected == false) { //no class selected, display the class just clicked on
		for (let i = 0; i < homePage.length; i++) { //hide homepage
			homePage[i].className = "closedHome";
		}
		classes[classDiv].className = "selectedClass";
		classImages[classDiv].className = "selectedClassImage";
		hiddenClassContainers[classDiv].className = "classContainer";
		classSelected = true;
		closeClasses();
		currentSelect = classDiv;
	} else if (classSelected == true && currentSelect !== classDiv) { //class already selected, user clicked on a different class
		openedClasses[0].className = "class";
		openedImages[0].className = "classImage";
		if (classHidden == false) { //Ugly but it fixes the problem on mobile lol Ill make it nicer better
			openClassesContainers[0].className = "hiddenClassContainer";
		}
		classes[classDiv].className = "selectedClass";
		classImages[classDiv].className = "selectedClassImage";
		hiddenClassContainers[classDiv].className = "classContainer";
		currentSelect = classDiv;
		closeClasses();
		classSelected = true;
	} else if (classSelected == true && currentSelect == classDiv) { //user clicked on same class currently selected (display home)
		openedClasses[0].className = "class";
		openedImages[0].className = "classImage";
		if (classHidden == false) { //Ugly but it fixes the problem on mobile lol Ill make it nicer better
			openClassesContainers[0].className = "hiddenClassContainer";
		}
		for (let i = 0; i < homePage.length; i++) { //show homepage
			homePage[i].className = "openedHome";
		}
		classSelected = false;
		currentSelect = -1; //no class will be -1, nothing selected.
	} 
}
//Show home page on home icon click
const goHome = function() {
	for (let i = 0; i < homePage.length; i++) { //reveal Homepage
		homePage[i].className = "openedHome";
	}
	openedClasses[0].className = "class";
	openedImages[0].className = "classImage";
	classSelected = false;
	currentSelect = -1; //no class will be -1, nothing selected.
}

// Used on mobile aspect ratios. The classes selector (sidebar on desktop) is toggled.
const openClasses = function() {
	if (classBarOpened == false) {
		for (let i = 0; i < homePage.length; i++) { //hide Homepage
			homePage[i].className = "closedHome";
		}
		if (openClassesContainers.length > 0) {
			openClassesContainers[0].className = "hiddenClassContainer"
			classHidden = true;
		}
		classesBar.style.display = "block";
		classesStatus.innerHTML = "Close";
		classBarOpened = true;
	} else {
		for (let i = 0; i < homePage.length; i++) { //reveal Homepage
			homePage[i].className = "openHome";
		}
		classesBar.style.display = "none";
		classesStatus.innerHTML = "Open"
		classBarOpened = false;
	}
}

const closeClasses = function() { //Closes class bar on mobile.
	console.log(window.innerWidth)
	if (window.innerWidth < 800) {
		classesBar.style.display = "none";
		classesStatus.innerHTML = "Open"
		classBarOpened = false;
	} 
}