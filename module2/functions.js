const names = ['wes', 'kait', 'lux']

//regular function 

// const fullNames = names.map(function(name) {
//     return `${name} bos`
// })

//arrow function 

// const fullNames = names.map((name) => {
//     return `${name} bos`
// })

//we can't get rid of parentheses with explicit return 
// const fullNames = name.map(name => {
//     return `${name} bos`
// })

//with implicit return 
const fullNames = names.map(name => `${name} bos`)
console.log(fullNames)

//Remember: arrow functions are anonymous functions 
//name function example:
//function sayMyName(name) {
    // alert(`Hello ${name}`)
    // } - good bc we can see where the bug is when error happens 

//we can assign variable to arrow function: 
const sayMyName = (name) => {console.log(`Hello ${name}!`)}
sayMyName("Lora"); 
