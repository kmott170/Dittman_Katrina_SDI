/*
 Katrina Dittman
 01/22/2015
 Day 8 Returns
 */

//alert("help help help help HELP");

//Create a function to calculate the area of a rectangle
function calcArea(w,h){
  
  //Calc Area
  var area = w*h;
  //console.log(area);
  return area;
    
}

//Function call

//Create a variable that will catch the return value

var returnedArea = calcArea(77,9);


//THIS DOES NOT WORK!!
//console.log(area);

console.log(returnedArea);

//Create a function to calculate the area of a circle
// area = pi*r*r

function circleArea(radius) {
    
    var area = Math.PI * radius * radius;
    
    //return this area
    return area;
}

//function call

 var result= circleArea(6);
 console.log("The area of the circle is " + result);
 
 //Had two circle with the same radius. What is the total area?
 
 var areaTwo = result *2;
 
 console.log("The area of both circles is " +areaTwo.toFixed(2));
 
 var result2 = circleArea(3);
 console.log("The area of a circle with a radius of 3 is " +result2);
 
 //Prompt user for radius. Calculate area.
 
 var userRad = prompt("Please type in a radius:");
 
 //Validate prompt
 while(isNaN(userRad) || userRad===""){
    userRad = prompt("Please only use numbers. \nType in a radius:");
}

//Parse the variable
userRad = parseInt(userRad);
 
 //Create a variable to catch the results!
 var userResults = circleArea(userRad);
 console.log("The area of your circle with a radius of " +userRad+ " is " +userResults);