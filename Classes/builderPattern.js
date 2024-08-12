class Product{

    // Private Properties --> made private to avoid irrelevant updates outside the class.
    #price;
    #name;
    #description;
    
    // Builder object passed 
    constructor(builder) {

        // validations before object creation
        console.log("Calling Product Constructor")
        this.#name = builder.name; 
        if(builder.price > 0){
            this.#price = builder.price;
        }
        else{
            return {};
        }
        this.#description = builder.description;  
    }


    // member function
    displayProduct() {
        console.log("Product displayed", this.#name, this.#price, this.#description)
    }


    // WHY Static? --> To make it associated to the class not objects.
    static get Builder() {

        // this class will implement the Builder object related things
        class Builder {

            // This constructor is not mandatory but we have to put it so we can allocate default values to all properties of product class.
            // Apart from this it has some setter methods 
            constructor() {
                this.name = "";  //default values and this name property belongs to the Builder
                this.price = 0;  // this price property belongs to the Builder
                this.description = ""; // this description property belongs to the Builder
                // setting default values
            }

            setName(incomingName) {
                this.name = incomingName;
                return this;  // to return builder object we can use `this` keyword
            }

            setPrice(incomingPrice) {
                this.price = incomingPrice;
                return this;
            }

            setDescription(incomingDescription) {
                this.description = incomingDescription;
                return this;
            }

            build() {
                return new Product(this);
            }
        }

        // return Builder;  --> returning the builder class from the builder getter function.

        return new Builder();  // when someone calls th builder getter, they will get a new Builder object.
    }

}

// const p = new Product.Builder(); --> product.builder() calls the builder getter

const p = Product.Builder // this gives us new Builder object.
                    .setName("Iphone 14")
                    .setPrice(178000)
                    .setDescription("Apple Iphone 14")
                    .build(); 

//builder.setName("Iphone 14").setPrice(178000).setDescription("Apple Iphone 14");

p.displayProduct();