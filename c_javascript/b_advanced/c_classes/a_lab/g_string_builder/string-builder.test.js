let assert = require('chai').assert;
let StringBuilder = require('./string-builder');

describe('StringBuilder -> class used to manipulate string.', function () {

    describe('Initializataion', function () {

        it('with no parameter, should be initialized as empty string', function () {
            let strBuilder = new StringBuilder();
            assert.equal(strBuilder.toString(), '');
        });

        it('with undefined parameter, should be initialized as empty string', function () {
            let strBuilder = new StringBuilder(undefined);
            assert.equal(strBuilder.toString(), '');
        });


        it('with string parameter, should be initialized as the given string', function () {
            let strBuilder = new StringBuilder('pesho');
            assert.equal(strBuilder.toString(), 'pesho');
        });

        it('with parameter with type other than string, should throw exception', function () {
            assert.throws(function () {let strBuilder = new StringBuilder(1)}, TypeError);
        });
    });
});