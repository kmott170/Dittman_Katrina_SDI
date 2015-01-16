
 /*
Katrina Dittman
SDI Campus
1/13/2015
Prompting
*/

//alert("Testing Test Test Testing Test Test");

// Basic conditional statement

//Create a boolean variable to test

 var oldEnough= false;


//If the child is old enough, then print to the console, you can ride

/*
Basic structure of "if" statement

if(condition to test){
 Code to run if the condition is true
}
 */

 if(oldEnough) {
  //Code inside of curly brackets will run if the test is true
  //This code will be skipped if the test is false
  console.log("You can ride the coaster!");

 }

console.log("What comes after the if statement.");

//Relational expression

//If the kid is over 40" tall, then he can ride

 var kidHeight= 30;

 //Create variable for minimum height
 var minHeight= 48;

 if(kidHeight > minHeight){
  console.log("You are tall enough to ride.");

 } else{
  //This code will run if the test is false
  console.log("Sorry, you are to short.");
 }
