import { expect }  from 'chai';
import { url } from '../../../../actions/constants';

const inputFieldPhone = '//input[@name="phone"]';

const expectedBorderColor = '#ced4da';
const expectedFontColor = '#495057';


describe('Register - Cell Phone Number - Design', () => {
    before(() => {
        browser.url(url.registerUrl);
    });

    it('should check that “Cell phone number” input field is displayed', () => {
        expect($(inputFieldPhone).isDisplayed()).to.be.true;
    });

    it('should check border-color of "Cell phone number" input field ', () => {
        const actualBorderColor = $(inputFieldPhone).getCSSProperty('border-top-color').parsed.hex;
        expect(actualBorderColor).equal(expectedBorderColor);
    });

    it('should check font-color of "Cell phone number" input field when user enters first symbol', () => {
        $(inputFieldPhone).setValue('1');
        const actualFontColor = $(inputFieldPhone).getCSSProperty('color').parsed.hex;
        expect(actualFontColor).equal(expectedFontColor);
    });


});