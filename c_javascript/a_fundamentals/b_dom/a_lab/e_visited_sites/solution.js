function solve() {
    let links = document.querySelectorAll('#exercise a');

    for(link of links) {
        link.addEventListener('click', handleClick);
    }

    function handleClick(event) {
        let sibling = event.target.nextElementSibling;
        let text = sibling.innerText;
        let visitedCount = +text.split(' ')[1] + 1;
        sibling.innerText = `Visited: ${visitedCount} times`
    }
}