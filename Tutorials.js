/*
//Tutorial p1
//Different ways to define variables.
var coolString = "hello!";
coolString = "goodbye!";
console.log(coolString);

var firstNum, secondNum, sumNum;
firstNum = 20;
secondNum = 10.3;
sumNum = firstNum + secondNum;
console.log(sumNum);

var coolNum = 5, coolerNum = 10, epicSum = coolNum + coolerNum;
console.log(epicSum);
	
//Note that the quotation markers are different. Use \ too.
var name = "my name is 'mika'";
name = 'my name is "mika"';
name = 'it\'s lit!';
console.log(name);

//undefined vs null
var undef;
console.log(undef);
var nope = null;
console.log(nope);

//Variable type
var soTrue = true;
console.log(typeof epicSum);
console.log(typeof coolString);
console.log(typeof secondNum);
console.log(typeof soTrue);
*/
/*
//
//Tutorial p2
//assigment operators:
var number = 5;
//adding
number += 5;
console.log(number);
number ++
console.log(number);
//subtracting
number --
console.log(number);
number -= 5;
console.log(number);
//multiplying
number *= 2;
console.log(number);
//dividing
number /= 5;
console.log("The number is:" + number);
*/
//
/*
//Tutorial string operators
var age = 21;
var info = "My name is JJ, I am " +age+ " years old.";
console.log(info);
age ++;
var info = "My name is JJ, I am " +age+ " years old.";
console.log(info);
var number = 5 + " " + 6;
console.log (number);
*/
//Tutorial conditions
var number = 5;
var otherNumber = 13;
if (number == 6 || otherNumber == 12) {
	console.log("True!");
} else if (number == 5 && otherNumber == 13) {
	console.log("So true!");
} else {
	console.log("What the hell man.");
}