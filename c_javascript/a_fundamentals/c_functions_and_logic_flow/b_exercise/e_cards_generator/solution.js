const cards = {'1': 0, '2': 1, '3': 2, '4': 3, '5': 4, '6': 5, '7': 6,
            '8': 7, '9': 8, '10': 9, 'J': 10, 'Q': 11, 'K': 12, 'A': 13 }

function solve() {
    attachEvents();
}

function attachEvents() {
    let getCardsBtn = document.querySelector('button');
    getCardsBtn.addEventListener('click', getCards);
}

function getCards() {
    let fromValue = document.querySelector('#from').value;
    let toValue = document.querySelector('#to').value;
    let suitValue = document.querySelector('select').value.split(' ')[1];

    if(cards.hasOwnProperty(fromValue) && cards.hasOwnProperty(toValue)) {
        for(let key in cards) {
            if(cards[key] >= cards[fromValue] && cards[key] <= cards[toValue]) {
                cardElement = createCardElement(key, suitValue)
                document.querySelector('#cards').appendChild(cardElement)
            }
        }
    }
}

function createCardElement(value, suit) {
    let cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.innerHTML = `<p>${suit}</p><p>${value}</p><p>${suit}</p>`;
    return cardElement;
}