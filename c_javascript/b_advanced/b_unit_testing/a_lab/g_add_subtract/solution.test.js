const assert = require('chai').assert;
const createCalculator = require('./solution');

describe('createCalculator() -> stores a value, and returns functions which can manipulate and get it.', function() {

    it('should return object, containing the functions add, subtract and get as properties', function() {
        let calculator = createCalculator();

        assert.isObject(calculator);
        assert.property(calculator, 'add');
        assert.property(calculator, 'subtract');
        assert.property(calculator, 'get');
        assert.isFunction(calculator.add);
        assert.isFunction(calculator.subtract);
        assert.isFunction(calculator.get);
    });

    it('should keep an internal sum, which cant be modified from the outside', function() {
        let calculator = createCalculator();

        calculator.add(5);
        calculator.add(6);
        let sum = calculator.get();

        assert.equal(sum, 11);
    });

    it('should return 1, if calculator.add("1")', function() {
        let calculator = createCalculator();

        calculator.add('1');

        let sum = calculator.get();

        assert.equal(sum, 1);
    });

    it('should return -1, if calculator.subtract("1")', function() {
        let calculator = createCalculator();

        calculator.subtract('1');

        let sum = calculator.get();

        assert.equal(sum, -1);
    });

    it('should return value of internal sum, if calculator.get()', function() {
        let calculator = createCalculator();

        let sum = calculator.get();

        assert.equal(sum, 0);
    });
});