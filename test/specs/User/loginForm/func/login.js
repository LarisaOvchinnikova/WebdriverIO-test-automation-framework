import {expect} from "chai";

const selector = {
    loginButton: '//a[@qa="login-link"]',
    h1: '//h1',
    emailField: '//input[@name="email"]',
    emailLabel: '//label[@for="email"]',
    passwordField: '//input[@name="password"]',
    passwordLabel: '//label[@for="password"]',
    submitButton: '//button[@type="submit"]',
};
const expected = {
    h1: 'User Login',
    emailLabelText: 'Email',
    passwordLabelText: 'Password',
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

    it('should verify password field is displayed', () => {
        expect ($(selector.passwordField).isDisplayed()).to.be.true;
    });

    it('should verify submit button is disabled', () => {
        const submitButton = $(selector.submitButton);
        const isEnabled = submitButton.isEnabled();
        expect(isEnabled).equal(false);
    });

    it('should verify submit button is disabled', () => {
        expect($(selector.submitButton).getAttribute('class')).includes('disabled');
    });

    it('should verify text of email label', ()=>{
        const actualLabelText = $(selector.emailLabel).getText();
        expect (actualLabelText).equal(expected.emailLabelText);
    });

    it('should verify text of password label', ()=>{
        const actualLabelText = $(selector.passwordLabel).getText();
        expect (actualLabelText).equal(expected.passwordLabelText);
    });
});