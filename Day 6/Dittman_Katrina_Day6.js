/*
 Katrina Dittman
 01/17/2015
 Day 6
 SDI
 */

//alert("JavaScript works!");

//Is my steak done?

/*
 120 and under is undercooked
 120 - 124 - steak is rare
 125-139 - steak is medium-rare
 130-139 - steak is medium
 140- 149 - steak is medium - well
 150-165 - steak is well done
 >165 is burnt to a crisp
 */

var steakTemp = 135;
var steakDone;

if (steakTemp < 120) {
    console.log("The steak is not done yet.");


} else if (steakDone <=124) {
    console.log("Rare.");


} else if (steakTemp <=129) {
    console.log("Medium-rare.");


} else if (steakTemp <=139) {
    console.log("Medium.");


} else if (steakTemp <= 149) {
    console.log("Medium-well.");


} else if (steakTemp <=165) {
    console.log("Well done.");


}else {
    console.log("Burnt to a crisp.");
}



//Get outside temperature
var airTemp = parseInt(prompt("What's the temperature outside?", '65'));

//Create a variable for the water temperature
var waterTemp;

// conditional to see what you're doing
if (airTemp >= 85) {
    console.log("Let's go the beach!");
    waterTemp = parseInt(prompt ("What's the temperature of the water?", '75'));
    
    if (waterTemp >=75) {
        console.log("Let's go in the water!");
        
    }else {
        console.log("Let's build a sandcastle!");
    }
    
} else {
    console.log("We're going to the movies!");
}








//round()
//Normal rounding .5 and up

var num1 = 9.544444;
console.log(num1);
nume1 = Math.round (num1);
console.log(num1);

//floor(x)
//Returns x rounded down to the nearest integer/whole number

var num2 = 6.1;
console.log(num2);
num2 = Math.floor(num2);
console.log(num2);

//ceil(x)
//Always return x rounded up to the next nearest integer/whole number

var num3 = 4.8888;
console.log(num3);
num3 = Math.ceil(num3);
console.log(num3);

//random()
//Returns a number between 0 and 1

var num4 = Math.random()*100;
console.log(num4);

//Random number between two numbers
// Math.random() * (max-min) + min

var num5 = Math.random() * (80- 50) + 50;
console.log(num5);

var arrOfItems = ["Chips Ahoy", "Oreos", "E.L. Fudge", "Thin Mints"];
                
var randomCookie = Math.floor(Math.random() * arrOfItems.length - 1);
console.log("My current favorite is " + arrOfItems[randomCookie]);

console.log(Math.PI.toFixed(2));
console.log(SQRT2);
                  