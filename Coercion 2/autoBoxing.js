// JavaScript employs a mechanism called Autoboxing. When you attempt to access a method or
// property on a primitive type, JavaScript automatically converts the primitive to its 
// corresponding object wrapper, performs the operation, and then discards the temporary object.
// For example, converting an int to an Integer, a double to a Double, and so on.

let x=10;
console.log(x);
console.log(x.toString());
console.log(typeof(x));
// console.log(10.toString());  --> It gives error bcs 10 is a literal
console.log((10).toString());
console.log("Tanya".toString());
console.log("Tanya".valueOf());


// (a). Auto-boxing when a property is accessed on a primitive value, since primitives 
// do not have properties. 
// (b). The this value when calling a non-strict function. Primitives are boxed 
// while null and undefined are replaced with the global object






// Boxing is the process in which a primitive value is wrapped in an Object. 
// When a primitive type is treated as an object, e.g., calling the toUpperCase() function, 
// JavaScript would automatically wrap the primitive type into the corresponding object type. 
// This new object type is then linked to the related built-in <.prototype>, so you can use 
// prototype methods on primitive types.

//String primitive name
// const name = "CODINGNINJA";
// console.log(name.toLowerCase());
// console.log(name.substring(1));
// console.log();