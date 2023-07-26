function solve() {
    let degrees = document.querySelector('#num1');
    let type = document.querySelector('#type')

    let output = '';
    if(validateDegrees(degrees.value) && validateType(type.value)) {
        switch(type.value.toLowerCase()) {
            case 'celsius':
                output = convertToFahrenheit(degrees.value);
                break;
            case 'fahrenheit':
                output = convertToCelsius(degrees.value);
                break;
        }
    }
    else {
        output = 'Error!';
    }

    document.querySelector('#result').innerText = output;
    degrees.value = '';
    type.value = '';
}

function validateDegrees(degrees) {
    return !isNaN(parseInt(degrees));
}

function validateType(type) {
    return ['fahrenheit', 'celsius'].includes(type.toLowerCase())
}

function convertToFahrenheit(celsius) {
    celsius = parseInt(celsius);
    let fahrenheit = (celsius * 9/5) + 32;
    return Math.round(fahrenheit);
}

function convertToCelsius(fahrenheit) {
    fahrenheit = parseInt(fahrenheit);
    let celsius = (fahrenheit - 32) * 5/9;
    return Math.round(celsius);
}