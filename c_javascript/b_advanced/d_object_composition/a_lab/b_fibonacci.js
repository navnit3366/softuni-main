function getFibonator() {

    let current = 0;
    let next = 1;
    let sum;

    return function() {

        sum = current + next;
        current = next;
        next = sum;
        return current;
    }
}

let fib = getFibonator();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());