function makeCard(face, suit) {
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits = ['S', 'H', 'D', 'C'];
    let suitCodes = {S: '\u2660', H: '\u2665', D: '\u2666', C: '\u2663'};

    if(!validFaces.includes(face))
        throw new Error('Invalid face!');

    if(!validSuits.includes(suit))
        throw new Error('Invalid suit!');

    let card = {
        face: face,
        suit: suitCodes[suit],
        toString() {
            return `${this.face}${this.suit}`;
        }
    };

    return card;
}

console.log('' + makeCard('A', 'S'));
console.log('' + makeCard('10', 'H'));
console.log('' + makeCard('10', 'h'));
