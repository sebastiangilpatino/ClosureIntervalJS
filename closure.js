function addition(x) {
    return function (y) {
        return x + y;
    }
}

console.log(addition(3)(2));