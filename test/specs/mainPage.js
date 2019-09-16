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

    it('application name should have correct alignment', () => {
        const selector = $('//span[@id="site-name"]');
        const actualAlign = selector.getCSSProperty('text-align').parsed.string;
        const expectAlign = 'left';
        expect(actualAlign).to.equal(expectAlign);
    });
    it('application name should have correct color', () => {
        const selector = $('//span[@id="site-name"]');
        const actualColor = selector.getCSSProperty('color').parsed.hex;
        const expectColor = '#000000'
        expect(actualColor).to.equal(expectColor);
    });

    it('application name should have correct font-size', () => {
        const selector = $('//span[@id="site-name"]');
        const actualSize = selector.getCSSProperty('font-size').parsed.string;
        const expectFontSize = '20px';
        expect(actualSize).to.equal(expectFontSize);
    });

    it('application name should have correct font-weight', () => {
        const selector = $('//span[@id="site-name"]');
        const actualWeight = selector.getCSSProperty('font-weight').parsed.string;
        const expectFontWeight = '500';
        expect(actualWeight).to.equal(expectFontWeight);
    });

    it('application name should have correct font-family ', function () {
        const elem = $('//span[@id="site-name"]');
        const font = elem.getCSSProperty('font-family').parsed.string ;
        expect(font).to.equal('"sf pro display", "sf pro icons", "helvetica neue", helvetica, arial, sans-serif');
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
