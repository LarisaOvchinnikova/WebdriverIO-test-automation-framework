
import { expect }  from 'chai';
import { baseUrl } from './../../../../constants';

const url = `${baseUrl}/user/register`;
const inputFieldPhone = '//input[@name="phone"]';

describe('Cell Phone Number input field', () => {
    before(() => {
        browser.url(url.registerUrl);
    });

});