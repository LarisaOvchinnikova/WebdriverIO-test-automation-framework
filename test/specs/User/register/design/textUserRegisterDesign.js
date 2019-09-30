import { expect }  from 'chai';
const { baseUrl, registerUrl } = require('./../../../../constants');
const h1Header = '//h1';

describe('User Register page - Text User Register', () => {
    before(() => {
        browser.url(registerUrl);
        browser.maximizeWindow();
    });

    it('should have text `User Register` above registration form', function () {
        const h1 = $(h1Header).getText();
        expect(h1).to.equal('User Register');
    });

    it('should verify that text `User Register` is left-aligned', function () {
        const actualAlign = $(h1Header).getCSSProperty('text-align').parsed.string
        const expectAlign = 'left';
        expect(actualAlign).to.equal(expectAlign);
    });

    it('should validate that text `User Register` has correct color', () => {
        const actualColor = $(h1Header).getCSSProperty('color').parsed.hex;
        const expectColor = '#333333';
        expect(actualColor).to.equal(expectColor);
    });

    it('should validate that text `User Register` has correct font-size', () => {
        const actualSize = $(h1Header).getCSSProperty('font-size').parsed.string;
        const expectFontSize = '42.5px';
        expect(actualSize).to.equal(expectFontSize);
    });

    it('should validate that text `User Register` has correct font-weight', () => {
        const actualWeight = $(h1Header).getCSSProperty('font-weight').parsed.string;
        const expectFontWeight = '500';
        expect(actualWeight).to.equal(expectFontWeight);
    });

    it('should validate that text `User Register` has correct font-family ', function () {
        const font = $(h1Header).getCSSProperty('font-family').parsed.string ;
        expect(font).to.equal('"sf pro display", "sf pro icons", "helvetica neue", helvetica, arial, sans-serif');
    });

});
