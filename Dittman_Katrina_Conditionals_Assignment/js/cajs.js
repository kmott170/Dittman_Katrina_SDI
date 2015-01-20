
 /*
Katrina Dittman
SDI Campus
1/13/2015
Prompting
*/

//alert("Testing Test Test Testing Test Test");

//Pass or Fail Calculator - Adding prompts
//Declaring a variable for grades

 var arryGrade =[];

//Prompting the user to enter grades 1 - 5

 arryGrade[0] = prompt("Please enter grade 1:");
 arryGrade[1] = prompt("Please enter grade 2:");
 arryGrade[2] = prompt("Please enter grade 3:");
 arryGrade[3] = prompt("Please enter grade 4:");
 arryGrade[4] = prompt("Please enter grade 5:");

 //Adding all variables and dividing by the total amount of grades to get avg.
 arryGrade[5]= arryGrade[4] + arryGrade[3] + arryGrade[2] + arryGrade[1] + arryGrade[0] /5;

 //Printing out total
 console.log("The total average of your grades are: " + arryGrade[5] );

