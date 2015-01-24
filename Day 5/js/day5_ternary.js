
 /*
Katrina Dittman
SDI Campus
1/13/2015
Prompting
*/

//alert("Testing Test Test Testing Test Test");

// If your GPA is greater than 2.0 you can graduate!
// (condition to test) ? true code: false code;

// Normal if else statement

 var gpa = 3.8;

 if(gpa >2.0){
  console.log("Congrats! You can graduate!");

 }else{
  console.log ("Sorry,your GPA is too low!");
 }

// ternary way

 (gpa >2.0) ? console.log("Congrats! You can graduate!") :console.log ("Sorry,your GPA is too low!");

// Decide what book a kid will read
 var age = 16;
 var book;

// If the child is under 10 they read green eggs and ham
// Otherwise they can read the Time Machine
// If the kid is older than 15 then they read Twilight

 book= (age < 10) ? "Green eggs & Ham" :"The Time Machine";

 var book2 = (age < 10) ? "Green eggs & Ham" : (age < 15) ? "The Time Machine" :  "Twilight";

 console.log("You should read " + book);

 console.log(book2);
