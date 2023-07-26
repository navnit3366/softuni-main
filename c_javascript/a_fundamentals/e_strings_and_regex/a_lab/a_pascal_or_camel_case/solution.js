function solve() {
    let stringToModify = document.querySelector('#str1').value;
    let stringModifier = document.querySelector('#str2').value;

    let result = '';
    switch(stringModifier) {
        case 'Camel Case': result = toCamelCase(stringToModify); break;
        case 'Pascal Case': result = toPascalCase(stringToModify); break;
    }

    document.querySelector('#result').textContent = result;
}

function toCamelCase(string) {
    words = string.split(' ');
    
    let result = [];
    for(let i = 0; i < words.length; i++) {
        let modified = words[i].toLowerCase();

        if(i !== 0) {
            modified = modified.replace(modified[0], modified[0].toUpperCase());
        }

        result.push(modified);
    }

    return result.join('');
}

function toPascalCase(string) {
    words = string.split(' ');
    
    let result = [];
    for(let i = 0; i < words.length; i++) {
        let modified = words[i].toLowerCase();
        modified = modified.replace(modified[0], modified[0].toUpperCase());
        result.push(modified);
    }

    return result.join('');
}