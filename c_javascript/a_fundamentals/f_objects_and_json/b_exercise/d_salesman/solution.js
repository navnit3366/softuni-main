let storage = [];
let profit = 0;

function solve() {
    let buttons = document.querySelectorAll('button');
    let loadProductsBtn = buttons[0];
    let buyProductsBtn = buttons[1];
    let endDayBtn = buttons[2];

    loadProductsBtn.addEventListener('click', loadProductsListener);
    buyProductsBtn.addEventListener('click', buyProductsListener);
    endDayBtn.addEventListener('click', endDayListener);
}

function loadProductsListener() {
    let products = JSON.parse(document.querySelector('textarea').value);

    for(let tempProduct of products) {
        let product = storage.find(x => x.name == tempProduct.name);
        if(product) {
            product.quantity += tempProduct.quantity;
        }
        else {
            storage.push(tempProduct);
        }
        writeLog(`Successfully added ${tempProduct.quantity} ${tempProduct.name}. Price ${tempProduct.price.toFixed(2)}`);
    }
}

function buyProductsListener() {
    let products = JSON.parse(document.querySelectorAll('textarea')[1].value);

    for(let tempProduct of products) {
        let product = storage.find(x => x.name == tempProduct.name);
        if(product) {
            if(product.quantity >= tempProduct.quantity) {
                product.quantity -= tempProduct.quantity;
                profit += tempProduct.quantity * product.price;
                writeLog(`${tempProduct.name} ${tempProduct.quantity} sold for ${(product.price * tempProduct.quantity).toFixed(2)}.`);
                continue;
            }
        }
        writeLog(`Cannot complete order.`);
    }
}

function endDayListener() {
    let buttons = document.querySelectorAll('button');
    let loadProductsBtn = buttons[0];
    let buyProductsBtn = buttons[1];
    let endDayBtn = buttons[2];
    loadProductsBtn.disabled = true;
    buyProductsBtn.disabled = true;
    endDayBtn.disabled = true;
    writeLog(`Profit: ${profit.toFixed(2)}`);
}

function writeLog(message) {
    let log = document.querySelector('textarea[disabled]');
    log.innerHTML += message + '\n';
}

let loadProductsInput = [
    {"name": "tomatoes", "quantity": 20, "price": 0.50},
    {"name": "potatoes", "quantity": 10, "price": 0.60},
]

let buyProductsInput = [
    {"name": "tomatoes", "quantity": 20}
]