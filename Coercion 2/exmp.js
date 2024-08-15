x={}
console.log(x.toString());
console.log(x.valueOf());
console.log();


y={a: 10}
console.log(y.toString());
console.log(y.valueOf());
console.log();


y = {a: 10, b: 20, toString: function() { return "my toString";}}
console.log(y.toString());
console.log(y.valueOf());
console.log();


y.valueOf = function() { return 100;}
console.log(y.valueOf());
console.log();




console.log(1<2<3);  // 1<2<3 --> (1<2)<3 = (true i.e. 1)<3 --> 1<3 --> (true)
console.log(3>2>1);  // 3>2>1 --> (3>2)>1 = (true i.e. 1)>1 --> 1>1 --> (false)




