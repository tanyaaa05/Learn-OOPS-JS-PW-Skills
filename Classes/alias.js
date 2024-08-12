const product = {name: "Iphone 14 pro", price: 125000, category: "Mobiles"};
const { name: productName, price: productPrice, category } = product;

//console.log(price);
console.log(productPrice);
console.log(category);

with(product) {
    console.log(name,price,category);
}