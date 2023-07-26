function getNext() {
    let num = +document.querySelector('#num').value;
    document.querySelector('#result').innerText = hailstoneSequence(num).join(' ');
}

function hailstoneSequence(num) {
    let sequence = [];

    while(true) {
        sequence.push(num);
        if(num == 1) {
            break;
        }
        if(num % 2 == 0) {
            num = num / 2;
        }
        else {
            num = (3 * num) + 1;
        }
    }
    
    return sequence;
}