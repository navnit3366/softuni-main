function leapYear() {
    let checkBtn = document.querySelector('button');
    checkBtn.addEventListener('click', eventListener);
}

function eventListener() {
    let input = document.querySelector('input');
    let output = generateOutput(+input.value);
    document.querySelector('#year h2').innerText = output;
    document.querySelector('#year div').innerText = input.value;
    input.value = '';
}

function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0);
}

function generateOutput(year) {
    let output = 'Not Leap Year';
    if(isLeapYear(year)) {
        output = 'Leap Year';
    }
    return output;
}