import {expect} from 'chai';
import { baseUrl, registerUrl } from '../../constants';
const registerButton = '//div[@id="user-section"]//a[text()="Register"]'

describe('Registration -- Redirect', () => {
    before(() => {
        browser.url(baseUrl);
    });

    it('should verify that clicking on Register button from Home Page gets redirected to Register Page ', function () {
        $(registerButton).click();
        browser.pause(1000);
        const redirectUrl = browser.getUrl();

        expect(redirectUrl).to.equal(registerUrl);
    });

});