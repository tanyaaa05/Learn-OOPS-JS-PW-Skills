// Prototypes in JavaScript are a powerful feature that allows objects 
// to inherit properties and methods from other objects.


// (1). Creating a Constructor Function:
// In this example:
// (a). We create a Person constructor function that initializes name and age properties for an object.
// (b). We then add a greet method to Person.prototype. This means all instances of Person will inherit the greet method.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};
console.log();


// (2). Creating Instances:
// Here:
// Tanya and Sunita are instances of Person.
// Both instances have access to the greet method through the prototype.
let Tanya = new Person("Tanya Singh", 22);
let Sunita = new Person("Sunita Bhatt", 23);

Tanya.greet(); 
Sunita.greet(); 
console.log();


// (3). Adding Methods to the Prototype:
Person.prototype.sayGoodbye = function() {
    console.log(`${this.name} says goodbye!`);
};

Tanya.sayGoodbye(); 
Sunita.sayGoodbye();  
console.log(); 


// (4). Understanding Prototype Chain:
// When you call a method on an object, JavaScript first looks for the method directly on the object.
// If it doesn’t find it, it looks at the object's prototype, and so on, until it reaches the top of the 
// prototype chain (which is Object.prototype).
console.log(Tanya.hasOwnProperty('name')); 
console.log(Tanya.hasOwnProperty('greet'));
console.log(Tanya.__proto__.hasOwnProperty('greet')); 

// (a). `hasOwnProperty` is a method from Object.prototype, which all objects inherit.
// (b).`Tanya.hasOwnProperty('greet')` returns `false` because `greet` is not a direct property of alice but is found in its prototype.




// Summary:
// (a). Prototypes allow objects to share properties and methods efficiently.
// (b). Inheritance is achieved by linking objects through prototypes, creating a chain.
// (c). Shared Methods: Methods defined on the prototype are shared by all instances, making it memory-efficient.
