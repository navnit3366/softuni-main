function solve() {
    attachEvents();
}

function attachEvents() {
    let buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', chop);
    buttons[1].addEventListener('click', dice);
    buttons[2].addEventListener('click', spice);
    buttons[3].addEventListener('click', bake);
    buttons[4].addEventListener('click', fillet);
}

function getInput() {
    let input = document.querySelector('input').value;
    let number = 0;
    if(input !== '') {
        number = +input;
    }
    return number;
}

function writeResult(output) {
    document.querySelector('input').value = output;
    document.querySelector('#output').innerText = output;
}

function chop() {
    let number = getInput();
    writeResult(number / 2);
}

function dice() {
    let number = getInput();
    writeResult(Math.sqrt(number));
}

function spice() {
    let number = getInput();
    number++;
    writeResult(number);
}

function bake() {
    let number = getInput();
    writeResult(number * 3);
}

function fillet() {
    let number = getInput();
    writeResult(number - (number * 0.2));
}
