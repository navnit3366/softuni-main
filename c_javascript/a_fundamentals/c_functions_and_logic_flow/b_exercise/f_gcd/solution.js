function greatestCD() {
    let num1 = +document.querySelector('#num1').value;
    let num2 = +document.querySelector('#num2').value;
    let result = gcd(num1, num2);
    document.querySelector('#result').innerText = result;
}

function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    if(b == 0) {
        return a;
    }

    return gcd(b, a % b);
}