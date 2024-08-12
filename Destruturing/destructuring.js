const product = {name: "Iphone 14 pro", price: 125000, category: "Mobiles"};
const { name, price, category } = product;

console.log(product);
console.log(product.productprice);

// const purchasedProduct = {price: 80000, orderId: "xysq8914", orderDate: "08/08/2024", ...product}
// console.log(purchasedProduct);

// const purchasedProduct = {orderId: "xysq8914", orderDate: "08/08/2024", ...product, price: 80000}
// console.log(purchasedProduct);

const purchasedProduct = {orderId: "xysq8914", orderDate: "08/08/2024", ...product}
console.log(purchasedProduct);

