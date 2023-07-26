let input = [5, -3, 20, 7, 0.5];

console.log(`Sum: ${input.reduce(sum)}`);
console.log(`Min: ${input.reduce(min)}`);
console.log(`Max: ${input.reduce(max)}`);
console.log(`Product: ${input.reduce(product)}`);
console.log(`Join: ${input.reduce(join)}`);

function sum(a, b) { return a + b; }

function min(a, b) { return Math.min(a, b); }

function max(a, b) { return Math.max(a, b); }

function product(a, b) { return a * b; }

function join(a, b) { return a.toString() + b.toString() }
