import {expect} from "chai";

const selector = {
    loginButton: '//a[@qa="login-link"]',
};
describe('Login form', () => {
    before (() => {
      browser.url('https://stage.pasv.us');
    });

    it('should click login button', () => {
      $(selector.loginButton).click();
      const actualUrl = browser.getUrl();
      const expectedUrl = 'https://stage.pasv.us/user/login';
      expect (actualUrl).equal(expectedUrl)
    });
});