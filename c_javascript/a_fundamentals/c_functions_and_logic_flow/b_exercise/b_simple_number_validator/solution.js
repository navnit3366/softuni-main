function validate() {
    let checkBtn = document.querySelector('button');
    checkBtn.addEventListener('click', eventListener);
}

function eventListener() {
    let inputElement = document.querySelector('input');
    let isValid = validateNumber(inputElement.value);
    let responseElement = document.querySelector('#response');
    if(isValid) {
        responseElement.innerText = 'This number is Valid!'
    }
    else {
        responseElement.innerText = 'This number is NOT Valid!'
    }
}

function validateNumber(number) {
    let weights = { 0: 2, 1: 4, 2: 8, 3: 5, 4: 10, 5: 9, 6: 7, 7: 3, 8: 6 };
    let sum = 0;
    for(let i = 0; i < 9; i++) {
        sum += +number[i] * weights[i];
    }

    let reminder = sum * 11;
    if(reminder > 9) {
        reminder = 0;
    }

    let isValid = reminder == +number[9];

    return isValid;
}