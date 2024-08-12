const obj = {
    firstName: 'Tanya',
    greet: function(welcomeMessage, prompt) {
        console.log("Hello, my name is", this.firstName, welcomeMessage, prompt);  
    }
}

obj.greet("How are you?", "How can I help you?");  // if we call obj.greet() then there `this` refers to obj itself and firstName will be Tanya.

const newObj = {firstName: 'Shubh'};
obj.greet.apply(newObj, ["How are you?",  "How can I help you ?"]);

console.log(obj);