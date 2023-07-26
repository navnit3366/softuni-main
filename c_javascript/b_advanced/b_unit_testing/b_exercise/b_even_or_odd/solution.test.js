const assert = require('chai').assert;
const isEvenOrOdd = require('./solution');

describe('isEvenOrOdd -> checks if string length is even or odd', function() {

    it('with number parameter, should return undefined', function() {
        let result = isEvenOrOdd(1);
        assert.equal(result, undefined);
    });
    
    it('with even string, should return even', function() {
        let result = isEvenOrOdd('hi');
        assert.equal(result, 'even');
    });

    it('with odd string, should return odd', function() {
        let result = isEvenOrOdd('hello');
        assert.equal(result, 'odd');
    });
});