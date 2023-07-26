function solve() {
    let start = document.querySelector('#num1');
    let finish = document.querySelector('#num2');
    let output = multiplicationTable(start.value, finish.value);
    document.querySelector('#result').innerHTML = output;
    start.value = '';
    finish.value = '';
}

function multiplicationTable(start, finish) {
    let output = '';

    if(start > finish) {
        output = 'Try with other numbers.'
    }
    else {
        while(start <= finish) {
            output += `<br/>${start} * ${finish} = ${start*finish}`;
            start++;
        }
    }

    return output;
}