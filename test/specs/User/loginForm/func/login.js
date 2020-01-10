import {expect} from "chai";

const selector = {
    loginButton: '//a[@qa="login-link"]',
    h1: '//h1',
    emailField: '//input[@name="email"]',
};
const expected = {
    h1: 'User Login',
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

    it('should verify h1', () => {
        const actualH1 = $(selector.h1).getText();
        expect (actualH1).equal(expected.h1)
    });

    it('should verify email field is displayed', () => {
        expect ($(selector.emailField).isDisplayed()).to.be.true;
    });


});