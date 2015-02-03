
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

//Returning interest
 return interest;
}
//Prompting & validating principal
 var principal = parseInt( prompt("Please enter the principal rate of your loan: \nPlease do not use commas in your response. "));

 while (isNaN(principal) || principal ===""){
  prinicpal = parseInt( prompt("Please use numbers only. Please enter the principal of your loan."));
 }

 //Prompting & validating rate
 var rate = parseInt( prompt("Please enter the rate: \nOnly use whole numbers for this: "));

 while(isNaN(rate) || rate===""){
  rate= parseInt( prompt("Please only use numbers in your response. Please enter the rate of your loan."));
 }
//Prompting & validating time
 var time = parseInt( prompt("Please enter the amount of time in months: "));

 while(isNaN(time) || time===""){
  time= parseInt( prompt("Please enter only numbers. Please enter the amount of time the loan is for."));
 }
//Function call
 var returnedInterest = calcInterest(time, rate, principal);

 //Printing result to console
 console.log("The interest on your loan is: " +returnedInterest);

//Anonymous Function

var calcTotalPriceAnon = function (price, interest) {

 var total = interest + price;

 //returning total
 return total;

};
//Prompting for and validating original cost
 var originalCost = (parseInt ("Please enter the original cost of your loan. "));

 while (isNaN(originalCost) || originalCost==="") {
  originalCost = parseInt(prompt("Please enter only numbers and no commas. Please enter your original cost of your loan. "));
 }
//Prompting for and validating interest rate
  var interestRate= (parseInt("Please enter the interest rate you got from above. "));

  while (isNaN(interestRate) || interestRate===""){
  interestRate = parseInt (prompt ("Please enter only numbers. Please enter the interest rate you got from above."));
  }
//function call
  var result = calcTotalPriceAnon(originalCost, interestRate);
 //print to console
 console.log("Your total loan amount is " +result);




