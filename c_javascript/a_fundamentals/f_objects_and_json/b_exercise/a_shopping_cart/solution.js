var cart = {};

function solve() {
    let buttons = Array.from(document.querySelectorAll('button'));
    let buyButton = buttons.pop();
    buttons.map(x => x.addEventListener('click', addToCartEventListener))
    buyButton.addEventListener('click', buyEventListener);
}

function addToCartEventListener(event) {
    let productArgs = event.target.parentNode.querySelectorAll('p');
    let productName = productArgs[0].textContent;
    let productPrice = +productArgs[1].textContent.split(' ')[1];

    if(!(productName in cart)) {
        cart[productName] = 0;
    }
    cart[productName] += productPrice;

    document.querySelector('textarea').textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
}

function buyEventListener() {
    let total = 0;
    for(let productName in cart) {
        total += cart[productName];
    }

    document.querySelector('textarea').textContent += `You bought ${Object.keys(cart).join(', ')} for ${total.toFixed(2)}\n`;
    cart = {};
}