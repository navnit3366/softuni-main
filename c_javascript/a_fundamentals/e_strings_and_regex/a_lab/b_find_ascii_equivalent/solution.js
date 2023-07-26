function solve() {
    let input = document.querySelector('#str').value;
    let args = input.split(' ');

    let asciiCodes = [];
    let string = '';
    for(let c of args) {
        if(isNumber(c)) {
            string += toString(parseInt(c));
            continue;
        }
        asciiCodes.push(toAsciiCode(c));
    }

    let result = getResult(asciiCodes, string);
    document.querySelector('#result').innerHTML = result;
}

function isNumber(str) {
    return !isNan(parseInt(str));
}

function toString(asciiCode) {
    return String.fromCharCode(asciiCode);
}

function toAsciiCode(string) {
    let asciiCodes = [];
    for(let c of string) {
        asciiCodes.push(c.charCodeAt(0));
    }
    return asciiCodes.join(' ');
}

function getResult(asciiCodes, string) {
    let result = '';
    for(let s of asciiCodes) {
        result += `<p>${s}</p>`;
    }
    result += `<p>${s}</p>`;
    return result;
}