// The rest parameter syntax allows a function to accept an indefinite number 
// of arguments as an array, providing a way to represent variadic functions 
// in JavaScript.

// Here theArgs variable is technically an array which is combining multiple arguments into one.
function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3));
  
  console.log(sum(1, 2, 3, 4));
  
  console.log(sum);

  
