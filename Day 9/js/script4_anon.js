//alert("blah blah blah");

//Anon functions
//Widely used in JS and Jquery
//Important in Object oriented program
//Can be used interchangeably with normal function, if done right

//Very quick and easy
//save on memory


/*
 *Basic structure of anon function
 *var functionName = function(){
    Code to run goes here
 }
 */

//Function call BEFORE The normal function is defined
var results2 = triArea(6,7);
console.log("Before the function results2 is " +results2);
//Create a Normal function for area of a triangle

function triArea(b, h){
    
    //Area = 1/2 * base * height
    var area = .5*b*h;
    return area;
}

//Function Call

var results1 = triArea(5,6);
console.log(results1);

//Create an anon function that calcs the area of a triangle

var triAreaAnon = function (b, h){
    var area = .5 * b*h;
    return area;
    
}

//function call after define of an anon function

var results3 = triAreaAnon(4,5);
console.log("Results of anonymous function after defined is " +results3);