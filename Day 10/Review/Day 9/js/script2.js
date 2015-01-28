//alert("blah blah blah");

//This is a basic or normal function

function calcArea(width,height) {
    var area = width*height;
    return area;
}

var results= calcArea(4,5);
console.log(results);


//This is for a procedure
//It does not return a value
//List of steps
function calcAreaP(width, height){
    //calculations
    var area = width * height;
    console.log(area);
    //it will not have a return
}


//function call for a procedure
calcAreaP(6,7);

alert("Test");
var userInput = prompt("ask a question");