import { expect }  from 'chai';
import { url } from '../../../../actions/constants';

const phoneField = '//input[@name="phone"]';

const expectedBorderColor = '#ced4da';
const expectedFontColor = '#495057';
const expectedHighlightColor = '#4d94ff';
const expectedBackgroundColor = '#ffffff';

describe('Register - Cell Phone Number - Design', () => {
    before(() => {
        browser.url(url.registerUrl);
    });

    it('should check that “Cell phone number” input field is displayed', () => {
        expect($(phoneField).isDisplayed()).to.be.true;
    });

    it('should check border-color of "Cell phone number" input field ', () => {
        const actualBorderColor = $(phoneField).getCSSProperty('border-top-color').parsed.hex;
        expect(actualBorderColor).equal(expectedBorderColor);
    });

    it('should check font-color of "Cell phone number" input field when user enters first symbol', () => {
        $(phoneField).setValue('1');
        const actualFontColor = $(phoneField).getCSSProperty('color').parsed.hex;
        expect(actualFontColor).equal(expectedFontColor);
    });

    it('should verify focus highlight color', function () {
        const actualHighlightColor = $(phoneField).getCSSProperty('box-shadow').parsed.hex.toLowerCase();
        expect(actualHighlightColor).equal(expectedHighlightColor);
    });

    it('should check background-color of "Cell phone number" input field when user enters first symbol', () => {
        $(phoneField).setValue('1');
        const actualBackgroundColor = $(phoneField).getCSSProperty('background-color').parsed.hex;
        expect(actualBackgroundColor).equal(expectedBackgroundColor);
    });



});