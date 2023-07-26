const assert = require('chai').assert;
const lookupChar = require('./solution');

describe('lookupChar(string, index) -> returns the character at the specified index', function() {

    it('with incorrect string parameter type, should return undefined', function () {
        let result = lookupChar(23, 1);
        assert.equal(result, undefined);
    });

    it('with incorrect index parameter type, should return undefined', function () {
        let result = lookupChar('pesho', '1');
        assert.equal(result, undefined);
    });

    it('with negative index value, should return incorrect index message', function () {
        let result = lookupChar('pesho', -1);
        assert.equal(result, 'Incorrect index');
    });

    it('with index equal or greater than string length, should return incorrect index message', function () {
        let result = lookupChar('pesho', 5);
        assert.equal(result, 'Incorrect index');
    });

    it('with correct parameters, should return correct value', function () {
        let result = lookupChar('pesho', 0);
        assert.equal(result, 'p');
    })
});