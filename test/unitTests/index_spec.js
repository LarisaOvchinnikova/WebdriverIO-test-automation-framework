const assert = require('assert');
const {sum, mult} = require('./../index');

it('should sum equal 0', () => {
        assert.equal(sum(-5, 5), 0)
});

it('should sum equal 20', () => {
        assert.equal(sum(5, 15), 20)
});

it('should sum not equal 20', () => {
        assert.notEqual(sum(1, 15), 20)
});

it ("should product equal 0", () => {
        assert.equal(mult(2, 0), 0);
});

it ("should veryfy function mult works correctly", () => {
        assert.equal(mult(2, 4), 8);
});
