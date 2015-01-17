/*
Katrina Dittman
SDI Campus
1/13/2015
Prompting
*/

//alert("The Volume Of A Cylinder & Cone");

//Declaring an array for the volume of a cylinder
var arryCyl = [];

//Prompting the user to enter "3.1416" or Pi
arryCyl[0]= prompt("Please enter the value of Pi: ", "3.1416");
//Prompting the user to enter a radius in inches
arryCyl[1]= prompt("Please enter the value of the radius in inches:");
//Prompting the user to enter a height in inches
arryCyl[2]= prompt("Please enter the value of height in inches:");
//Array being used to define r to the power of 2
arryCyl[1] *= arryCyl[1];
//Array to solve for the volume of a cylinder
arryCyl[3]= arryCyl[2] * arryCyl[1] * arryCyl[0];
//Printing out the solution to the console for the equation above
console.log("The volume of the cylinder is: " + arryCyl[3] + " in inches." );


