/*
Katrina Dittman
SDI Campus
1/13/2015
Day 4 In Class Assignment
Arrays
 */

//alert("Test Test Test Test");

//Create a basic array

var avengersNames=["Thor", "Iron Man", "Black Widow"];

//Print it out to the console

console.log(avengersNames);

//Print out a specific item

console.log(avengersNames[1]);

//Switch a team member - Black Widow for Hawk-eye

avengersNames[2] = "Hawk-eye";

console.log(avengersNames);

//Add a team member

avengersNames[3] = "Black Widow";

//Print out roster

console.log(avengersNames);

//Use a variable as an index number

var num= 2;
console.log(avengersNames[num]);

//Length property
//Dot syntax - fancy for using a period

console.log(avengersNames.length);

//Last index number is the length - 1

//Next open space? Is the length

//Recruit a new team member

avengersNames[avengersNames.length] = "The Hulk";
console.log(avengersNames);

//Pick oranges and track how many we have

var orangeBins =[12, 20, 14];

//How many bins oranges did we pick in total

var total= orangeBins[0] + orangeBins[1] + orangeBins[2];
console.log("The total number of orange bins collected is "+total);

//Advanced arrays

var fruitBowl = ["Orange", "Tomato", "Strawberry"];

//Property - length - how many items are in the array

console.log(fruitBowl.length);

//Method of arrays

//Push - inserts an item at the end of an array
//arrayName.push(item to push)

fruitBowl.push("Apple");
console.log(fruitBowl);

//Push another fruit

fruitBowl.push("Kiwi");
console.log(fruitBowl);

//Pop - takes off the last item in an array AND returns it
//arrayName.pop()
//Create a variable to 'catch' the return value

var caught= fruitBowl.pop();
console.log(fruitBowl);
console.log(caught);
var caught2 = fruitBowl.pop();
console.log(fruitBowl);
console.log(caught2);

//Splice - used for removing or adding an item into an existing array
//arrayName.splice(index # position to start from, # of items to remove, items to put in )

fruitBowl.splice(2,0,"Banana");
console.log(fruitBowl);

fruitBowl.splice(1,1,"Kiwi");
console.log(fruitBowl);

//Adding more items

fruitBowl.splice(1,0,"Grapes", "Mango", "Pineapple");
console.log(fruitBowl);








