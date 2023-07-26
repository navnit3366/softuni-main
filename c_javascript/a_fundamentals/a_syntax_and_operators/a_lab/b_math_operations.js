function mathOperations (num1, num2, operator) {
    let result = 0;

    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
        default: console.log('Operator not supported.');
    }

    console.log(result);
}

mathOperations(5, 6, '+');