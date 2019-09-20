const { expect } = require('chai');
const { baseUrl } = require('./../../../../constants');

const url = `${baseUrl}/user/login`;

const selector = {
    h1: '//h1',
};

describe('User -- Login Form -- Design', () => {
    before(() => {
        browser.url(url);
    });

    it('should validate h1 is displayed', () => {
        const selector = '//h1';
        const element = $(selector);
        const isDisplayed = element.isDisplayed();
        expect(isDisplayed).to.be.true;
    });

    it('should have correct header', () => {
        const element = $(selector.h1);
        const actual = element.getText();
        const expected = 'User Login';
        expect(actual).to.equal(expected);
    });

    it('should validate h1 has correct color', () => {
        const element = $(selector.h1);
        const actualColor = element.getCSSProperty('color').parsed.hex;
        const expectColor = '#333333';
        expect(actualColor).to.equal(expectColor);
    });

    it('should have correct border color for empty field', () => {
        const element = $('//input[@name="email"]');
        const actualBorderColor = element.getCSSProperty('border-color').parsed.hex.toLowerCase();
        const expectedBorderColor = '#ced4da';
        expect(actualBorderColor).to.equal(expectedBorderColor);
        browser.pause(6000);
    });


    it('should validate h1 has correct alignment', () => {
        const selector = $('//h1');
        const actualAlign = selector.getCSSProperty('text-align').parsed.string;
        const expectAlign = 'left';
        expect(actualAlign).to.equal(expectAlign);
    });

    it('should validate h1 has correct font-size', () => {
        const selector = $('//h1');
        const actualSize = selector.getCSSProperty('font-size').parsed.string;
        const expectFontSize = '39.7324px';
        expect(actualSize).to.equal(expectFontSize);
    });

    it('should validate h1 has correct font-weight', () => {
        const selector = $('//h1');
        const actualWeight = selector.getCSSProperty('font-weight').parsed.string;
        const expectFontWeight = '500';
        expect(actualWeight).to.equal(expectFontWeight);
    });

    it('should validate h1 has correct font-family ', function () {
        const elem = $('//h1');
        const font = elem.getCSSProperty('font-family').parsed.string ;
        expect(font).to.equal('"sf pro display", "sf pro icons", "helvetica neue", helvetica, arial, sans-serif');
    });
});
