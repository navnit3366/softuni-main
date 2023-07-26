// Checks if all the digits in a number are the same.
// Prints the sum of the digits in a number.
function sameDigits(number) {
    let numberStr = number.toString();
    let sameDigits = true;
    let digitsSum = +numberStr[0];

    for(let i = 1; i < numberStr.length; i++) {
        digitsSum += +numberStr[i];

        if(sameDigits && numberStr[i] !== numberStr[i-1]) {
            sameDigits = false;
        }
    }

    console.log(sameDigits);
    console.log(digitsSum);
}

sameDigits(1);