function solve() {
    let input = document.querySelector('#arr').value;
    let strArray = JSON.parse(input);
    let output = [];
    for(let str of strArray) {
        let formattedStr = formatStr(str);
        output.push(formattedStr);
    }
    document.querySelector('#result').textContent = output.join(' ');
}

function formatStr(str) {
    let formattedStr = reverseStr(str);
    formattedStr = capitalizeFirstLetter(formattedStr);
    return formattedStr;
}

function reverseStr(str) {
    let reversedStr = str.split('').reverse().join('');
    return reversedStr;
}

function capitalizeFirstLetter(str) {
    capitalizedStr = str[0].toUpperCase() + str.substring(1, str.length);
    return capitalizedStr;
}
