class Rat {

    constructor(name) {
        this.name = name;
        this._unitedRats = [];
    }

    get name() { return this._name }
    set name(value) { typeof value == 'string' ? this._name = value : {} }

    unite(otherRat) {
        if (otherRat instanceof Rat)
            this._unitedRats.push(otherRat);
    }

    getRats() {
        return this._unitedRats;
    }

    toString() {
        let output = '';
        output += this._name;
        for(let r of this._unitedRats) {
            output += `\n##${r.toString()}`
        }
        return output;
    }
}

let r1 = new Rat("Pesho");
let r2 = new Rat('Gosho');
let r3 = new Rat('Sasho');

r1.unite(r2);
r2.unite(r3)

console.log(r1.getRats());
console.log(r1.toString());