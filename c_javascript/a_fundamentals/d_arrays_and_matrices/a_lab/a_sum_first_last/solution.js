function solve() {
    let input = document.querySelector('#arr').value;
    let numbers = parseInput(input);
    let multipliedNumbers = multiplyNumbers(numbers);
    let output = parseOutput(multipliedNumbers);
    document.querySelector('#result').innerHTML = output;
}

function parseOutput(numbers) {
    console.log(numbers)
    let output = '';
    for(let i in numbers) {
        output += `<br>${i} ->  ${numbers[i]}`;
    }
    return output;
}


function parseInput(input) {
    input = input.substring(1, input.length - 1);
    let inputArgs = input.split(', ');
    let numbersArr = [];
    for(let n of inputArgs) {
        numbersArr.push(+n[1]);
    }
    return numbersArr;
}

function multiplyNumbers(numbers) {
    let multipliedNumbers = [];
    for (let n of numbers) {
        multipliedNumbers.push(+n * numbers.length);
    }
    return multipliedNumbers;
}
