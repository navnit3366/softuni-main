class OreProcessor {
    constructor(desiredThickness, oreThickness) {
        this.desiredThickness = desiredThickness;
        this.oreThickness = oreThickness;
        this.result = '';
    }

    processOre() {
        this.result = '';
        let oreThickness = this.oreThickness;
        let desiredThickness = this.desiredThickness;
        this.log(`Processing chunk ${this.oreThickness} microns`)
        while(oreThickness !== desiredThickness) {
            let operation = this.getOperation(oreThickness, desiredThickness);
            oreThickness = this.applyOperation(operation, oreThickness, desiredThickness);
            oreThickness = this.transportAndWash(oreThickness);

            if(this.validateXRay(oreThickness, desiredThickness)) {
                this.log(`X-ray x1`);
                oreThickness = this.xray(oreThickness);
            }
            if(oreThickness == desiredThickness) {
                this.log(`Finished crystal ${oreThickness} microns`);
                break;
            }
        }
        return this.result;
    }

    getOperation(oreThickness, desiredThickness) {
        if(this.validateOperation(this.cut, oreThickness, desiredThickness)) {
            return this.cut;
        }
        else if(this.validateOperation(this.lap, oreThickness, desiredThickness)) {
            return this.lap;
        }
        else if(this.validateOperation(this.grind, oreThickness, desiredThickness)) {
            return this.grind;
        }
        else if(this.validateOperation(this.etch, oreThickness, desiredThickness)) {
            return this.etch;
        }
        else {
            return false;
        }
    }

    applyOperation(operation, oreThickness, desiredThickness) {
        let operationName = this.getOperationName(operation);
        let counter = 0;
        while(this.validateOperation(operation, oreThickness, desiredThickness)) {
            oreThickness = operation(oreThickness);
            counter++;
        }
        this.log(`${operationName} x${counter}`);
        return oreThickness;
    }

    getOperationName(operation) {
        switch(operation) {
            case this.cut: return 'Cut';
            case this.lap: return 'Lap';
            case this.grind: return 'Grind';
            case this.etch: return 'Etch';
        }
    }

    validateOperation(operation, a, b) {
        if (operation(a) >= b - 1) {
            return true;
        }
        return false;
    } 

    validateXRay(oreThickness, desiredThickness) {
        if(oreThickness >= desiredThickness - 1 && oreThickness < desiredThickness) {
            return true;
        }
        return false;
    }

    log(text) {
        this.result += `<p>${text}</p>`;
    }

    cut(a) {
        return a / 4;
    }

    lap(a) {
        return a - (a * 0.2);
    }

    grind(a) {
        return a - 20;
    }

    etch(a) {
        return a - 2;
    }

    xray(a) {
        return a + 1;
    }

    transportAndWash(a) {
        this.log(`Transporting and washing`);
        return Math.floor(a);
    }
}

function solve() {
    let result = '';
    let ores = JSON.parse(document.querySelector('#arr').value);
    let desiredThickness = ores.shift();

    for(let oreThickness of ores) {
        let oreProcessor = new OreProcessor(+desiredThickness, +oreThickness);
        result += oreProcessor.processOre();
    }

    document.querySelector('#result').innerHTML = result;
}
