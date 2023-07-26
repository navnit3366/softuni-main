function calculateTotal(fruit, weight, price) {
    let weightKg = weight / 1000;
    let total = weightKg * price;
    console.log(`I need ${total.toFixed(2)} leva to buy ${weightKg.toFixed(2)}`
    + ` kilograms ${fruit}.`);
}

calculateTotal('orange', 2500, 1.8);