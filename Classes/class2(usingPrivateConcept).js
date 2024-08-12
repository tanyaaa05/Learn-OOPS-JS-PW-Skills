class Product{

    #name;
    #price;
    category;
    description;
    rating;

    constructor(productName, productPrice, productCategory, productDescription, productRating ){
        this.#name = productName; 
        this.#price = productPrice;
        this.category = productCategory;
        this.description = productDescription;
        this.rating = productRating;
    }

    getPrice(p) {
        return this.#price;
    }

    setPrice(p) {
        if(p > 0){
            this.#price = p;
        }
        else{
            console.log("Invaid price");
        }
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

let iphone = new Product("Iphone 14", 174000, "Mobile", "Apple Iphone 14", 4.5);

console.log(iphone);

iphone.setPrice(-10000);

// iphone.#name = "Iphone 15"; --> This gives error we can not access outside the class.
iphone.name = "Iphone 15";
iphone.price = -180000;
iphone.category = "Electronics";

iphone.displayProduct();
console.log(iphone);

console.log(iphone.getPrice());
