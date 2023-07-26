function solve() {
    let num1 = +document.querySelector('#firstNumber').value;
    let num2 = +document.querySelector('#secondNumber').value;
    let str1 = document.querySelector('#firstString').value;
    let str2 = document.querySelector('#secondString').value;
    let str3 = document.querySelector('#thirdString').value;

    let output = specialWords(num1, num2, str1, str2, str3);

    document.querySelector('#result').innerText = output;
}

function specialWords(num1, num2, str1, str2, str3) {
    let output = '';
    for(let i = num1; i <= num2; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            output += `\n${i} ${str1}-${str2}-${str3}`;
        }
        else if(i % 3 == 0) {
            output += `\n${i} ${str2}`;
        }
        else if(i % 5 == 0) {
            output += `\n${i} ${str3}`;
        }
        else {
            output += `\n${i}`;
        }
    }
    return output;
}