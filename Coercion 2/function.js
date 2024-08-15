function fun() {}
console.log("My function name is: " + fun);
console.log(typeof(fun));
console.log();

console.log(fun.valueOf());
console.log(typeof(fun.valueOf()));
console.log();


console.log(fun.toString());
console.log(typeof(fun.toString()));
console.log();


fun.toString = function() { return "fun";}
console.log(fun.toString());
console.log("My function name is: " + fun);