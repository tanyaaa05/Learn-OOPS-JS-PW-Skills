function product(n,p,d){
    this.name=n;
    this.price=p;
    this.description=d;
}

const iphone = new product("Iphone 14", 178000, "Apple Iphone 14");
console.log(iphone);
