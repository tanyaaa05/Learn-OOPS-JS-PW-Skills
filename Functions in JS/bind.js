const obj = {
    firstName: 'Tanya',
    greet: function(welcomeMessage, prompt) {
        console.log("Hello, my name is", this.firstName, welcomeMessage, prompt);  
    }
}

const newObj = {firstName: 'Shubh'};
f = obj.greet.bind(newObj);

f("Hello", "Hi");

obj.greet();
f();

//obj.greet.apply(newObj, ["How are you?",  "How can I help you ?"]);

console.log(obj);