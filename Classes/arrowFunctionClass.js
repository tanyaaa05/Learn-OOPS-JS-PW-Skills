let obj = {
    x: 10,
    y: 20,
    fn: () => {
        console.log(this.x, this.y);
    }
}

obj.fn();