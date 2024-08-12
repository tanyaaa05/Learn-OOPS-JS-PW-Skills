let val = "Hello, World!";
let booleanVal = Boolean(val); // Converts to true
console.log(booleanVal); 


let value = 0;
let booleanValue = !value; // Converts to false
console.log(booleanValue); 

console.log(Boolean(1));         // true (truthy)
console.log(Boolean("Hello"));   // true (truthy)
console.log(Boolean({}));        // true (truthy)


console.log(Boolean(null));      // false (falsy)
console.log(Boolean(""));        // false (falsy)
console.log(Boolean(undefined)); // false (falsy)
console.log(Boolean(0));         // false (falsy)
console.log(Boolean(-0));         // false (falsy)
console.log(Boolean(NaN));         // false (falsy)
console.log(Boolean(false));      // false (falsy)


// function isValid(input) {
//     return !input; // Converts input to a boolean to check its truthiness
// }

// console.log(isValid("text"));  // return false
// console.log(isValid(""));      // return true


function isValid(input) {
    return !!input; // Converts input to a boolean to check its truthiness
}

console.log(isValid("text"));  // true
console.log(isValid(""));      // false

// Qn. Why Use Double Negation?
// Ans. The !! operator is a concise way to convert any value to a boolean. 
// The first ! negates the value, turning it into its opposite boolean, 
// and the second ! negates it again, resulting in the correct boolean representation of the original value.

// This abstract operation `to boolean` is useful when you need to ensure a value is 
// treated as true or false in conditional statements or logical operations.








