let obj = {
    x: 10,
    y: 20,
    z: {
        x: 100,
        fn: function() {
            console.log(this.x, this.y);
        }
    }
}


//here z became call site as it is calling the function fn, which has this.
obj.z.fn();
console.log(obj);