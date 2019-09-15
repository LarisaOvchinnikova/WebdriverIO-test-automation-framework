const expect = require('chai').expect;
const assert = require('chai').assert;
//import {expect} from 'chai';

describe('Main page', () => {
    before (() => {
        browser.url('https://stage.pasv.us/');
    });

    it('should have correct title', () => {
        const title = browser.getTitle();
        browser.pause(4000);
        const expected = 'Progress Monitor';
        expect(title).to.equal(expected);
    });

    it('should have correct application name', () => {
        const selector = $('//span[@id="site-name"]');
        const actual = selector.getText();
        const expected = 'Progress Monitor';
        expect(actual).to.equal(expected);
    });

    it('should have Login button', () => {
        const login = $('//a[@class="nav-link"]');
        const actual = login.getText();
        const expected = 'Login';
        expect(actual).to.equal(expected);
    });
    it('should have Register button', () => {
        const reg = $('//a[@class=\'btn btn-outline-primary\']');
        const actual = reg.getText();
        const expected = 'Register';
        expect(actual).to.equal(expected);
    });
    it('should have correct year in the footer copywrite line', () => {
        const element = $('//small[@class=\"d-block mb-3 text-muted\"]');
        const text = element.getText();
        const currentYear = '2019';
        const isIncludes = text.includes(currentYear);
        assert.equal(isIncludes, true);
        expect(text).to.include(currentYear);
        expect(isIncludes).to.be.true;

    });
    it('should have correct text in the footer copywrite line', () => {
        const element = $('//small[@class=\"d-block mb-3 text-muted\"]');
        const actual = element.getText();
        const currentText = 'eat(); sleep(); code(); repeat();';
        expect(actual).to.include(currentText);
    });

});
