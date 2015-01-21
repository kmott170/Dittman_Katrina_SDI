/*
 Katrina Dittman
 01/20/2015
 SDI Day 7 Zombies
 
 */

//alert("Test testing testing testing");

//Zombie Attack
//There is a zombie at Full Sail.
//It can bite 4 people a day and turn them into zombies
//The CDC wants to know how many zombies there will be in 8 days

var numZombies= 1; // number of zombies
var numBites = 4; // number of bites per zombie per day
var days= 8; // Number of days
var daysTakes= 0;

for (var i= 1; i<=days; i++){
    //How many new zombies get made and when do they go and bite people
    //They get bitten and the next day they can bite
    
    //New zombies made everyday
    var newZombies = numBites * numZombies;
    
    //Update the total number of zombies at the end of the day
    numZombies += newZombies;
    console.log("There are" +numZombies+"zombies at the end of day #"+i+"!");
    
        
}

while (numZombies <= 1000000) {
    
    //New Zombies
    var newZombies = numZombies * numBites;
    
    //How many zombies we have
    numZombies += newZombies;
    
    //Add 1 to the total number of days it takes
    daysTakes++;
}

console.log("It will take "+daysTakes+' days for a million zombies!");