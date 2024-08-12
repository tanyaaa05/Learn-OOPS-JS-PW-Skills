class Parent {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, ${this.name}`);
    }
}

class Child {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// Link the prototypes
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

Child.prototype.sayAge = function() {
    console.log(`I am ${this.age} years old.`);
};

const child = new Child('Tanya', 22);
// child.greet();   -->  Inherited from Parent
child.sayAge();     // Method from Child

//console.log(parent);
console.log(child);
