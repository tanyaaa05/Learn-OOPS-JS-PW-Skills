var name = 'abcd' 
let Obj = {
    name: 'Tanya',
    greet: function() {
        console.log('Hello', this.name)
    }
}

Obj.greet.call();

// in the above code we will get output as `Hello abcd`. WHY? bcs we are calling the greet fn with 
//call fn without passing any parameter. Hence `this` refers to the global scoped object.