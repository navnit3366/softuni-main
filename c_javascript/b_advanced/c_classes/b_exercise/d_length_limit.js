class Stringer {

    constructor(string, length) {
        this._innerString = string;
        this._innerLength = length;
    }

    increase(length) {
        this._innerLength += length;
    }

    decrease(length) {
        this._innerLength -= length;
        if (this._innerLength <= 0)
            this._innerLength = 0;
    }

    toString() {
        if (this._innerLength == 0)
            return '...';
        else if (this._innerLength < this._innerString.length)
            return this._innerString.substring(0, this._innerLength) + '...';
        else
            return this._innerString;
    }
}

let test = new Stringer("Test", 5);

console.log(test.toString()); //Test

test.decrease(3);

console.log(test.toString()); //Te...

test.decrease(5);

console.log(test.toString()); //...

test.increase(4);

console.log(test.toString()); //Test