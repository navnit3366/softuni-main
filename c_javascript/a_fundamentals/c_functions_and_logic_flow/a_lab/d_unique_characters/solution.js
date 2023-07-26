function solve() {
    let input = document.querySelector('#string').value;
    let output = extractUniqueCharacters(input);
    document.querySelector('#result').innerText = output;
}

function extractUniqueCharacters(string) {
    let uniqueCharacters = '';
    for (let char of string) {
        if(!uniqueCharacters.includes(char)) {
            uniqueCharacters += char;
            continue;
        }

        if(char == ' ') {
            uniqueCharacters += char;
        }
    }
    return uniqueCharacters;
}