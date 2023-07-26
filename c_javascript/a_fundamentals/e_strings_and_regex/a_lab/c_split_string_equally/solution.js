function solve() {
    let str = document.querySelector('#str').value;
    let num = +document.querySelector('#num').value;

    let output = split(str, num);

    document.querySelector('#result').textContent = output.join(' ');
}

function split(string, number) {
    let reminder = string.length % number;
    if(reminder !== 0) {
        let n = number - reminder;
        string = concatStart(string, n);
    }
    return splitNoReminder(string, number);
}

function concatStart(string, n) {
    let index = 0;
    for(let i = 0; i < n; i++) {
        if(i > string.length - 1) {
            index = 0;
        }
        string += string[index];
        index++;
    }
    return string;
}

function splitNoReminder(string, number) {
    let result = [];
    if(string.length % number == 0) {
        for(let i = 0; i < string.length; i+=number) {
            result.push(string.substring(i, i+number));
        }
    }
    return result;
}
