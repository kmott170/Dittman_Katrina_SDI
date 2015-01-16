/*
Katrina Dittman
SDI Campus
1/13/2015
Prompting
*/

//alert("Sales Tax and Discount Calculator");

//Declaring an array for Original Price + Sales tax
var arrySt = [];

arrySt[0]= prompt("Please enter original price of item:");
arrySt[1]= prompt("Please enter sales tax rate in your current state:");
arrySt[2]= (arrySt[0] * arrySt [1]) + arrySt[0];
console.log("This is the original price of the item: $" + arrySt[0] + ".\n");

//Declaring an array for Original Price - Discount
var arryDc = [];

arryDc[0]= prompt("Please enter original price of item:");
arryDc[1]= prompt("Please enter discount amount as a decimal:");
arryDc[2]= (arryDc[0] * arryDc[1] - arryDc[0]);
console.log("This is the original price of the item $" +parseInt( arryDc[0] ) + ".\n");
