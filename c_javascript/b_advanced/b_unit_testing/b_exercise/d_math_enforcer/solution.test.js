const assert = require('chai').assert;
const mathEnforcer = require('./solution');

describe('mathEnforcer -> object containing functionality to do various math operations', function() {

    describe('addFive(num) -> adds five to a given number', function() {

        it('with num parameter not of type number, should return undefined', function() {
            let result = mathEnforcer.addFive('str');
            assert.equal(result, undefined);
        });

        it('with valid input, should return correct value', function() {
            let result = mathEnforcer.addFive(-1);
            assert.equal(result, 4);
        });
    });

    describe('subtractTen(num) -> subtracts ten from a given number', function() {

        it('with num parameter not of type number, should return undefined', function() {
            let result = mathEnforcer.subtractTen('str');
            assert.equal(result, undefined);
        });

        it('with valid input, should return correct value', function() {
            let result = mathEnforcer.subtractTen(-1);
            assert.equal(result, -11);
        });
    });

    describe('sum(num1, num2) -> sums two numbers', function() {

        it('with num1 parameter not of type number, should return undefined', function() {
            let result = mathEnforcer.sum('str', 1);
            assert.equal(result, undefined);
        });

        it('with num2 parameter not of type number, should return undefined', function() {
            let result = mathEnforcer.sum(1, 'str');
            assert.equal(result, undefined);
        });

        it('with valid input, should return correct value', function() {
            let result = mathEnforcer.sum(1, 1);
            assert.equal(result, 2);
        });
    });
});