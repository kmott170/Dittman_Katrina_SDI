
 /*
Katrina Dittman
SDI Campus
1/29/2015
Final Exam
*/

//alert("Testing Test Test Testing Test Test");

function origCost(originalPrice, discount) {

 var discount1= originalPrice * (discount) /100;
 var discount2= originalPrice - discount1;
 return discount2;

}

 var cost = parseInt( prompt("Please enter the original cost of the item."));

 while (isNaN(cost) || cost<0  || cost==="") {
  cost= parseInt( prompt("Please enter only numbers. Do not leave this blank."));
 }

 var discount = parseInt( prompt("Please enter the discount on the item."));

 while (isNaN(discount) || discount<0  || discount==="") {
  discount= parseInt( prompt("Please enter only numbers. Do not leave this blank."));
}

var returnedDiscountP = origCost(cost, discount);
 console.log("The final cost of an item that costs " +cost+ " with a discount of " +discount+ " is " +returnedDiscountP );