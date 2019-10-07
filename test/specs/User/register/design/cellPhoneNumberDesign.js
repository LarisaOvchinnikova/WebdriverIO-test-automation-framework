import { expect }  from 'chai';
import { url } from '../../../../actions/constants';

const phoneField = '//input[@name="phone"]';

const expectedBorderColor = '#ced4da';
const expectedFontColor = '#495057';
const expectedFocusBorderColor = '#495057';
const expectedHighlightColor = '#0052cc';
const expectedBackgroundColor = '#ffffff';
const expectedTextAlign = 'start';
const expectedFontFamily = '"sf pro display", "sf pro icons", "helvetica neue", helvetica, arial, sans-serif');


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
        $(phoneField).setValue('1');
        const actualBackgroundColor = $(phoneField).getCSSProperty('background-color').parsed.hex;
        expect(actualBackgroundColor).equal(expectedBackgroundColor);
    });

    it('should verify text-align', () => {
        const actualTextAlign = $(phoneField).getCSSProperty('text-align').parsed.string;
        expect(actualTextAlign).equal(expectedTextAlign);
    });

    it('should verify text-align', () => {
        const actualFontFamily = $(phoneField).getCSSProperty('font-family').parsed.string;
        expect(actualFontFamily).to.equal(expectedFontFamily);
    });



});