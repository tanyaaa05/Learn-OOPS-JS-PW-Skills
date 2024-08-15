let x=10;
console.log(str1 = `Hello the value of x is ${x}`);

y={};
console.log(str2 = `Hello the value of y is ${y}`);
console.log();


// conversion of string into number
s="123";
console.log(s);
//console.log(+s);  --> either we can use +s or we can also use Number("123") to convert the string into number
console.log(Number("123"));   
console.log(Number("")); 
console.log(Number("-0"));     
console.log(!!s);
console.log();

console.log(String(10));
console.log(String(0));
console.log(String(-0));
console.log();


let z=NaN;
// let z=50;
console.log(z==z);
console.log(z===z);
console.log(Infinity);
console.log(-Infinity);
console.log(isNaN(NaN));
console.log(isNaN("Tanya"));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("Tanya"));
console.log();


console.log(x=0);
console.log(x==-0);
console.log(x===-0);

console.log(y=-0);
console.log(y.toString());
console.log(y==0);
console.log(y===0);
console.log(y>0);
console.log(y<0);
console.log();

console.log(Object.is(y,0));
console.log(Object.is(y,-0));
console.log(Math.sign(0));
console.log(Math.sign(-0));







