// let x = {a: 10}
// console.log(x);

// x.toString()
// console.log(x.toString());

// class Product {
//     display() {}
// }

// y = new Product()
// console.log(y);

// console.log(Object);
// console.log(Object.prototype);
// console.log(Object.prototype.constructor);


class Product {
    constructor(n) {
        this.name = n;
    }
    display() {console.log(this)}
}

p = new Product("Iphone 14");

console.log(Product, {name: 'Iphone 14'});
p.display();
Product.prototype.display();
p.__proto__.display();

console.log(Product);


