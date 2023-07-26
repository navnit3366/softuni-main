const assert = require('chai').assert;
const isSymmetric = require('./solution');

describe('isSymmetric(arr) -> checks if arr is equal to reversed arr', function() {
    
    it('should return true, if arr = [1, 2, 1]', function() {
        let arr = [1, 2, 1];
        let result = isSymmetric(arr);
        assert.equal(result, true);
    });

    it('should return false, if arr = [1, 2, 3]', function() {
        let arr = [1, 2, 3];
        let result = isSymmetric(arr);
        assert.equal(result, false);
    });


    it('should return false, if arr is string', function() {
        let str = 'abba';
        let result = isSymmetric(str);
        assert.equal(result, false);
    });

    it('should return false, if arr is object', function() {
        let obj = {name: 'Pesho'};
        let result = isSymmetric(obj);
        assert.equal(result, false);
    });
});