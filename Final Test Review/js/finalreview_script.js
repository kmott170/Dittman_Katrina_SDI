
 /*
Katrina Dittman
SDI Campus
1/13/2015
Prompting
*/

//alert("Testing Test Test Testing Test Test");

//Testing if statement

 var time= 10;

 if (time < 12){
  //Code to be tested if true
 console.log("Good Morning!");
 }


 //Testing if/else statment

 var pizzaSlices = 20;

 if(pizzaSlices > 15){

  //If code runs true
  console.log("You have enough pizza!");

 } else {
  console.log("You do not have enough pizza!");
 }

//Ternaries
var crateOfApples = 70;

 (crateOfApples < 60) ? console.log("You do not have enough crates of apples!") : console.log("You have enough crates of apples!");

 var age= 10;
 var movies;

 movies = (age < 15) ? "You cannot watch movies by yourself!" : "You can watch movies by yourself!";
 console.log(movies);


 var age2 = 16;

 var movies2 = (age2 < 12) ? "Thomas The Train Movie" : (age2 < 17) ? "Small Soldiers" : "Lucy";

 console.log("You should go see " +movies2);


function areaOfSquare (width, height){

 //Calculating the area of a square

 var area = width * height;

 //Returning variable
 return area;

}

 //Prompting for width & height

 var height = parseInt( prompt("Please enter your height for your equation."));

 while (isNaN(height) || (height==="") {
  height = parseInt(prompt("Please only enter numbers. \nDo not leave blank."));
 }

  var width = parseInt( prompt("Please enter your width for your equation."));
 while (isNaN(width) || width==="") {
  width = parseInt( prompt("Please only enter numbers. \nDo not leave blank."));
 }

 //Function call

 var returnedArea = areaOfSquare(width, height)

 //Print to console
 console.log("The area of your square is " +returnedArea);
