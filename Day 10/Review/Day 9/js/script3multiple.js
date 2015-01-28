//alert("Warning Warning Warning");

//Prompt the user for a width & height
//Then calculate both the area and the perimeter of a rectangle

//First setup the area of a rectangle function
function areaRect(w,h) {
    
    //Area of a rectangle is width * height
    var area = w*h;
    return area;
}

//Setup the perimeter function
function periRect(w,h) {
    //perimeter of a rectangle is 2*width + 2*height
    var perimeter = 2 * w + 2 * h;
    //return the perimeter
    return perimeter;

}

//prompt the user for width & height
var width = prompt("Please enter the width of your rectangle");
//Validate it
while (width ==="" || isNaN(width)) {
    //re-prompt the user
    width = prompt("Please do not leave blank and only use numbers. \nWhat is the width:");
}


var height = prompt("Please enter the height of your rectangle:")

//Validate
while(height==="" || isNaN(height)){
height = prompt("Please do not leave blank and only type in numbers:");    
}

//Function call both functions... ONE at a time

var resultsArea = areaRect(width, height);

var resultsArea = periRect(width, height);

//Report out to the user
console.log("The area of the rectangle is " +resultsArea+ " The perimeter " +perimeter);


//Combined function to calculate the perimeter and the area
function combinedRect(w, h) {
    //Calculate the area
    
    var area = w*h;
    
    //calc perimeter
    var peri = 2*w + 2*h;
    
    //Return both values
    return [area, peri];
}


//Function Call
var combinedResults = combinedRect(width, height);
console.log(combinedResults[0]);
console.log(combinedResults[1]);