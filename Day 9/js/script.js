/*
 Katrina Dittman
 01/24/2015
 SDI Campus 
 */

//alert("Warning! Warning!");

// Creating variables
var min = parseInt(prompt("Enter a minimum value"));
while (isNaN(min) || min === "") {
    min = parseInt(prompt("Please do not leave blank and only use numbers. What is the min value?"));
}
var max = parseInt(prompt("Enter a maximum value"));
while (isNaN(max) || max === "" || min > max) {
    if (isNaN(max)) {
        max = parseInt(prompt("Please use only numbers"));
    } else if (max === "") {
        max = parseInt(prompt("Please do not leave blank"));
    } else {
        max = parseInt(prompt("Max value cannot be less than min value"));
    }
}
function randomizer(min, max) {
    // Generate random number
    var randomNum = Math.round(Math.random() * (max - min) + max);
    // Return number
    return randomNum;
}

// Function call and catching the variable
var randomNum = randomizer(min, max);
console.log("Your random number between " + min + " and " + max + " is " + randomNum);
// 15 random numbers between min and max
// Create for loop
for (var i = 0; i < 15; i++) {

    console.log();
}