class Product{

    #name;
    #price;
    category;
    description;
    rating;

    displayProduct() {

        //We can only access it inside the class.
        console.log(this.#name, this.#price, this.description );
    }

}

let iphone = new Product("Iphone 14", 174000, "Mobile", "Apple Iphone 14", 4.5);

console.log(iphone);
