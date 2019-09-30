import { expect }  from 'chai';
import { baseUrl, registerUrl } from './../../../../constants';
import { admin } from './../../userConstants';

const nameField = '//input[@name="name"]';
const label = '//label[text()="Real name"]';
const description = '//small[contains(text(),"Please enter your real name")]';

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
        const elementIsDisplayed = $(description).isDisplayed();
        expect(elementIsDisplayed).to.be.true;
    });

    it('should verify that Real name description text is correct', function () {
        const actualText = $(description).getText();
        const expectedText = 'Please enter your real name and surname. Example: John Smith';
        expect(actualText).to.equal(expectedText);
    });

    it('should validate that Real name description text has correct font-family ', function () {
        const font = $(description).getCSSProperty('font-family').parsed.string ;
        expect(font).to.equal('"sf pro display", "sf pro icons", "helvetica neue", helvetica, arial, sans-serif');
    });

    it('should validate that Real name description text has correct font-size', () => {
        const actualSize = $(description).getCSSProperty('font-size').parsed.string;
        const expectFontSize = '13.6px';
        expect(actualSize).to.equal(expectFontSize);
    });

    it('should validate that Real name description text has correct color', () => {
        const actualColor = $(description).getCSSProperty('color').parsed.hex;
        const expectColor = '#6c757d';
        expect(actualColor).to.equal(expectColor);
    });

    it('should validate that Real name description text has correct font-weight', () => {
        const actualWeight = $(description).getCSSProperty('font-weight').parsed.string;
        const expectFontWeight = '400';
        expect(actualWeight).to.equal(expectFontWeight);
    });

    it('should verify that Real name description text is left-aligned', function () {
        const actualAlign = $(description).getCSSProperty('text-align').parsed.string
        const expectAlign = 'left';
        expect(actualAlign).to.equal(expectAlign);
    });

    it('should verify that `Real name` input field is displayed ', function () {
        const isDisplayed = $(nameField).isDisplayed();
        expect (isDisplayed).to.be.true;
    });

    it('should check border color for empty field', () => {
        const actualBorderColor = $(nameField).getCSSProperty('border-color').parsed.hex.toLowerCase();
        const expectedBorderColor = '#ced4da';
        expect(actualBorderColor).to.equal(expectedBorderColor);
    });

    it('should verify that when user puts a cursor to the `Real name` input field, focus border-color is correct ', () => {
        $(nameField).click();
        browser.pause(300);
        const actualBorderColor = $(nameField).getCSSProperty('border-color').parsed.hex.toLowerCase();
        const expectedBorderColor = '#4d94ff';
        expect(actualBorderColor).to.equal(expectedBorderColor);
    });

    it('should verify that when user puts a cursor to the `Real name` input field, focus highlight color is correct ', () => {
        $(nameField).click();
        browser.pause(100);
        const actualFocusHightLightColor = $(nameField).getCSSProperty('box-shadow').parsed.hex.toLowerCase();
        const expectedFocusHightLightColor = '#0052cc';
        expect(actualFocusHightLightColor).to.equal(expectedFocusHightLightColor);
    });

    it('should verify that when user enters first symbol to the `Real name` input field, font-color  is correct', () => {
        $(nameField).setValue('L');
        const actualFontColor = $(nameField).getCSSProperty('color').parsed.hex.toLowerCase();
        const expectedFontColor = '#495057';
        expect(actualFontColor).to.equal(expectedFontColor);
    });

    it('should verify that when user enters first symbol to the `Real name` input field, background-color  is correct', () => {
        const actualBackgroundColor = $(nameField).getCSSProperty('background-color').parsed.hex.toLowerCase();
        const expectedBackgroundColor = '#ffffff';
        expect(actualBackgroundColor).to.equal(expectedBackgroundColor);
    });

    it('should verify that when user enters first symbol to the `Real name` input field, text-align is `start`', () => {
        const actualAlign = $(nameField).getCSSProperty('text-align').parsed.string.toLowerCase();
        const expectedAlign = 'start';
        expect(actualAlign).to.equal(expectedAlign);
    });

    it('should verify that when user enters first symbol to the `Real name` input field, font-family is correct', () => {
        const actualFontFamily = $(nameField).getCSSProperty('font-family').parsed.string;
        expect(actualFontFamily).to.equal('"sf pro display", "sf pro icons", "helvetica neue", helvetica, arial, sans-serif');
    });

    it('should verify that when user enters first symbol to the `Real name` input field, font-weight  is correct', () => {
        const actualFontWeight = $(nameField).getCSSProperty('font-weight').parsed.string;
        const expectedFontWeight = '400';
        expect(actualFontWeight).to.equal(expectedFontWeight);
    });

    it('should check border color when name is validated:', function () {
        $(nameField).setValue(admin.name);
        browser.pause(300);
        const actualBorderColor = $(nameField).getCSSProperty('border-color').parsed.hex;
        const expectedBorderColor = '#24c88b';
        expect(actualBorderColor).to.equal(expectedBorderColor);
    });

});
