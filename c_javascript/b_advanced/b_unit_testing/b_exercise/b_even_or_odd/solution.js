function isEvenOrOdd(str) {

    if(typeof str !== 'string') {
        return undefined;
    }

    return str.length % 2 == 0 ? 'even' : 'odd';
}

module.exports = isEvenOrOdd;