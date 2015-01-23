
 /*
Katrina Dittman
SDI Campus
1/22/2015
Do Loops
*/

//alert("Testing Test Test Testing Test Test");

 //Do While Loop - Fluffy Kitties
var fluffyKitties = 0;


  do{

   console.log("The number of fluffy kittens is " +fluffyKitties);

   fluffyKitties++

  } while (fluffyKitties < 70);

 var meteors = prompt("How many meteors do you see?");  

 do{  meteors = prompt("Please enter the number of meteors you saw falling from the sky. \nDon't forget to make this a number:") 

 } while (meteors==="" || isNaN(meteors))