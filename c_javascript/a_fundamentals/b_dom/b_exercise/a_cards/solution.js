function solve() {
    const winnerColor = 'green';
    const looserColor = 'red';

    let cards = document.querySelectorAll('#exercise img');
    for(let card of cards) {
        card.addEventListener('click', eventHandler);
    }

    function eventHandler(event) {
        let card = event.target;
        let playerId = card.parentNode.id;
        let result = document.querySelectorAll('#result span');
        let result1 = result[0];
        let result2 = result[2];

        if(result1.textContent == '' || result2.textContent == '') {
            if(playerId == 'player1Div') {
                selectCardAndAddResult(card, result1);
            }
            else {
                selectCardAndAddResult(card, result2);
            }
            card.sr
            if(result1.textContent !== '' && result2.textContent !== '') {
                selectWinner(result1, result2);
                setTimeout(addResultToHistory, 1950);
                setTimeout(clearResult, 2000);
            }
        }
    }

    function selectCardAndAddResult(card, result) {
        if(result.textContent == '') {
            card.src = 'images/whiteCard.jpg';
            result.textContent = card.name;
        }
    }

    function selectWinner(result1, result2) {
        let player1Card = document.querySelector(`#player1Div [name="${result1.textContent}"]`);
        let player2Card = document.querySelector(`#player2Div [name="${result2.textContent}"]`);
        if(+player1Card.name > +player2Card.name) {
            player1Card.style.border = `2px solid ${winnerColor}`;
            player2Card.style.border = `2px solid ${looserColor}`;
        }
        else if(+player2Card.name > +player1Card.name) {
            player2Card.style.border = `2px solid ${winnerColor}`;
            player1Card.style.border = `2px solid ${looserColor}`;
        }
    }

    function clearResult() {
        let result = document.querySelectorAll('#result span');
        result[0].textContent = '';
        result[2].textContent = '';
    }

    function addResultToHistory() {
        let result = document.querySelectorAll('#result span');
        let history = document.querySelector('#history');

        history.textContent += ` [${result[0].textContent} vs ${result[2].textContent}]`;
        history.textContent.trim();
    }
}