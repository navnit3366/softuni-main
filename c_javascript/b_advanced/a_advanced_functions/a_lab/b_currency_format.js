function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;

    result += value.toFixed(2).substr(-2,2);
    
    return symbolFirst ? `${symbol} ${result}` : `${result} ${symbol}`;
}

function dollarFormatter(value) {
    return currencyFormatter(',', '$', true, value);
}

console.log(dollarFormatter(3.1429));