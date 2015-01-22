/*
 Katrina Dittman
 01/20/2015
 SDI: Day 7
 While Loops
 */
 
 //alert("Test test testing test test");
 
 //The while loop, loops through a blank code as long as a condition is true
 
 /*
  var i = 0;
  while(condition){
  
  
  Code that runs while condition is true incremental change to the counting variable=
  OR infinite loop
  
  
  }
  */
 
 //Initiallziing counter
 var counter = 0;
 
 while(counter<20){
    //Code that will run as long as counter is < than 20
    console.log(counter + "Somethings just never end");
    //Change for the counter variable
    counter++;
 }
 
 //Do while loop
 //The code will run At Least once before checking the condition
 
 var i = 0;
 
 do{
    
    //This code will run before the condition is checked
    //It will also as long as the condition is true
    console.log("The number is" +i);
    
    i++;
    
    } while (i < 10);
 