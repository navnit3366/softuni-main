function binarySearch() {
    let arr = toArray(document.querySelector('#arr').value);
    let n = document.querySelector('#num').value;

    let index = searchIndex(arr, n);

    let output = `${n} is not in the array`;
    if(index) {
        output = `Found ${n} at index ${index}`;
    }

    document.querySelector('#result').innerText = output;
}

function toArray(string) {
    string = string.substring(1, string.length - 1);
    
    return string.split(', ');
}

function searchIndex(arr, n) {
    for(let i in arr) {
        if(arr[i] == n) {
            return i;
        }
    }
}