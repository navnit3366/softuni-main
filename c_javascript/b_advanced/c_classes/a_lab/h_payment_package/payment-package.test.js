let assert = require('chai').assert;
let PaymentPackage = require('./payment-package');

describe('PaymentPackage', function() {

    describe('Instantiation', function() {

        it('with no parameters, should throw error', function() {
            assert.throws(function() {new PaymentPackage()}, Error);
        });

        it('with one parameter, should throw error', function() {
            assert.throws(function() {new PaymentPackage('TF')}, Error);
        });

        it('with valid values, should create object and set default values', function() {
            let pp = new PaymentPackage('TF', 100);

            assert.equal(pp.name, 'TF');
            assert.equal(pp.value, 100);
            assert.equal(pp.VAT, 20);
            assert.equal(pp.active, true);
        });
    });

    describe('Accessor properties', function() {

        let pp;
        beforeEach(function() {
            pp = new PaymentPackage('active', 1);
        });

        describe('name', function() {

            it('with empty value, should throw error', function() {
                assert.throws(
                    function() { pp.name = '' },
                    Error, 'Name must be a non-empty string');
            });

            it('with value different than string, should throw error', function() {
                assert.throws(
                    function() { pp.name = 1 },
                    Error, 'Name must be a non-empty string');
            });

            it('with valid value, should set value correctly', function () {
                pp.name = 'TF';
                let result = pp.name;
                assert.equal(result, 'TF');
            });
        });

        describe('value', function() {

            it('with negative value, should throw error', function() {
                assert.throws(
                    function() { pp.value = -1 },
                    Error, 'Value must be a non-negative number');
            });

            it('with value different than number, should throw error', function() {
                assert.throws(
                    function() { pp.value = '' },
                    Error, 'Value must be a non-negative number');
            });

            it('with valid value, should set value correctly', function () {
                pp.value = 2;
                let result = pp.value;
                assert.equal(result, 2);
            });
        });

        describe('VAT', function () {

            it('with value different than number, should throw error', function () {
                assert.throws(
                    function () { pp.VAT = 'str'},
                    Error, 'VAT must be a non-negative number');
            });

            it('with value negative number, should throw error', function () {
                assert.throws(
                    function () { pp.VAT = -1},
                    Error, 'VAT must be a non-negative number');
            });

            it('with valid value, should set value correctly', function () {
                pp.VAT = 10;
                let result = pp.VAT;
                assert.equal(result, 10);
            });
        });

        describe('active', function () {

            let pp;
            beforeEach(function () {
                pp = new PaymentPackage('valid', 1);
            });

            it('with value different than boolean, should throw error', function () {
                assert.throws(
                    function () { pp.active = 'str'},
                    Error, 'Active status must be a boolean');
            });


            it('with valid value, should set value correctly', function () {
                pp.active = false;
                let result = pp.active;
                assert.equal(result, false);
            });
        });
    })

    describe('toString()', function() {

        it('TODO', function() {
            assert.equal(true, true);
        });
    });
});