function solution() {

    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    function restock(microelement, quantity) {

        ingredients[microelement] += quantity;
        return 'Success';
    }

    function prepare(recipe, qty) {

        let protein = 0;
        let carb = 0;
        let fat = 0;
        let flavour = 0;

        switch(recipe) {
            case 'apple':
                carb = 1 * qty;
                flavour = 2 * qty;
                break;
            case 'coke':
                carb = 10 * qty;
                flavour = 20 * qty;
                break;
            case 'burger':
                carb = 5 * qty;
                fat = 7 * qty;
                flavour = 3 * qty;
                break;
            case 'omlet':
                protein = 5 * qty;
                fat = 1 * qty;
                flavour = 1 * qty;
                break;
            case 'cheverme':
                protein = 10 * qty;
                carb = 10 * qty;
                fat = 10 * qty;
                flavour = 10 * qty;
                break;
            default:
                return 'No such recipe'
        }
        
        if(ingredients.protein < protein) {
            return 'Error: not enough protein in stock';
        }
        else if(ingredients.carbohydrate < carb) {
            return 'Error: not enough carbohydrates in stock';
        }
        else if(ingredients.fat < fat) {
            return 'Error: not enough fat in stock';
        }
        else if(ingredients.flavour < flavour) {
            return 'Error: not enough flavour in stock';
        }

        ingredients.protein -= protein;
        ingredients.carbohydrate -= carb;
        ingredients.fat -= fat;
        ingredients.flavour -= flavour;

        return 'Success';
    }

    function report() {
        return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
    }

    return function(input) {
        let args = input.split(' ');
        let command = args[0];

        switch(command) {
            case 'restock':
                console.log(restock(args[1], +args[2]));
                break;
            case 'prepare':
                console.log(prepare(args[1], +args[2]));
                break;
            case 'report':
                console.log(report());
                break;
        }
    };
}

let manager = solution();
manager('prepare cheverme 1');
manager('restock protein 10');
manager('prepare cheverme 1');
manager('restock carbohydrate 10');
manager('prepare cheverme 1');
manager('restock fat 10');
manager('prepare cheverme 1');
manager('restock flavour 10');
manager('prepare cheverme 1');
manager('report');
