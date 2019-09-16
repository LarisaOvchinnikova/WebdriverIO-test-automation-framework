const expect = require('chai').expect;
const assert = require('chai').assert;
//import {expect} from 'chai';

describe('Register page', () => {
    before(() => {
        browser.url('https://stage.pasv.us/');
    });

    it('should have correct title', () => {
        const title = browser.getTitle();
        browser.pause(4000);
        const expected = 'Progress Monitor';
        expect(title).to.equal(expected);
    });

});