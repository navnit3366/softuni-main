function getProcessor() {

    let processor = {
        init: init,
        add: add,
        subtract: subtract
    };

    function init(selector1='#num1', selector2='#num2', resultSelector='#result') {
        processor.el1 = document.querySelector(`${selector1}`);
        processor.el2 = document.querySelector(`${selector2}`);
        processor.result = document.querySelector(`${resultSelector}`);
    }

    function add() {
        let sum = +processor.el1.value + +processor.el2.value;
        processor.result.setAttribute('value', sum);
    }

    function subtract() {
        let diff = +processor.el1.value - +processor.el2.value;
        processor.result.setAttribute('value', diff);
    }

    return processor;
}

let sumBtn = document.querySelector('#sumButton');
let subtractBtn = document.querySelector('#subtractButton');

sumBtn.addEventListener('click', function() {
    let processor = getProcessor();
    processor.init();
    processor.add();
});

subtractBtn.addEventListener('click', function() {
    let processor = getProcessor();
    processor.init();
    processor.subtract();
});