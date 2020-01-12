const assert = require('assert');
const sum = require('./../index');

it('should sum equal 0', () => {
        assert.equal(sum(-5, 5), 0)
});

it('should sum equal 20', () => {
        assert.equal(sum(5, 15), 20)
});

it('should sum not equal 20', () => {
        assert.notEqual(sum(1, 15), 20)
});
