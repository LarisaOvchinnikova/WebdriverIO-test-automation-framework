//Tanya
import { expect }  from 'chai';
import { baseUrl } from './../../../../constants';

const url = `${baseUrl}/user/register`;
const inputFieldPhone = '//input[@name="phone"]';

describe('Cell Phone Number input field', () => {
    before(() => {
        browser.url(url);
    });

    it('should check that “Cell phone number” input field is displayed', () => {
        const actualInputFieldPhone = $(inputFieldPhone).isDisplayed();
        expect(actualInputFieldPhone).to.be.true;
    });

    it('should check border-color of "Cell phone number" input field ', () => {
        const actualBorder = $(inputFieldPhone).getCSSProperty('border-top-color').parsed.hex;
        const expectedBorder = '#ced4da';
        expect(actualBorder).equal(expectedBorder);
    });

    it('should check font-color of "Cell phone number" input field when user enters first symbol', () => {
        $(inputFieldPhone).setValue('+');
        const actualFontColor = $(inputFieldPhone).getCSSProperty('color').parsed.hex;
        const expectedFontColor = '#495057';
        expect(actualFontColor).equal(expectedFontColor);
    });
});