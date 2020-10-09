// globally and function scoped 
// var width = 100; 
// console.log(width);
// var width = 200; 
// console.log(width);

var width; //globally scoped
function setWidth() {
    // var width = 100; 
    width = 100;
    console.log(width); 
}

setWidth();
// console.log(width); // width is not defined bc functionally scoped; 
//not available outside of the function 

console.log(width) //will work bc var is defined globally

//edge case with var variables 
var age = 100; 
if (age > 12) {
    // var dogYears = age * 7; 
    let dogYears = age * 7 // will stay within the block 
    console.log(`You are ${dogYears} dog years old`)
}
//since var is function scoped but we used it in our if statement, our dogYears variable
//is now globally scoped 

// let and const block scoped 
let heigth = 200; 
const key = 'abc123'