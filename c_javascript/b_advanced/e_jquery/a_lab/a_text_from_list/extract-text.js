function extractText() {

    let items = $('ul li').toArray().map(x => x.innerText);

    $('#result').text(`${items.join(', ')}`);
}
