/*
 Katrina Dittman
 01/22/2015
 Arguments & Parameters
 */
//alert("Help help help youuuuu!!");

//Arguments - Goes in the function call
//Parameters - Goes in the function definition

function calcArea(w,h) { //Parameters go here
    
    //var width = 10;
    //var height = 20;
    //var area = width*height;
    
    
    var area = w*h;
    console.log("The area is " +area);
    
}


//Function Call

calcArea(10,20);
calcArea(5,4);

//Calculate Dog Years
//Put in human years, get out dog years

function dogYears(humanAge) {  //humanAge Parameter 

var dogAge = humanAge*7;
console.log("Dog age is "+dogAge);

}

//Function call with arguments
dogYears(24);

dogYears(6);

var userAge = prompt("How old are you?");
dogYears(Number (userAge) );
