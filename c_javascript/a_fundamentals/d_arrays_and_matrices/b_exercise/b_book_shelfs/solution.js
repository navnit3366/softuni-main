class Book {
    constructor(title, author, genre) {
        this.title = title;
        this.author = author;
        this.genre = genre;
    }

    toString() {
        return `<p>--> ${this.title}: ${this.author}</p>`;
    }
}

class Shelf {
    constructor(id, genre) {
        this.id = id;
        this.genre = genre;
        this.books = [];
    } 

    toString() {
        let output = `<p>${this.id} ${this.genre}: ${this.books.length}</p>`;
        output += this.books.join('');
        return output;
    }
}

class Shelves {
    constructor() {
        this.shelves = [];
    }

    createShelf(id, genre) {
        if(!this.shelves.some(x => x.id == id)){
            this.shelves.push(new Shelf(id, genre));
        }
    }

    addBook(title, author, genre) {
        let shelf = this.shelves.find(x => x.genre == genre);
        if(shelf) {
            shelf.books.push(new Book(title, author, genre));
        }
    }

    toString() {
        this.shelves.sort((a, b) => b.books.length - a.books.length);
        return this.shelves.join('');
    }
}

function solve() {
    let strArr = getInput();
    let shelfRegex = /^\d+ -> /;

    let shelves = new Shelves();
    for(let str of strArr) {
        if(shelfRegex.test(str)) {
            let args = str.split(' -> ');
            let id = args[0];
            let genre = args[1];
            shelves.createShelf(id, genre);
        }
        else {
            let separators = [': ', ', '];
            let args = str.split(new RegExp(separators.join('|', 'g')))
            let title = args[0];
            let author = args[1];
            let genre = args[2];
            shelves.addBook(title, author, genre);
        }
    }

    document.querySelector('#result').innerHTML = shelves.toString();
}

function getInput() {
    let input = JSON.parse(document.querySelector('#arr').value);
    return input;
}
