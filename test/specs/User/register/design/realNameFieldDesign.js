import { expect }  from 'chai';
const eng = ['Zero','Beginner', 'Elementary', 'Pre-Intermediate', 'Intermediate', 'Upper intermediate', 'Advanced', 'Proficient', 'Native'];

const { baseUrl } = require('./../../../../constants');

const url = `${baseUrl}/user/register`;


describe('User Register page - Real Name field - design', () => {
    before(() => {
        browser.url(url);
        browser.maximizeWindow();
    });

    it('should have label `Real name` above user name input field', function () {
        const selector = $('//label[contains(text(),"Real name")]');
        const actual = selector.getText();
        expect(actual).to.equal('Real name');
    });

    it('should validate that label `Real name` has correct font-family ', function () {
        const elem = $('//label[contains(text(),"Real name")]');
        const font = elem.getCSSProperty('font-family').parsed.string ;
        expect(font).to.equal('"sf pro display", "sf pro icons", "helvetica neue", helvetica, arial, sans-serif');
    });

    it('should validate that label `Real name` has correct font-size', () => {
        const selector = $('//label[contains(text(),"Real name")]');
        const actualSize = selector.getCSSProperty('font-size').parsed.string;
        const expectFontSize = '17px';
        expect(actualSize).to.equal(expectFontSize);
    });

    it('should validate that label `Real name` has correct color', () => {
        const element = $('//label[contains(text(),"Real name")]');
        const actualColor = element.getCSSProperty('color').parsed.hex;
        const expectColor = '#212529';
        expect(actualColor).to.equal(expectColor);
    });

    it('should validate that label `Real name` has correct font-weight', () => {
        const selector = $('//label[contains(text(),"Real name")]');
        const actualWeight = selector.getCSSProperty('font-weight').parsed.string;
        const expectFontWeight = '400';
        expect(actualWeight).to.equal(expectFontWeight);
    });

    it('should verify that label `Real name is left-aligned', function () {
        const element = $('//label[contains(text(),"Real name")]');
        const actualAlign = element.getCSSProperty('text-align').parsed.string
        const expectAlign = 'left';
        expect(actualAlign).to.equal(expectAlign);
    });

    it('should verify that input name field is displayed ', function () {
        const selector = '//input[@name="name"]';
        const isDisplayed = $(selector).isDisplayed();
        expect (isDisplayed).to.be.true;
    });





});
