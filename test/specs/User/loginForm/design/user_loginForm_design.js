const { expect } = require('chai');
const { baseUrl } = require('../../../../actions/constants');

const url = `${baseUrl}/user/login`;

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

    it('should validate h1 is correct ', () => {
        const element = $('//h1');
        const actual = element.getText();
        const expected = 'User Login';
        expect(actual).to.equal(expected);
    });

    it('should validate h1 has correct color', () => {
        const element = $('//h1');
        const actualColor = element.getCSSProperty('color').parsed.hex;
        const expectColor = '#333333';
        expect(actualColor).to.equal(expectColor);
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

    it('should have correct border color for empty email field', () => {
        const element = $('//input[@name="email"]');
        const actualBorderColor = element.getCSSProperty('border-color').parsed.hex.toLowerCase();
        const expectedBorderColor = '#ced4da';
        expect(actualBorderColor).to.equal(expectedBorderColor);
        browser.pause(6000);
    });

    it('should have correct color for correct email field', () => {
        const element = $('//input[@name="email"]');
        element.setValue('larisa12345@gmail.com');
        browser.keys('Tab');
        browser.pause(300);

        const actualBorderColor = element.getCSSProperty('border-color').parsed.hex.toLowerCase();
        console.log(actualBorderColor);

        const expectedBorderColor = '#24c88b';
        expect(actualBorderColor).to.eq(expectedBorderColor);
    });

    it('should have correct color for incorrect email field', () => {
        const element = $('//input[@name="email"]');
        element.setValue('qw......easd.asd');
        browser.keys('Tab');
        browser.pause(300);

        const actualBorderColor = element.getCSSProperty('border-color').parsed.hex.toLowerCase();
        console.log(actualBorderColor);

        const expectedBorderColor = '#ff4465';
        expect(actualBorderColor).to.eq(expectedBorderColor);
        browser.pause(5000);
    });


});
