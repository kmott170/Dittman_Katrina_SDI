/*
 Katrina Dittman
 01/20/2015
 SDI: Day 7 - For Loops
 */

//alert("Test test test");

//Basic for loop structure

/*
 for(initialization; Condition to test; Increment of change){
    
    Code to run as long as the condition is true
 }
 */

for(var i = 0; i < 20; i += 4){
    //Code to run as long as i < 20
    console.log("The value of i = " +i);
}

for(var k = 0; k < 5; k++){
    console.log("The value of k is" +k);
    //Add a break point
    //If k is equal to 3 then stop the code
    
    if (k ===3) {
        break;
    }
}