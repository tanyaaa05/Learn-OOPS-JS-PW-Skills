class product{
    constructor(productName, productPrice,productDescription,productImage,productCategory,productReviews,productRating) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.productDescription = productDescription;
        this.productImage = productImage;
        this.productCategory = productCategory;
        this.productReviews = productReviews;
        this.productRating = productRating;
    }


    wishlist(){
        //connet to user db and add the item in user wishlist
        console.log("added to wishlist");
    }

    addToCart(){
        //connet to user db and add the item in user cart
        console.log("added to cart");
    }

    buyNow() {
        // Connect to user DB and add the item in user orders and the status of the order
        console.log("Redirecting to payment page");
        var paymentSucessFull = true;
        if (paymentSucessFull) {
            console.log("Payment is successful");
            console.log("Hey! Your order is placed successfully");
            console.log(`Your order id is ${Math.floor(Math.random() * 84568446546)}`);
            console.log(`${this.productName} tracking link will be sent to your email id`);
            console.log("It will also be available in your orders section");
            // Connect to user DB and update the item in user orders with the status of the order as successful
        } else {
            console.log("Payment failed, please try again");
            console.log("If any amount was deducted from your account, it will be refunded within 7 days");
            // Connect to user DB and update the item in user orders with the status of the order as failed
        }
    }
    
}

let iqoo_neo_6 = new product("iqoo neo 6",29999,"midrange flagship","./images/iqoo_neo_6.jpg","mobile","awesome phone, good camera, good battery, good sound,imensive performance",4.9)

console.log(iqoo_neo_6);
iqoo_neo_6.wishlist();
iqoo_neo_6.addToCart();
iqoo_neo_6.buyNow();

// console.log(iqoo_neo_6.productImage,
// iqoo_neo_6.productCategory,
// iqoo_neo_6.productReviews,
// iqoo_neo_6.productRating)

let iphone = new product();
console.log(iphone);

iphone.productName="iphone16";
iphone.productPrice=129999;
iphone.productDescription="mega flagship";
iphone.productImage="./images/iphone16.jpg";
iphone.productCategory="mobile";
iphone.productReviews="awesome phone, good camera, good battery, good sound,imensive performance";
iphone.productRating=4.9;

console.log(iphone);