const product = {name: "Iphone 14 pro", price: 125000, category: {name: "Mobiles", categoryId: 14, type: {typeId: 5, typeName: "Electronics"}} };
const { name: productName, price: productPrice, category } = product;

const {category: { categoryId } } = product;
const {category: { type: {typeName}} } = product;
const {name, discount = 10} = product;  // In this code, if product doesn't contain a discount key, then the discount variable will get a value 10, else whatever is the value of discount key in the product will be given to the discount variable.

console.log(categoryId);
console.log(typeName);
console.log(discount);
console.log(product);