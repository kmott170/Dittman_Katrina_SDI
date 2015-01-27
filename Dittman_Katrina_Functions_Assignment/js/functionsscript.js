
 /*
Katrina Dittman
SDI Campus
1/13/2015
Prompting
*/

//alert("Testing Test Test Testing Test Test");

//Normal Function

function calcInterest(time, rate, principal) {

 //Calculating simple interest

 var interest = time * rate * principal;


 return interest;
}

 var principal = parseInt(prompt ("Please enter the principal rate of your loan: \nPlease do not use commas in your response. "));

 while (isNaN(principal) || principal ===""){
  prinicpal = parseInt( prompt("Please use numbers only. Please enter the principal of your loan."));
 }









