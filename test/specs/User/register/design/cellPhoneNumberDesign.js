import { expect }  from 'chai';
import { url } from '../../../../actions/constants';
import { user } from '../../../../actions/userConstants';

const phoneField = '//input[@name="phone"]';
const label = '//label[@for="phone"]';
const descrText = '//small[contains(text(),"Format 17775551122 or 380653332244")]';

const expectedBorderColor = '#ced4da';
const expectedFontColor = '#495057';
const expectedFocusBorderColor = '#495057';
const expectedHighlightColor = '#0052cc';
const expectedBackgroundColor = '#ffffff';
const expectedTextAlign = 'start';
const expectedFontFamily = '"sf pro display", "sf pro icons", "helvetica neue", helvetica, arial, sans-serif';
const expectedFontWeight = '400';
const expectedBorderColorValid = '#24c88b';
const expectedHighlightColorValid = '#24c88b';

const expectedlabelText = 'Cell phone number';
const expectedLabelFontSize = '17px';
const expectedLabelColor = '#212529';
const expectedLabelFontWeight = '400';
const expectedLabelTextAlign = 'left';

const expectedDescrText = 'Format 17775551122 or 380653332244';
const expectedDescrFontSize = '13.6px';
const expectedDescrColor = '#6c757d';
const expectedDescrFontWeight = '400';
const expectedDescrAlign = 'left';

describe('Register - Cell Phone Number field - Design', () => {
    before(() => {
        browser.url(url.registerUrl);
    });

    it('should verify that “Cell phone number” input field is displayed', () => {
        expect($(phoneField).isDisplayed()).to.be.true;
    });

    it('should verify border-color of field ', () => {
        const actualBorderColor = $(phoneField).getCSSProperty('border-top-color').parsed.hex;
        expect(actualBorderColor).equal(expectedBorderColor);
    });
});

describe('Register - Cell Phone Number field when user enters first symbol - Design', () => {
    before(() => {
        browser.url(url.registerUrl);
        $(phoneField).setValue('1');
    });

    it('should check font-color', () => {
        const actualFontColor = $(phoneField).getCSSProperty('color').parsed.hex;
        expect(actualFontColor).equal(expectedFontColor);
    });

    it('should verify focus highlight color', function () {
        const actualHighlightColor = $(phoneField).getCSSProperty('box-shadow').parsed.hex.toLowerCase();
        expect(actualHighlightColor).equal(expectedHighlightColor);
    });

    it('should verify background-color', () => {
        const actualBackgroundColor = $(phoneField).getCSSProperty('background-color').parsed.hex;
        expect(actualBackgroundColor).equal(expectedBackgroundColor);
    });

    it('should verify text-align', () => {
        const actualTextAlign = $(phoneField).getCSSProperty('text-align').parsed.string;
        expect(actualTextAlign).equal(expectedTextAlign);
    });

    it('should verify font-family', () => {
        const actualFontFamily = $(phoneField).getCSSProperty('font-family').parsed.string;
        expect(actualFontFamily).to.equal(expectedFontFamily);
    });

    it('should verify font-weight', () => {
        const actualFontWeight = $(phoneField).getCSSProperty('font-weight').parsed.string;
        expect(actualFontWeight).to.equal(expectedFontWeight);
    });
});
describe('Register - Cell Phone Number field when user enters valid phone number - Design', () => {
    before(() => {
        browser.url(url.registerUrl);
        $(phoneField).setValue(user.admin.phone);
        browser.keys('Tab');
        browser.pause(500);
    });

    it('should verify border-color of field ', () => {
        const actualBorderColorValid = $(phoneField).getCSSProperty('border-color').parsed.hex;
        expect(actualBorderColorValid).equal(expectedBorderColorValid);
    });

    it('should verify focus highlight color', function () {
        $(phoneField).click();
        const actualHighlightColorValid = $(phoneField).getCSSProperty('box-shadow').parsed.hex.toLowerCase();
        expect(actualHighlightColorValid).equal(expectedHighlightColorValid);
    });

    it('should verify that field is valid', () => {
        expect($(phoneField).getAttribute('class')).includes('is-valid');
    });
});

describe('Register - Cell Phone Number - Label - Design', () => {
    before(() => {
        browser.url(url.registerUrl);
    });

    it('should verify that label is displayed', function () {
      expect($(label).isDisplayed()).to.be.true;
    });

    it('should verify that label has correct text', function () {
        const actualLabelText = $(label).getText();
        expect(actualLabelText).to.equal(expectedlabelText);
    });

    it('should verify font-family', () => {
        const actualFontFamily = $(label).getCSSProperty('font-family').parsed.string;
        expect(actualFontFamily).to.equal(expectedFontFamily);
    });

    it('should verify font-size', () => {
        const actualLabelFontSize = $(label).getCSSProperty('font-size').parsed.string;
        expect(actualLabelFontSize).to.equal(expectedLabelFontSize);
    });

    it('should verify font-color', () => {
        const actualLabelColor = $(label).getCSSProperty('color').parsed.hex;
        expect(actualLabelColor).to.equal(expectedLabelColor);
    });

    it('should verify font-weight', () => {
        const actualLabelFontWeight = $(label).getCSSProperty('font-weight').parsed.string;
        expect(actualLabelFontWeight).to.equal(expectedLabelFontWeight);
    });

    it('should verify text-align', () => {
        const actualLabelTextAlign = $(label).getCSSProperty('text-align').parsed.string;
        expect(actualLabelTextAlign).to.equal(expectedLabelTextAlign);
    });
});

describe('Register - Cell Phone Number - Description Text - Design', () => {
    before(() => {
        browser.url(url.registerUrl);
    });

    it('should verify that description text is displayed', function () {
        expect($(descrText).isDisplayed()).to.be.true;
    });

    it('should verify that decription text is correct', function () {
        const actualDescrText = $(descrText).getText();
        expect(actualDescrText).to.equal(expectedDescrText);
    });

    it('should verify font-family', () => {
        const actualFontFamily = $(descrText).getCSSProperty('font-family').parsed.string;
        expect(actualFontFamily).to.equal(expectedFontFamily);
    });

    it('should verify font-size', () => {
        const actualDescrFontSize = $(descrText).getCSSProperty('font-size').parsed.string;
        expect(actualDescrFontSize).to.equal(expectedDescrFontSize);
    });

    it('should verify font-color', () => {
        const actualDescrColor = $(descrText).getCSSProperty('color').parsed.hex;
        expect(actualDescrColor).to.equal(expectedDescrColor);
    });

    it('should verify font-weight', () => {
        const actualDescrFontWeight = $(descrText).getCSSProperty('font-weight').parsed.string;
        expect(actualDescrFontWeight).to.equal(expectedDescrFontWeight);
    });

    it('should verify text-align', () => {
        const actualDescrAlign = $(descrText).getCSSProperty('text-align').parsed.string;
        expect(actualDescrAlign).to.equal(expectedDescrAlign);
    });

});