
 /*
Katrina Dittman
SDI Campus
1/13/2015
Prompting
*/

//alert("Testing Test Test Testing Test Test");

//Casting one variable type to be another variable type

var stringVar = "6";
var results = 7 + stringVar;
 console.log(results);

//Number (variable or value to cast) - treats anything inside the () as a number

var castingResults = 7 + Number(stringVar);
console.log(castingResults);

//String() - anything inside () is treated as a text string

var areaCode = 407;
var firstPart = 203;
var secondPart = 1234;

var phoneNumber = String(areaCode) + String(firstPart) + String (secondPart);
console.log(phoneNumber);

var phoneNumber2 = "("+String(areaCode)+")" + String(firstPart) +"-"+String(secondPart);
console.log(phoneNumber2);

var phoneNumber3 = "("+areaCode+")" + firstPart+"-"+ secondPart;
console.log(phoneNumber3);

//Parsing Integers
//parseInt() - it looks through a text string and returns and integer
//Only the first number in a string is returned.
//Text string has to start with a number
//Leading and trailing spaces are allowed
//If it can't convert the integer then it will return NaN
//NaN = "Not a Number"
//Parsing = looking through something

var a= parseInt("23 years old");
console.log(a);

var b= parseInt("I am 23 years old.");
console.log(b);

var c = Number("23 years old");
console.log(c);

//Prompts only return strings

var shoesHad = prompt("How many pairs of shoes did you own before?");

var shoesBought = prompt("How many pairs of shoes did you buy?");

//Add shoes had plus shoes bought for total number of shoes

var totalShoes = parseInt(shoesHad) + parseInt(shoesBought);
console.log(totalShoes);