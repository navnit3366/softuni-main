function solve() {
    let element = document.querySelector('#num').value;
    let elementArr = JSON.parse(document.querySelector('#arr').value);
    let searchResults = getSearchResults(element, elementArr);
    document.querySelector('#result').textContent = searchResults;
}
function getSearchResults(element, elementArr) {
    let results = [];
    for (let el of elementArr) {
        let index = searchElement(element, el);
        let indexFound = index !== -1 ? true : false;
        results.push(`${indexFound} -> ${index}`);
    }
    return results;
}

function searchElement(element, arr) {
    let index = -1;
    for(let i in arr) {
        if(arr[i] == element) {
            index = i;
            break;
        }
    }
    return index;
}