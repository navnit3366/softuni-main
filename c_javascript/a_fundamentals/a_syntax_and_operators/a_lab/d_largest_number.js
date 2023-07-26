function largestNumber(a, b, c) {
    let largestNumber = a;

    if (b > largestNumber) {
        largestNumber = b;
    }

    if (c > largestNumber) {
        largestNumber = c;
    }

    console.log(`The largest number is ${largestNumber}.`);
}

largestNumber(-3, -2, 1);
