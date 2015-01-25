/*
 Katrina Dittman
 01/24/2015
 SDI Campus 
 */

//alert("Warning! Warning!");

//Create variables for the min and max value

var min = prompt("Please enter a min value");


//Validate our min prompt
while(isNaN(min) || min==="" || Number(min)>= Number(max)){
    //Re-prompt the user for the correct information
    
    if (isNaN(max)) {
        max= prompt("Please only use numbers");
        
    }else if (max==="")
    
        max=
    }
    
    min= prompt ("Please do not leave blank and only use numbers \nWhat is the min value:");
}


var max = prompt("Please enter a max value");



//Create function
function randomizer (mn, mx){
    //generate a random number
    var randomNum = Math.round(Math.random() * (mx-mn) +mn);
    
    //Return that random number to our main code
    return randomNum;
}

//Function call BUT create a variable to catch the return value

var randomNum = randomizer(min, max);
console.log("Your random number between " +min+ " and " +max+ " is " +randomNum);