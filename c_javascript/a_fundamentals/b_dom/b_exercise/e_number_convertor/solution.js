function solve() {
    addOptions();
    attachEvents();

    function attachEvents() {
        let btn = document.querySelector('button');
        btn.addEventListener('click', convertDecimal);
    }

    function convertDecimal() {
        let input = parseFloat(document.querySelector('#input').value);

        if(!isNaN(input)) {
            let selectMenuTo = document.querySelector('#selectMenuTo');
            let option = selectMenuTo.value;

            let result;
            switch(option) {
                case 'binary':
                    result = convertToBinary(input);
                    break;
                case 'hexadecimal':
                    result = convertToHexadecimal(input);
                    break;
            }

            document.querySelector('#result').value = result;
        }
    }

    function addOptions() {
        let selectMenuTo = document.querySelector('#selectMenuTo');
        selectMenuTo.innerHTML = `<option selected value="binary">Binary</option>`
        + `<option value="hexadecimal">Hexadecimal</option>`;
    }

    function convertToBinary(decimal) {
        return decimal.toString(2);
    }

    function convertToHexadecimal(decimal) {
        return decimal.toString(16);
    }
}