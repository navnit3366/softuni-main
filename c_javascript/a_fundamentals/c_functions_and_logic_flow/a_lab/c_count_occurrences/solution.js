function solve() {
    let string = document.querySelector('#string');
    let char = document.querySelector('#character');

    let output;
    if(string.value !== '' && char.value !== '') {
        let occurrences = countOccurrences(char.value, string.value);

        if(occurrences % 2 == 0) {
            output = `Count of ${char.value} is even.`;
        }
        else {
            output = `Count of ${char.value} is odd.`;
        }
    }
    else {
        output = 'Error!';
    }

    document.querySelector('#result').innerText = output;
    string.value = '';
    char.value = '';
}

function countOccurrences(char, string) {
    let occurrences = 0;
    for(let c of string) {
        if(c == char) {
            occurrences++;
        }
    }
    return occurrences;
}