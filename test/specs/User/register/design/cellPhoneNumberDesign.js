
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
});