/*
 Katrina Dittman
 01/22/2015
 Scopes
 */


//alert("Wow whoo yay!");

//Variable Scope
//Variable inside & outside of a function

//Try not to repeat variable names, however in large files this is going to be impossible.

//Variables created inside of functions can only be seen inside of those functions

//Create a variable for width in our main code

var width = 5; //Scoped outside of the function or main code

//Create a function that calculates the perimeter of a rectangle

function calcPeri(){
    
    var width = 10; //Scoped to the function calcPeri
    console.log("Inside of the function the value of width is " +width);
    
    var height= 20;
    var perimeter = width*2 + height*2;
    console.log("Inside of the function the perimeter is " +perimeter);
}

console.log("Before the all " +width);


calcPeri();

console.log("After call " +width);