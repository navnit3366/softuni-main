/**
 * Calculates whether the money inserted in a coffee machine are enough to
 * make an order.
 * @param {Array} strArray - Each string represents an order with different
 * parts separated by ', '.
 */
function makeOrder(strArray) {
    let income = 0;
    for(let order of strArray) {
        let args = order.split(', ');
        let total = 0;
        let coins = +args[0];
        let hasMilk = args.includes('milk');
        let hasSugar = +args[args.length - 1] !== 0; 

        let drinkType;
        if (args.includes('coffee')) {
            drinkType = 'coffee';
            args.includes('decaf') ? total = 0.9 : total = 0.8;
        }
        else {
            drinkType = 'tea';
            total = 0.8;
        }

        if(hasMilk) {
            total += +(total * 0.1).toFixed(1);
        }

        if(hasSugar) {
            total += 0.1;
        }

        if(coins >= total) {
            console.log(`You ordered ${drinkType}. Price ${total.toFixed(2)}$ `
            + `Change: ${(coins - total).toFixed(2)}$`);
            income += total;
        }
        else {
            console.log(`Not enough money for ${drinkType}. `
            + `Need ${(total - coins).toFixed(2)}$ more.`);
        }
    }

    console.log(`Income Report: ${income.toFixed(2)}$`)
}

makeOrder(['8.00, coffee, decaf, 4', '1.00, tea, 2']);