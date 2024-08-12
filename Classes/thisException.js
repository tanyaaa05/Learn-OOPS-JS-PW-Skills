// let obj = {
//     x: 10,
//     y: 20,
//     fn: () => {
//         console.log(this.x, this.y);
//     }
// }



// obj.fn();

// In case of arrow function, this is resolved by lexical scoping.
let obj = {
    x: 10,
    y: 20,
    fn: function () {
        const arrow = () => {
            console.log(this.x, this.y);
        }
        arrow();
    }
}

obj.fn();
console.log(obj);
// In this code, this is present inside the arrow function, hence we will resolve it lexically.
// (1). Is this defined in the scope of arrow function? No
// (2). We go one scope up, i.e. inside function fn.
// (3). Is this defined inside fn? yes, bcs fn is a normal function, we have a definition of this inside it which is a call site.
// (4). Who is the call site? Obj object which is responsible to trigger fn is the call site.
// (5). Hence this refers to Obj object and when we call arrow function we get output as 10 20.

// That means when we make a new object using the new keyword, then new keyword creates a plain object  and
// this plain object is the call site for the constructor hence, this keyword refers to the plain object altogether.