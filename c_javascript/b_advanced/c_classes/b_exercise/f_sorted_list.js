class NumbersList {

    constructor() {
        this.list = [];
    }

    add(n) {
        this.list.push(n);
        this.list.sort((a, b) => a - b);
    }

    remove(index) {
        if (index >= 0 || index <= this.list.length - 1) {
            this.list.splice(index, 1);
        }
    }

    get(index) {
        if (index >= 0 || index <= this.list.length - 1) {
            return this.list[index];
        }
    }

    size() {
        return this.list.length;
    }
}

let list = new NumbersList();

list.add(50);
list.add(1);
list.add(25);
console.log(list.list);

list.remove(2);
console.log(list.list);