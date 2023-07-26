function solve() {
    let sentences = JSON.parse(document.querySelector('#arr').value);
    let replaceTo = document.querySelector('#str').value;
    let replace = sentences[0].split(' ')[2];

    let output = replaceWords(sentences, replace, replaceTo);

    document.querySelector('#result').innerHTML = output.join('');
}

function replaceWords(sentences, replace, replaceTo) {
    let newSentences = [];
    for(let sentence of sentences) {
        let newSentence = sentence.replace(new RegExp(replace, 'gi'), replaceTo);
        console.log(newSentence)
        newSentences.push(`<p>${newSentence}</p>`);
    }
    return newSentences;
}

["I love pROgRaMminG", "proGramMing is fun", "ProgrAmmIng.", "JSProgramming", "!@#$proGRAMming!@#$"]