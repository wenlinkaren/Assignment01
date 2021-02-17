//Ex.1
let someMonth;
function theMonth();
let currentMonth;
let summerMonth;
let myLibraryFunction;   // convert identifiers to Camel Case notation

//Ex.2
10 				    // numeric literal 
"Hi!" 		     	// string literal 
true				// Boolean literal 
null 				// null literal 

//Ex.3
let complexExpression = 3 * (4 / 5) + 6;  // example of complex expression
let x;
let variableExpression = x + 3;  // example of variable expression

//Ex.4
let firstName;
let lastName;
let address;
let city;
let state;
let zipCode;
let yourAge;
let referralSource;
let mayWeContactYou;  // declare 9 variables for identifiers

//Ex.5
let firstName;
let lastName;
let city;
firstName = "Wenlin";
lastName = "He";
city = "San Diego";  //first way

let firstName = "Wenlin";
let lastName = "He";
let city = "San Diego";  //second way

let firstName = "Wenlin", lastName = "He", city = "San Diego"; //third way

//Ex.6
let zipCode = "My zip code is" + 92121; // create a variable, add a number and a string
window.console.log(zipCode); // display the coerced result in the browser's console window

//Ex.7
let mayWeContactYou = true + "by email"; // create a variable, add a boolean and a string
document.write(mayWeContactYou); // display the coerced result

let zipCode = 92121 + true; // create a variable, add a number and a boolean 
document.write(zipCode); // display the coerced result

//Ex.8
let someString = "Who conce said, \"only two things are infinite, the universe and human stupidity, and I\'m not sure about the former.\""; // fix string literal
window.console.log(someString); 

//Ex.9
let x = null;
window.console.log(x); // create variable that produces a null value in the console window

let y;
window.console.log(y); // create variable that produces a undefined value in the console window

//Ex.10
typeof "myName"; // return string
typeof 2;        // return number
typeof true;     // return boolean
typeof [1,2,3];  // return object
typeof undefined;// return undefinded 

//Ex.11
alert ("Hello " + "Wenlin He" + ", welcome to the JavaScript class!");  // an alert box with 2 concatenation operators

//Ex.12
let _name = "Wenlin He";
alert ("Hello " + _name + ", welcome to the JavaScript class!"); // substitute my name with a variable called name

//Ex.13
let course = "JavaScript";
alert ("Hello " + _name + ", welcome to the" + course + "class!");  // display the string of text with variables

//Ex.14
alert ("Hello Wenlin He.\nWelcome to the JavaScript class!"); // a line break is added

//Ex.15
let _name = prompt ("Please enter your name", "Wenlin He");  // add a prompt box to ask user name
alert ("Hello " + _name + ", welcome to the JavaScript class!"); 

//Ex.16
let course = prompt ("Please enter your class", "JavaScript");  // add a prompt box to ask class name
alert ("Hello " + _name + ", welcome to the" + course + "class!"); 

//Ex.17
let x = 10, y = 20;
console.log(x + y);  // display the sum of two numbers in the console window

//Ex.18
let x = 20;
x += 20;  // add and assign 20 to variable x
console.log(x); 

//Ex.19
let x = 20;
x *= 5;   // multiply and assign 5 to variable x
console.log(x); 

//Ex.20
let x = 20 % 3;
x /= 1;   // divide and assign 1 to variable x
console.log(x); 

//Ex.21
let firstScore = 66, secondScore = 77, thirdScore = 88;
alert (firstScore > 80 || secondScore > 80 || thirdScore > 80);  // return true

//Ex.22
let age = 12, height = 120, weight = 40;
alert (age <= 10 && height <= 150 && weight <= 50);   // return false