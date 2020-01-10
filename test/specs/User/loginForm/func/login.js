import {expect} from "chai";

const selector = {
    loginButton: '//a[@qa="login-link"]',
}
describe('Login form', () => {
    before (() => {
      browser.url('https://stage.pasv.us/user/login');
    });

    it('should click login button', () => {
      $(selector.loginButton).click();
    });
});