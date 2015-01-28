
 /*
Katrina Dittman
SDI Campus
1/27/2015
Pizza
*/

//alert("Testing Test Test Testing Test Test");

 //Calculate how much pizza costs per square inch & how much is it per slice

 //Prompt the user for:
 //Radius of pizza
 //Cost of Pizza
 //Number of Slices per pizza

 var pizzaRadius = prompt("What is the radius of your pizza?");

 while(pizzaRadius==="" || isNaN(pizzaRadius)){
  pizzaRadius= prompt("Please do not leave blank. Only use numbers in your response. \nWhat is the Radius of your pizza?");
 }

 //do while validation

 do{
  //prompt the user
  var pizzaCost= prompt("How much does your pizza cost in total?");
 }while (pizzaCost==="" || isNaN(pizzaCost));

 var pizzaSlices = prompt("How many slices are in your pizza?");

 while(pizzaSlices==="" || isNaN(pizzaSlices)){
pizzaSlices = prompt("Please do not leave blank. Only use numbers. \nHow many slices are in your pizza?");
 }


 //Function call that starts the lordFunction
 var results = lordFunction(pizzaRadius, pizzaCost, pizzaSlices);

 console.log("Your pizza per square inch costs " +results[0]+ " that comes out to " +results[1]+ " per slice.");


//Create a function that will start all of the other functions

 function lordFunction(radius, cost, slices){

  //Calculate the area
  var area = pizzaArea(radius);

  //Calculate the cost per area
  var areaCost = pizzaSqInchC(cost, area);

  //Calculate the price per slice
  var slicePrice = pricePerSlice(cost, slices);

  //Return the area cost and slice per price
  return [areaCost, slicePrice];

 }


//Create a function that calculates the area of the pizza

 function pizzaArea(r){

  var area = Math.PI *r *r
  return area;

 }

 //Creat a function that calculates the price per sq inch of pizza

 function pizzaSqInchC(price, area){

  var costPerInch= price/area;
  costPerInch = costPerInch.toFixed(2);
  return costPerInch;

 }

 //Function that calculates the price per slice

 function pricePerSlice(price, slice){

  var costPerSlice= price/slice;
  costPerSlice = costPerSlice.toFixed(2);
  return costPerSlice;

 }