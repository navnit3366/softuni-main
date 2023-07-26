let Person = require('./b_person');

function getPersons() {
    let people = [
        new Person('Maria', 'Petrova', 22, 'mp@yahoo.com'),
        new Person('SoftUni'),
        new Person('Pesho', 'Peshow', 30),
        new Person('Ivan', 'Ivanov', 19, 'ii@abv.bg')
    ];

    return people;
}

console.log(getPersons());