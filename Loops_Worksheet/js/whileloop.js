
 /*
Katrina Dittman
SDI Campus
1/22/2015
While Loops
*/

//alert("Testing Test Test Testing Test Test");


/*
Here is an example of trying to find out how many horror movies
 there are in a movie store using the while loop.
 */
var howManyHorrorMovies = 0;
 while (howManyHorrorMovies < 50)
 {
 console.log(howManyHorrorMovies + " Horror movies.")

  howManyHorrorMovies++

 }

 var eggs = prompt ("Please enter how many eggs you have:");

 while(eggs==="" || isNaN(eggs)){
  eggs= prompt("Please enter how many eggs you have, do not leave this blank.");
 }