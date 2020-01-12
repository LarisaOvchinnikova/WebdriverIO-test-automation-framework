const assert = require('assert');
import {expect} from 'chai';

const {sum, mult, indexOfFirstNegative, newArray, isAdult} = require('./../index');

describe('function sum', () => {
    it('should sum equal 0', () => {
        expect(sum(-5, 5)).equal(0);
    });

    it('should sum equal 20', () => {
        expect(sum(5, 15)).equal(20);
    });

    it('should sum not equal 20', () => {
        expect(sum(1, 15)).not.equal(20);
    });
});

describe('function mult', () => {
    it("should verify function mult works correctly 2*0 =0", () => {
        assert.equal(mult(2, 0), 0);
    });

    it("should verify function mult works correctly", () => {
        assert.equal(mult(2, 4), 8);
    });
});

describe('function indexOfFirstNegative', () => {
    it('should find index 0', () => {
        assert.equal(indexOfFirstNegative([-1, 2, 3, 4, 5, 6]), 0);
    });
    it('should find index 3', () => {
        assert.equal(indexOfFirstNegative([0, 1, 2, -3, 4, -5]), 3);
    })
});

describe('function newArray', () => {
    it('should create array [1,2,3,4,5]', () => {
        expect(newArray([5])).deep.equal([1, 2, 3, 4, 5]);
    });
    it('should create array [1]', () => {
        expect(newArray([1])).deep.equal([1]);
    });

    it('should create array []', () => {
        expect(newArray([0])).deep.equal([]);
    });

    it('should create array []', () => {
        expect(newArray([-1])).deep.equal([]);
    });
});

describe('function isAdult', () => {
    it('should verify 21 is adult', () => {
        expect(isAdult(21)).true;
    });

    it('should verify 18 is adult', () => {
        expect(isAdult(18)).true;
    });

    it('should verify 17 is not adult', () => {
        expect(isAdult(17)).false;
    });
});

