const assert = require('chai').assert;
const sum = require('./solution');

describe('sum(arr) -> sum array of numbers', function() {

    it('should return 6, with arr = [1, 2, 3]', function() {
        let arr = [1, 2, 3];
        let result = sum(arr);
        assert.equal(result, 6);
    });

    it('should throw error, with object as input', function() {
        let obj = {name: 'Pesho'};
        assert.throws(function() {sum(obj)}, Error);
    });

    it('should throw error, with arr = ["1", 2, 3]', function() {
        let arr = ['1', 2, 3];
        assert.throws(function() {sum(arr)}, Error);
    });
});