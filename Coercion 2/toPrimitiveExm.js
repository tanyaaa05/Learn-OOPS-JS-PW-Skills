let myObject = {
    name: "Tanya",
    age: 22,

    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        if (hint === "number") {
            return this.age;
        }
        if (hint === "string") {
            return this.name;
        }
        return null;  // default case
    },

    valueOf() {
        return this.age;
    },

    toString() {
        return this.name;
    }
};

console.log(myObject);
console.log();
console.log(toString());
console.log(valueOf);
console.log(myObject.toString());
console.log(myObject.valueOf());
console.log();


// (1). Using `Symbol.toPrimitive` for Custom Conversion:
// In this example, we define a `Symbol.toPrimitive` method. This method handles 
// the conversion of myObject to a primitive based on the provided hint.
console.log(+myObject);   
console.log(`${myObject}`); 
console.log(myObject + ""); 
console.log();

// Explanation of the above code:
// (a). +myObject: The + operator triggers a conversion with the hint "number", so `Symbol.toPrimitive` returns this.age which is 22.
// (b). ${myObject}: String interpolation triggers a conversion with the hint "string", so Symbol.toPrimitive returns this.name which is "Tanya".
// (c). myObject + "": The + operator used with a string triggers a conversion with the hint "default", so `Symbol.toPrimitive` returns null.





// (2). Fallback to `valueOf`:
// If `Symbol.toPrimitive` were not defined, JavaScript would try the valueOf method next.
let simpleObject = {
    age: 23,

    valueOf() {
        return this.age;
    },

    toString() {
        return "Muskan";
    }
};

console.log(+simpleObject);   
console.log(`${simpleObject}`); 
console.log(simpleObject + 10); 
console.log();

// Explanation of the above code:
// (a). +simpleObject: The + operator triggers a numeric conversion, and since valueOf returns 23, that's what is used.
// (b). ${simpleObject}: The string conversion falls back to toString, returning "Muskan".
// (c). simpleObject + 10: This triggers a numeric conversion, and valueOf returns 23, so the result is 33.





// (3). Fallback to `toString`:
// If neither `Symbol.toPrimitive` nor `valueOf` provide a primitive, JavaScript uses toString.
let anotherObject = {
    name: "Eve",

    toString() {
        return this.name;
    }
};

console.log(String(anotherObject)); 
console.log(anotherObject + "!");

// Explanation of the above code:
// (a). String(anotherObject): This triggers the `toString` method, which returns "Eve".
// (b). anotherObject + "!": String concatenation forces a conversion, so `toString` returns "Eve"





// 4. Handling Errors:
// If neither `valueOf` nor `toString` return a primitive, a `TypeError` will occur.
// let invalidObject = {
//     valueOf() {
//         return this;
//     },

//     toString() {
//         return this;
//     }
// };

// try {
//     console.log(invalidObject + 1);
// } catch (error) {
//     console.error(error); // TypeError: Cannot convert object to primitive value
// }

// Explanation of the above code:
// Both `valueOf` and `toString` return this, which is not a primitive. Thus, JavaScript throws a `TypeError`.







// Summary:
// (a). ToPrimitive is the process JavaScript uses to convert objects into primitive values when necessary.
// (b). JavaScript first checks for `Symbol.toPrimitive`, then `valueOf`, and finally `toString`.
// (c). Custom behavior can be defined using `Symbol.toPrimitive`.
// (d). If no valid primitive is returned, JavaScript throws an error.