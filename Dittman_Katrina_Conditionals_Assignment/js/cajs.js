
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
 var passAvg = 85;
 var extraCredGrade= 50;
//Prompting the user to enter grades 1 - 5

 arryGrade[0] = prompt("Please enter grade 1: (Please use whole numbers.)");
 arryGrade[1] = prompt("Please enter grade 2: (Please use whole numbers.)");
 arryGrade[2] = prompt("Please enter grade 3: (Please use whole numbers.)");
 arryGrade[3] = prompt("Please enter grade 4: (Please use whole numbers.)");
 arryGrade[4] = prompt("Please enter grade 5: (Please use whole numbers.)");

//Adding all variables and dividing by the total amount of grades to get avg.
 arryGrade[5]= (parseInt(arryGrade[4]) + parseInt(arryGrade[3]) + parseInt(arryGrade[2]) + parseInt(arryGrade[1]) + parseInt(arryGrade[0])) /5;

//Printing out total
 console.log("The total average of your grades is:" + arryGrade[5]);

//If your overall grade average is above a 85 then you pass the class
//If not then you fail the class

//Adding logical operators
if(arryGrade[5] >= passAvg )
{
 console.log("You pass the class!");

}else
{
 console.log("Your class average is to low. You do not pass.");

 //Adding additional equation to find out if a failing student who gets extra credit passes
 console.log("Extra credit is 50. You may have a chance to pass.");
 arryGrade[5]= parseInt(arryGrade[4]) + parseInt(arryGrade[3]) + parseInt(arryGrade[2]) + parseInt(arryGrade[1]) + parseInt(arryGrade[0]) + parseInt(extraCredGrade) / 6;

 //If the students average is higher than the passing average they pass with the extra credit
 if (arryGrade[5] >= passAvg)
 {
  console.log("You pass the class!");
 }
 else
 {
  //the students average was failing and they did not earn the extra credit, therefore they failed.
  console.log("Even with extra credit you fail.");
 }

}














