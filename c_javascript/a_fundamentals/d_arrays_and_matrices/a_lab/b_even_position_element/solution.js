function solve() {
    let input = document.querySelector('#arr').value;
    let numbers = input.split(', ');
    let output = '';
    for(let i in numbers) {
        if(i % 2 == 0) {
            output += `${numbers[i]} x `;
        }
    }
    output = output.substring(0, output.length - 3);
    document.querySelector('#result').textContent = output;
}