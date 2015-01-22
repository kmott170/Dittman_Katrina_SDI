//alert("Test testing test");

//functions functionName(){ code to be run}
//function call - 'go button' - functionName();

//Creating a function that logs on to the console "Hello"

function printHello(){
    console.log("Hello! You are inside of the print hello function.");
}

//Function call to start our print hello function
printHello();

printHello();


//Create a function to print more text

function printMore(){
    console.log("Inside of print more. Here is more things to look at.");
}

printMore();

//Create a function that calculates the area of a rectangle

function calcArea(){
    //Create variables for width, height and area
    var width = 20;
    var height = 30;
    var area = width * height;
    
    console.log("The area is " + area);
}

calcArea();