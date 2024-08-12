// function product(n,p,d){
//     this.name=n;
//     this.price=p;
//     this.description=d;
// }

// const iphone = new product("Iphone 14", 178000, "Apple Iphone 14");
// console.log(iphone);


function product(n,p,d){
    this.name=n;
    this.price=p;
    this.description=d;

    this.displayproduct = function() {
        console.log("Name:", this.name, "Price:", this.price, "Description: ", this.description)
    }
}

let a = new product("Macbook", 278000, "Apple Macbook");
a.displayproduct();

let b = new product("S24", 138000, "Samsung Galaxy S24");
b.displayproduct();

console.log(product);
console.log(a);
console.log(b);

/* Now the above product function act as a Function Constructor, 
here it takes a few parametersand uses This keyword to assign them. To call this constructor we do:

let iphone = new Product("Iphone 14", 74000, "Mobile", "Apple Iphone 14", 4.5);

Now, here we are calling function constructor of product with new keyword. And new keyword 
will do the following 4 things:
(1). Create an empty object.
(2). Assign the This keyword in the function constructor to the empty object and call the constructor.
(3). Do prototyping.
(4). If the constructor returns a new object manually, return the same from the constructor, else if 
no object is manually returned or a non object value is returned then we return this from the constructor.

In step 2, when we execute the constructor, we assign data members like name, price etc and
member functions like displayproduct.
*/

