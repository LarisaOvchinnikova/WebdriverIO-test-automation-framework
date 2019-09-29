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

    it('should  verify that h1 is correct', function () {
        const h1 = $('//h1').getText();
        expect(h1).to.equal('User Register');
    });
});