/*
Katrina Dittman
1/10/2015
Day 3 Coding
 */

// Single Lined comment

//This is and alert
//alert("Testing to see if this is connected!");

//Console.log - allows programmers to see information
console.log("This is the console.");


// Declare a variable
// We use the keyword of var
var whatever1;    // Declaration of a variable
whatever1 = 42;   // Definition of a variable

console.log(whatever1);

// Declare and define a variable
var a = 2;
console.log(a);

//Simple math
a = a+3;
console.log(a);

var b;
b= a+3;
console.log(b);
console.log(a);

//Find our age
var yearBorn = 1991;

//age is calculated by current year minus year born
var currentYear = 2015;

var age = currentYear - yearBorn - 1 ;
console.log(age);

//Math
// +, -, *, /

//Find area of triangle
// 1/2 * base * height
var base = 4;
var height= 5;

var areaTriangle = 1/2 * base * height;
console.log(areaTriangle);

// Modulo - %
//Gives remainder
var remainder = 32%10;
console.log (remainder);

//Find if even or odd
// Modulo by 2 %2
// 1 if it is odd
// 0 if even
var evenOrOdd = 67%2;
console.log(evenOrOdd);

//Assignment Operators
/*
 = Assignment
 ++ Adds 1 to the variable
 -- Subtracts 1 from the variable
 += Addition assignment
 -= Subtraction assignment
 /= Division assignment
 *= Multication assignment
 */

var counter = 1 ;
counter++; // counter = counter + 1;
console.log(counter);

counter--;  // counter = counter - 1;
console.log(counter);

counter +=3; //counter = counter +3;
console.log(counter);

counter -=2;  //counter = counter -2;
console.log(counter);

counter /=2;   //counter = counter /2;
console.log(counter);

counter *=4;   //counter = counter *4;
console.log(counter); 
