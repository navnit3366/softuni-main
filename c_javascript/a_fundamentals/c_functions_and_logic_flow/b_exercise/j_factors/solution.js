function solve() {
    let number = +document.querySelector('#num').value;
    let factors = getFactors(number);
    document.querySelector('#result').innerText = factors.join(' ');
}

function getFactors(number) {
    let factors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}