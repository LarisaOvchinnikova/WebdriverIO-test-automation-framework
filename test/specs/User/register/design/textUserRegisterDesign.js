import { expect }  from 'chai';
const { baseUrl } = require('./../../../../constants');
const url = `${baseUrl}/user/register`;

describe('User Register page - Text User Register', () => {
    before(() => {
        browser.url(url);
        browser.maximizeWindow();
    });

    it('should have text `User Register` above registration form', function () {
        const h1 = $('//h1').getText();
        expect(h1).to.equal('User Register');
    });

    it('should verify that text `User Register` is left-aligned', function () {
        const element = $('//h1');
        const actualAlign = element.getCSSProperty('text-align').parsed.string
        const expectAlign = 'left';
        expect(actualAlign).to.equal(expectAlign);
    });

    it('should validate that text `User Register` has correct color', () => {
        const element = $('//h1');
        const actualColor = element.getCSSProperty('color').parsed.hex;
        const expectColor = '#333333';
        expect(actualColor).to.equal(expectColor);
    });

    it('should validate that text `User Register` has correct font-size', () => {
        const selector = $('//h1');
        const actualSize = selector.getCSSProperty('font-size').parsed.string;
        const expectFontSize = '42.5px';
        expect(actualSize).to.equal(expectFontSize);
    });

    it('should validate that text `User Register` has correct font-weight', () => {
        const selector = $('//h1');
        const actualWeight = selector.getCSSProperty('font-weight').parsed.string;
        const expectFontWeight = '500';
        expect(actualWeight).to.equal(expectFontWeight);
    });

    it('should validate that text `User Register` has correct font-family ', function () {
        const elem = $('//h1');
        const font = elem.getCSSProperty('font-family').parsed.string ;
        expect(font).to.equal('"sf pro display", "sf pro icons", "helvetica neue", helvetica, arial, sans-serif');
    });

});
