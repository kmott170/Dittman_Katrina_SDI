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


//Declaring an array for the volume of a cone
var arryCone = [];

//Prompting the user to enter "3.14.16" or Pi
arryCone[0]= prompt("Please enter the value of Pi: ", "3.1416");
//Prompting the user to enter a radius in inches
arryCone[1]= prompt("Please enter the value of the radius in inches:");
//Prompting the user to enter radius in inches
arryCone[2]= prompt("Please enter the value of height in inches:");
//Array being used to define r to the power of 2
arryCone[1] *= arryCone[1];
//Array to solve for the volume of a cone
arryCone[3]= (arryCone[2] * arryCone[1] * arryCone[0])/3;
//Printing out the solution to the console for the equation above
console.log("The volume of the cone is: " + arryCone[3] + " in inches.")

//Z is being
var z= 0;
z++;
console.log("Z is being incremented for the purpose of this assignment to satisfy the 2 assignment operator requirement.\n Z was 0 but after the ++ it is now: " + z + "." );


/*

 "Cylinder"

 Pi = 3.1416

 Radius = 5^2

 Height = 10

 Solution = 785.4 inches

 "Cone"

 Pi = 3.1416

 Radius = 7^2

 Height = 12

 Solution = 615.7536


 */
