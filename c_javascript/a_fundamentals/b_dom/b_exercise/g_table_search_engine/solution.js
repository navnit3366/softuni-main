function solve() {
    let searchBtn = document.querySelector('#searchBtn');
    searchBtn.addEventListener('click', eventListener);

    function eventListener() {
        let input = document.querySelector('#searchField').value;

        if(input !== '') {
            clearInput();
            clearSelectedClasses();
            selectMatches(input);
        }
    }

    function clearInput() {
        document.querySelector('#searchField').value = '';
    }

    function clearSelectedClasses() {
        let trArray = document.querySelectorAll('tbody tr');
        for(let tr of trArray) {
            tr.className = '';
        }
    }

    function haveMatch(text, textToSearch) {
        return text.toLowerCase().includes(textToSearch.toLowerCase());
    }

    function selectMatches(textToSearch) {
        let tdArray = document.querySelectorAll('tbody td');
        for(let td of tdArray) {
            if(haveMatch(td.innerText, textToSearch)) {
                td.parentNode.className = 'select';
            } 
        }
    }
}