class Product{

    // name;
    // price;
    // description;
    // rating;

    constructor(productName, productPrice, productCategory, productDescription, productRating ){
        this.name = productName; 
        this.price = productPrice;
        this.category = productCategory;
        this.description = productDescription;
        this.rating = productRating;
    }

    addToCart() {
        console.log("Product added to cart");
    }

    removeToCart() {
        console.log("Product removed from cart");
    }

    displayProduct() {
        console.log("Product displayed");
    }

    buyProduct() {
        console.log("Product bought");
    }

}

let iphone = new Product("Iphone 14", 74000, "Mobile", "Apple Iphone 14", 4.5);

console.log(iphone);
console.log(Product);
