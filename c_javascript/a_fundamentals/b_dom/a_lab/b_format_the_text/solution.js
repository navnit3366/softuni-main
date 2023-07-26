function solve(){
    let text = document.querySelector('#input').textContent;
    let sentences = text.split('.');

    let container = [];
    while(sentences.length > 0) {
        container.push(sentences.shift());
        if(container.length == 3) {
            addParagraph(container);
            container = [];
        }
    }

    if(container.length > 0) {
        addParagraph(container);
    }

    function addParagraph(sentences) {
        document.querySelector('#output').innerHTML +=
        `<p>${container.join('. ')}</p>`;
    }
}