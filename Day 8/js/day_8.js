
 /*
Katrina Dittman
SDI Campus
1/13/2015
Prompting
*/

//alert("Testing Test Test Testing Test Test");

//User leaves it blank?
//Returns an empty text string ""

var movie= prompt("What is your favorite movie?");

while(movie===""){
    //Then the user left the prompt blank
    //Reprompt the user
    movies = prompt("Please don't leave this blank.  \nWhat is your favorite movie?")
}


//Test to see if the user typed in a number or not
//isNaN() - Is not a number
//Test strings return true
//number returns false


var ticketPrice = prompt("How much is a movie ticket?");

while (isNan(ticketPrice)) {
    //User did not type in a number
    //reprompt for number
    ticketPrice = prompt("Please type in a number. \n What is the cost of the movie ticket?");
}


//Use both validations in the same while loop
var age = prompt("To get into R rated movies, you must know your age. \nHow old are you?");

//Validate that the prompt is not blank and is a number

while(isNaN(age) || age=== ""){
//The user types in a text string or left it blank
console.log("Inside of while loop");
age-prompt("Oops, Something went wrong. \nPlease type in only numbers. What is your age?");
} else{
    age-prompt("Please do not leave blank \nWhat is your age?");
    
}

//Validating something specific

var movieGenre= prompt("Do you want to see any action movie or comedy?");

while (movieGenre !="action" && movieGenre!="comedy") {
    
    
}

