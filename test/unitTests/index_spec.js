const assert = require('assert');
import {expect} from 'chai';

const {sum, mult, indexOfFirstNegative, newArray, isAdult, firstWord, isNaN, maxArr, password} = require('./../index');

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

describe('Function firstWord', () =>{
    it('should return first word from "mama is kind"', () => {
        expect(firstWord('mama is kind')).equal('mama');
    });

    it('should return first word from "mama"', () => {
        expect(firstWord('mama')).equal('mama');
    });

    it('should return first word from ""', () => {
        expect(firstWord('')).equal('');
    });

    it('should return first word from "mama "', () => {
        expect(firstWord(' mama ')).equal('mama');
    });
});
describe('function NaN', ()=>{
    it('shoud verify NaN is NaN', () => {
        expect(isNaN(NaN)).true;
    });

    it('shoud verify 2*"a" is NaN', () => {
        const a = 2 * 'a';
        expect(isNaN(a)).true;
    });

    it('shoud verify 2+"a" is not NaN', () => {
        const a = 2 + 'a';
        expect(isNaN(a)).false;
    });

    it('shoud verify 2 is not NaN', () => {
        const b = 2;
        expect(isNaN(b)).false;
    });
});

describe('Function max in array',()=>{
    it('shoulf find max in [1,4,2]',()=>{
        expect(maxArr([1,4,2])).equal(4);
    });

    it('shoulf find max in [-1,-3,-4]',()=>{
        expect(maxArr([-1, -3, -4])).equal(-1);
    });

    it('shoulf find max in []',()=>{
        expect(maxArr([])).equal(-Infinity);
    });

    it('shoulf find max in [0]',()=>{
        expect(maxArr([0])).equal(0);
    });
});

describe('function password - password (3-15 symbols) includes olny letters and digits', ()=>{
    it('should verify password 123 is ok', () => {
        expect(password('123')).true;
    });

    it('should verify password 12 is fail', () => {
        expect(password('12')).false;
    });

    it('should verify password 0123456789101112 is fail', () => {
        expect(password('0123456789101112')).false;
    });

    it('should verify password abcdeQWERTY is ok', () => {
        expect(password('abcdeQWERTY')).true;
    });

    it('should verify password 0!@#4 is fail', () => {
        expect(password('0!@#4')).false;
    });

});