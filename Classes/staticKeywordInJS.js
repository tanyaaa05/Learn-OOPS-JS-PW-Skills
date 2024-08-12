class product{

    static x = 10;

    constructor(name, price ){
        this.name = name; 
        this.price = price;
        console.log(product.x);
    }
}

let p1 = new product("Iphone", 178000);
console.log(p1.x);

product.x=20;
console.log(product.x);