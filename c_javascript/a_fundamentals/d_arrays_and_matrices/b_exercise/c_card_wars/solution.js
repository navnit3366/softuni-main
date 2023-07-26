var cards = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, "J": 11, "Q": 12, "K": 13, "A": 14 };

function solve() {
    let input = JSON.parse(document.querySelector('#arr').value);
    let player1 = input[0];
    let player2 = input[1];

    let turns = 0;
    while(player1.length > 0 && player2.length > 0 && turns !== 20) {
        let card1 = player1.shift();
        let card2 = player2.shift();

        if(cards[card1] > cards[card2]) {
            player1.push(card1, card2);
        }
        else {
            player2.push(card1, card2);
        }

        turns++;
    }

    let result = `<p>First -> ${player1.join(', ')}</p>`;
    result += `<p>Second -> ${player2.join(', ')}</p>`;
    document.querySelector('#result').innerHTML = result;
}
