let result = (function () {

    let Suits = {SPADES: '\u2660', HEARTS: '\u2665', DIAMONDS: '\u2666', CLUBS: '\u2663'};

    class Card {

        _validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',];

        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(value) {
            if (this._validFaces.includes(value))
                this._face = value;
            else
                throw Error('Invalid face!');
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {
            if (Object.values(Suits).includes(value))
                this._suit = value;
            else
                throw Error('Invalid suit!');
        }
    }

    return {
        Card: Card,
        Suits: Suits
    };
})();

let Card = result.Card;
let Suits = result.Suits;

let card = new Card('Q', Suits.CLUBS);
console.log(card);

card.face = 'A';
card.suit = Suits.DIAMONDS;
console.log(card);

let card2 = new Card('1', Suits.DIAMONDS);