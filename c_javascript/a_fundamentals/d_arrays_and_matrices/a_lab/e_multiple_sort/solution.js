function solve() {
    let strArray = JSON.parse(document.querySelector('#arr').value);
    let numArray = strArray.map(Number);
    strArray.sort();
    numArray.sort((a, b) => a - b);
    document.querySelector('#result').textContent = `${numArray}, ${strArray}`;
}