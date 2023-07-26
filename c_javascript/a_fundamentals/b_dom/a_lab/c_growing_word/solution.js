/**
 * Changes the size and color of paragraph with Growing Word on click event.
 */
function solve() {
    let btn = document.querySelector('button');
    btn.addEventListener('click', handleClick);

    var totalClicks = 0;
    var color;
    function handleClick() {
        totalClicks += 1;

        let growingWord = document.querySelector('#exercise > p');

        growingWord.style.fontSize = `${totalClicks * 2}px`;

        if(!color || color == 'red') {
            color = 'blue';
        }
        else if(color == 'blue') {
            color = 'green';
        }
        else {
            color = 'red';
        }

        growingWord.style.color = color;
    }
}