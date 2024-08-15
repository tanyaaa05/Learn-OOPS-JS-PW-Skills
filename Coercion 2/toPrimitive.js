x = 10;
y={a: 10}
console.log(x-y);  // y.valueOf() --> y --> y.toString() --> '[object Object]' ===> 10 - '[object Object]' 
console.log();


y.toString = function() { return '99';}
console.log(y.toString());
console.log();

console.log(x-y);  // y.valueOf() --> y --> y.toString() --> '99' ===> 10 - '99' --> 10 - 99
console.log();

y.valueOf = function() { return '3000';}
console.log(x-y);  // --> // y.valueOf() --> 3000 ===> 10 - 3000
console.log();




class product {
    constructor(n,p) {
        this.name = n;
        this.price = p;
    }
    valueOf() {
        return this.p;
    }
}

p = new product("iphone", 72000);
console.log(10-p);
console.log(p);
console.log();


class Product1 {
    constructor(n,p) {
        this.name = n;
        this.price = p;
    }
    valueOf() {
        return this.price;
    }
}

p = new Product1("iphone", 72000);
console.log(10-p);
console.log(p);
console.log();


class Product2 {
    constructor(n,p) {
        this.name = n;
        this.price = p;
    }
    valueOf() {
        return null;
    }
}

p = new Product2("iphone", 72000);
console.log(10-p);
console.log(p);
console.log(10<p);
console.log();


class Product3 {
    constructor(n,p) {
        this.name = n;
        this.price = p;
    }
    valueOf() {
        return this.price;
    }
}

p1 = new Product3("iphone11", 2000);
p2 = new Product3("iphone12", 3000);
console.log(p1<p2);
console.log(p1);
console.log(10-p1);
console.log(p2);
console.log(10-p2);



