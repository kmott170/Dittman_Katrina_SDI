/*
Katrina Dittman
SDI Campus
1/13/2015
Day 4 In Class Assignment
Arrays
 */

//alert("Test Test Test Test");

//Create a basic array

var avengersNames=["Thor", "Iron Man", "Black Widow"];

//Print it out to the console

console.log(avengersNames);

//Print out a specific item

console.log(avengersNames[1]);

//Switch a team member - Black Widow for Hawk-eye

avengersNames[2] = "Hawk-eye";

console.log(avengersNames);

//Add a team member

avengersNames[3] = "Black Widow";

//Print out roster

console.log(avengersNames);

//Use a variable as an index number

var num= 2;
console.log(avengersNames[num]);

//Length property
//Dot syntax - fancy for using a period

console.log(avengersNames.length);

//Last index number is the length - 1

//Next open space? Is the length

//Recruit a new team member

avengersNames[avengersNames.length] = "The Hulk";
console.log(avengersNames);


