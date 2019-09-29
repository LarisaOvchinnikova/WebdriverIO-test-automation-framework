import {expect} from 'chai';
//const { baseUrl } = require('./../../constants');

//const url = `${baseUrl}/user/register`;
import { baseUrl, registerUrl } from '../../constants';

//const url = `${baseUrl}`;

describe('Registration -- Redirect', () => {
    before(() => {
        browser.url(baseUrl);
    });

    it('should verify that clicking on Register button from Home Page gets redirected to Register Page ', function () {
        const selector = '//a[@class="btn btn-outline-primary"]';
        const element = $(selector).click();
        browser.pause(1000);
        const redirectUrl = browser.getUrl();
        const expected = registerUrl;

        expect(redirectUrl).to.equal(expected);
    });

});