// Arrow Function 
// const obj = {
//     firstName: 'Tanya',
//     greet: () => {
//         console.log("Hello, my name is", this.firstName)
//     }
// }

// obj.greet();

// const newObj = {firstName: 'Shubh'};
// obj.greet.call(newObj);




// const obj = {
//     firstName: 'Tanya',
//     greet: function() {
//         console.log("Hello, my name is", this.firstName)
//     }
// }

// obj.greet();

// const newObj = {firstName: 'Shubh'};
// obj.greet.call(newObj);




// const obj = {
//     firstName: 'Tanya',
//     greet: function(welcomeMessage) {
//         console.log("Hello, my name is", this.firstName, welcomeMessage);
//     }
// }

// obj.greet("How are you? ");

// const newObj = {firstName: 'Shubh'};
// obj.greet.call(newObj, "How are you? ");

// obj.greet("How are you ?", "How can I help you?");




const obj = {
    firstName: 'Tanya',
    greet: function(welcomeMessage, prompt) {
        console.log("Hello, my name is", this.firstName, welcomeMessage, prompt);  
    }
}

obj.greet("How are you?", "How can I help you?");  // if we call obj.greet() then there `this` refers to obj itself and firstName will be Tanya.

const newObj = {firstName: 'Shubh'};
obj.greet.call(newObj, "How are you?",  "How can I help you ?");

console.log(obj);




// so every fn in js has a call method attached to it, which takes the 
// first argument as the new object we want this to refer to if we don't pass
// anything then this will refer to the global object. If our original fn 
// expects some parameters, then we can pass it after passing the new this refernce object
// so here, newObj is the object to which this keyword will point to.

