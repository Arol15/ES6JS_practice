## const vs. let 

The only difference between const and let is that const makes the contract that no rebinding will happen. 

const makes code easier to read: within its scope, a const variable always refers to the same object. With let there is no such guarantee. As a result, it makes sense to use let and const as follows in your ES6 code: 

- use const by default
- only use let if rebinding is needed
- (var shouldn't be used in ES6)