// In JavaScript, abstract operation to convert a value to a number can be done explicitly 
// using the Number() function or implicitly through operations that require numerical values.
// This process is known as abstract operation to number.


// (1).Using Number() Function:
let value = "42";
let numberValue = Number(value); // Converts to the number 42
console.log(numberValue); 
console.log();


// (2). Using Unary Plus (+) Operator:
let val = "3.14";
let numberVal = +val; // Converts to the number 3.14
console.log(numberVal); 
console.log();


// String to Number:
// (a). If the string represents a valid number, it will be converted to that number.
// (b). If the string is empty or contains non-numeric characters, it will convert to NaN (Not-a-Number).
console.log(Number("123"));     
console.log(Number("12.34"));   
console.log(Number(""));        
console.log(Number("abc")); 
console.log();    


// Boolean to Number:
// (a). true converts to 1.
// (b). false converts to 0.
console.log(Number(true));  
console.log(Number(false)); 
console.log();


// Null and Undefined to Number:
// (a). null converts to 0.
// (b). undefined converts to NaN.
console.log(Number(null));      
console.log(Number(undefined)); 
console.log();


// Object to Number:
// (a). Objects are first converted to their primitive value (using valueOf or toString methods) 
// before converting to a number.
// (b). If conversion fails, it returns NaN.
console.log(Number({}));               
console.log(Number({ valueOf: () => "5" })); 
console.log();


// Implicit Conversion Examples:
let result = "5" - 2; // "5" is converted to 5, then 5 - 2 = 3
console.log(result);  
console.log(2 + '1');  // return the string concatenation of lstr and rstr if both are primitive.
console.log(2 + null); // null return 0
console.log(2 + undefined); // undefined return Nan 
console.log(2 - '1');
console.log();


// Using parseInt() or parseFloat() for Strings:
// While Number() converts the entire string to a number, parseInt() and parseFloat() 
// parse only the leading part of the string that forms a valid number.
console.log(parseInt("123abc"));  
console.log(parseFloat("3.14xyz")); 
console.log();


function convertToNumber(input) {
    return Number(input); // Converts input to a number
}

console.log(convertToNumber("42"));  
console.log(convertToNumber("abc")); 
console.log(convertToNumber(true));  



// Abstract operation to number is essential in scenarios where you need to ensure that a value is
// treated as a numeric type for calculations, comparisons, or other operations that require
// numerical inputs. 
// In simple words, converting a value to a number is important when you need the value 
// to act like a number. This is necessary for doing things like math calculations, comparing numbers,
// or any other situation where the value should be treated as a number rather than something else, like text.






