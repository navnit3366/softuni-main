let furnitureDatabase = [];

function solve() {
    let buttons = document.querySelectorAll('button');
    let generateBtn = buttons[0];
    let buyBtn = buttons[1];

    generateBtn.addEventListener('click', generateFurnitureListener); 
    buyBtn.addEventListener('click', buyFurnitureListener);
}

function generateFurnitureListener() {
    furnitureDatabase.push(...getFurniture());
    let views = getFurnitureViews();
    document.querySelector('#furniture-list').innerHTML = views;
}

function getFurniture() {
    let furniture = JSON.parse(document.querySelector('#exercise textarea').value)
    return furniture;
}

function getFurnitureViews() {
    let output = '';
    for(let f of furnitureDatabase) {
        output += '<div class="furniture">';
        output += `<p>Name: ${f.name}</p>`;
        output += `<img src="${f.img}" style="width: 200px;">`;
        output += `<p>Price: ${f.price}</p>`;
        output += `<p>Decoration factor: ${f.decFactor}</p>`;
        output += '<input type="checkbox">'
        output += '</div>';
    }
    return output;
}

function buyFurnitureListener() {
    let checkedElements = document.querySelectorAll('#furniture-list input:checked');
    let furnitureNames = getFurnitureNames(checkedElements);
    let totalPrice = 0;
    let avgDecFactor = 0;
    for(let fn of furnitureNames) {
        let furniture = furnitureDatabase.find(x => x.name == fn);
        if(furniture) {
            totalPrice += furniture.price;
            avgDecFactor += furniture.decFactor;
        }
    }
    avgDecFactor = avgDecFactor / furnitureNames.length;
    writeLog(`Bought furniture: ${furnitureNames.join(', ')}`);
    writeLog(`Total price: $${totalPrice.toFixed(2)}`);
    writeLog(`Average decoration factor: ${avgDecFactor.toFixed(2)}`);
}

function getFurnitureNames(checkedElements) {
    let furnitureNames = [];
    for(let el of checkedElements) {
        furnitureNames.push(el.parentNode.querySelector('p').textContent.split(' ')[1]);
    }
    return furnitureNames;
}

function writeLog(message) {
    document.querySelectorAll('textArea')[1].innerHTML += message + '\n';
}

let input = [{ "name": "Wardrobe", "img": "https://www.at-home.co.in/cdn/shop/products/JOYCE4DRLS.jpg?v=1652765606", "price": 160, "decFactor": 0.8 }, { "name": "Sofa", "img": "https://cdn-images.article.com/products/SKU312A/2890x1500/image88349.jpg?fit=max&w=1200&q=100", "price": 300, "decFactor": 1.8 }];
