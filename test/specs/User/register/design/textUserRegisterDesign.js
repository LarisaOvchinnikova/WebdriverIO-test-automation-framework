import { expect }  from 'chai';
const { baseUrl, registerUrl } = require('../../../../actions/constants');
const header = '//h1';

describe('User Register page - Text `User Register` - design', () => {
    before(() => {
        browser.url(registerUrl);
        browser.maximizeWindow();
    });

    it('should verify that header `User Register` is above the registration form', function () {
        const actualHeader = $(header).getText();
        expect(actualHeader).to.equal('User Register');
    });

    it('should verify that text `User Register` is left-aligned', function () {
        const actualAlign = $(header).getCSSProperty('text-align').parsed.string;
        const expectedAlign = 'left';
        expect(actualAlign).to.equal(expectedAlign);
    });

    it('should verify that text `User Register` has correct color', () => {
        const actualColor = $(header).getCSSProperty('color').parsed.hex;
        const expectedColor = '#333333';
        expect(actualColor).to.equal(expectedColor);
    });

    it('should verify that text `User Register` has correct font-size', () => {
        const actualFontSize = $(header).getCSSProperty('font-size').parsed.string;
        const expectedFontSize = '42.5px';
        expect(actualFontSize).to.equal(expectedFontSize);
    });

    it('should verify that text `User Register` has correct font-weight', () => {
        const actualFontWeight = $(header).getCSSProperty('font-weight').parsed.string;
        const expectedFontWeight = '500';
        expect(actualFontWeight).to.equal(expectedFontWeight);
    });

    it('should verify that text `User Register` has correct font-family ', function () {
        const actualFontFamily = $(header).getCSSProperty('font-family').parsed.string ;
        expect(actualFontFamily).to.equal('"sf pro display", "sf pro icons", "helvetica neue", helvetica, arial, sans-serif');
    });

});
