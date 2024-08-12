let obj = {
    x: 10,
    y: 20,
    fn: function() {
        console.log(this.x, this.y);
    }
}


//here obj became call site as it is calling the function fn, which has this.
obj.fn();
console.log(obj);