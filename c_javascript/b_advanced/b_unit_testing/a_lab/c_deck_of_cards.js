function printDeckOfCards(cards) {

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

    let validCards = [];
    for(let c of cards) {
        let cArgs = c.split('');

        let face = cArgs[0];
        let suit = cArgs[1];

        if(cArgs.length == 3) {
            face = cArgs[0] + cArgs[1];
            suit = cArgs[2];
        }

        try {
            validCards.push(makeCard(face, suit).toString());
        } catch(error) {
            console.log(`Invalid card: ${c}`);
            return;
        }
    }

    console.log(validCards.join(' '));
    return;
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);