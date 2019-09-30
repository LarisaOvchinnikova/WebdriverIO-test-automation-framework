import { expect }  from 'chai';
import { baseUrl, registerUrl } from './../../../../constants';

const nameField = '//input[@name="name"]';
const label = '//label[text()="Real name"]';

describe('User Register page - Real Name field - design', () => {
    before(() => {
        browser.url(registerUrl);
        browser.maximizeWindow();
    });

    it('should verify that label `Real name` above user name input field is displayed', function () {
        const isDisplayed = $(label).isDisplayed();
        expect(isDisplayed).to.be.true;
    });

    it('should verify that label above user name input field contains text `Real name`', function () {
        const actual = $(label).getText();
        expect(actual).to.equal('Real name');
    });

    it('should validate that label `Real name` has correct font-family ', function () {
        const font = $(label).getCSSProperty('font-family').parsed.string ;
        expect(font).to.equal('"sf pro display", "sf pro icons", "helvetica neue", helvetica, arial, sans-serif');
    });

    it('should validate that label `Real name` has correct font-size', () => {
        const actualSize = $(label).getCSSProperty('font-size').parsed.string;
        const expectFontSize = '17px';
        expect(actualSize).to.equal(expectFontSize);
    });

    it('should validate that label `Real name` has correct color', () => {
        const actualColor = $(label).getCSSProperty('color').parsed.hex;
        const expectColor = '#212529';
        expect(actualColor).to.equal(expectColor);
    });

    it('should validate that label `Real name` has correct font-weight', () => {
        const actualWeight = $(label).getCSSProperty('font-weight').parsed.string;
        const expectFontWeight = '400';
        expect(actualWeight).to.equal(expectFontWeight);
    });

    it('should verify that label `Real name` is left-aligned', function () {
        const actualAlign = $(label).getCSSProperty('text-align').parsed.string
        const expectAlign = 'left';
        expect(actualAlign).to.equal(expectAlign);
    });

    it('should verify that Real name description text is displayed under Real name input field', function () {
        const element = $('//small[contains(text(),"Please enter your real name and surname.")]');
        const elementIsDisplayed = element.isDisplayed();
        expect(elementIsDisplayed).to.be.true;
    });

    it('should validate that Real name description text has correct font-family ', function () {
        const element = $('//small[contains(text(),"Please enter your real name and surname.")]');
        const font = element.getCSSProperty('font-family').parsed.string ;
        expect(font).to.equal('"sf pro display", "sf pro icons", "helvetica neue", helvetica, arial, sans-serif');
    });

    it('should validate that Real name description text has correct font-size', () => {
        const element = $('//small[contains(text(),"Please enter your real name and surname.")]');
        const actualSize = element.getCSSProperty('font-size').parsed.string;
        const expectFontSize = '13.6px';
        expect(actualSize).to.equal(expectFontSize);
    });

    it('should validate that Real name description text has correct color', () => {
        const element = $('//small[contains(text(),"Please enter your real name and surname.")]');
        const actualColor = element.getCSSProperty('color').parsed.hex;
        const expectColor = '#6c757d';
        expect(actualColor).to.equal(expectColor);
    });

    it('should validate that Real name description text has correct font-weight', () => {
        const element = $('//small[contains(text(),"Please enter your real name and surname.")]');
        const actualWeight = element.getCSSProperty('font-weight').parsed.string;
        const expectFontWeight = '400';
        expect(actualWeight).to.equal(expectFontWeight);
    });

    it('should verify that Real name description text is left-aligned', function () {
        const element = $('//small[contains(text(),"Please enter your real name and surname.")]');
        const actualAlign = element.getCSSProperty('text-align').parsed.string
        const expectAlign = 'left';
        expect(actualAlign).to.equal(expectAlign);
    });

    it('should verify that Real name input name field is displayed ', function () {
        const element = $('//input[@name="name"]');
        const isDisplayed = element.isDisplayed();
        expect (isDisplayed).to.be.true;
    });

    it('should verify that input name field has correct border color for empty field', () => {
        const element = $('//input[@name="name"]');
        const actualBorderColor = element.getCSSProperty('border-color').parsed.hex.toLowerCase();
        const expectedBorderColor = '#ced4da';
        expect(actualBorderColor).to.equal(expectedBorderColor);
        browser.pause(6000);
    });

    it('should verify that once user puts a cursor to the input name field border color ', () => {
        const element = $('//input[@name="name"]');
        element.click();
        browser.pause(6000);
        const actualBorderColor = element.getCSSProperty('border-color').parsed.hex.toLowerCase();
        const expectedBorderColor = '#4d94ff';
        expect(actualBorderColor).to.equal(expectedBorderColor);
    });





});
