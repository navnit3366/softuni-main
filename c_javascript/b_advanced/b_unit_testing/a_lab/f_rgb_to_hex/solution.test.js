const assert = require('chai').assert;
const rgbToHexColor = require('./solution');

describe('rgbToHexColor(r, g, b) -> takes three integer numbers (representing rgb values) and returns the same color as hexadecimal string', function () {

    it('should return #101010, if r=16, g=16, b=16', function() {
        let result = rgbToHexColor(16, 16, 16);
        assert.equal(result, '#101010');
    });

    it('should return #000000, if r=0, g=0, b=0', function() {
        let result = rgbToHexColor(0, 0, 0);
        assert.equal(result, '#000000');
    });

    it('should return #FFFFFF, if r=255, g=255, b=255', function() {
        let result = rgbToHexColor(255, 255, 255);
        assert.equal(result, '#FFFFFF');
    });

    it('should return undefined, if r is not integer', function () {
        let result = rgbToHexColor('1', 1, 1);
        assert.equal(result, undefined);
    });

    it('should return undefined, if g is not integer', function () {
        let result = rgbToHexColor(1, '1', 1);
        assert.equal(result, undefined);
    });

    it('should return undefined, if b is not integer', function () {
        let result = rgbToHexColor(1, 1, '1');
        assert.equal(result, undefined);
    });

    it('should return undefined, if r < 0', function () {
        let result = rgbToHexColor(-1, 1, 1);
        assert.equal(result, undefined);
    });

    it('should return undefined, if g < 0', function () {
        let result = rgbToHexColor(1, -1, 1);
        assert.equal(result, undefined);
    });

    it('should return undefined, if b < 0', function () {
        let result = rgbToHexColor(1, 1, -1);
        assert.equal(result, undefined);
    });

    it('should return undefined, if r > 255', function () {
        let result = rgbToHexColor(256, 1, 1);
        assert.equal(result, undefined);
    });

    it('should return undefined, if g > 255', function () {
        let result = rgbToHexColor(1, 256, 1);
        assert.equal(result, undefined);
    });

    it('should return undefined, if b > 255', function () {
        let result = rgbToHexColor(1, 1, 256);
        assert.equal(result, undefined);
    });
});