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

    it('should verify that `Real name` field is displayed ', function () {
        const selector = '//input[@name="name"]';
        const isDisplayed = $(selector).isDisplayed();
        expect (isDisplayed).to.be.true;
    });

    it('should verify that `Cell phone number` field is displayed ', function () {
        const selector = '//input[@name="phone"]';
        const isDisplayed = $(selector).isDisplayed();
        expect (isDisplayed).to.be.true;
    });

    it('should verify that `Email` field is displayed ', function () {
        const selector = '//input[@name="email"]';
        const isDisplayed = $(selector).isDisplayed();
        expect (isDisplayed).to.be.true;
    });

    it('should verify that `Password` field is displayed ', function () {
        const selector = '//input[@name="password"]';
        const isDisplayed = $(selector).isDisplayed();
        expect (isDisplayed).to.be.true;
    });

    it('should verify that `About` field is displayed ', function () {
        const selector = '//textarea[@name="about"]';
        const isDisplayed = $(selector).isDisplayed();
        expect (isDisplayed).to.be.true;
    });

    it('should verify that `My goals` field is displayed ', function () {
        const selector = '//textarea[@name="goals"]';
        const isDisplayed = $(selector).isDisplayed();
        expect (isDisplayed).to.be.true;
    });

    it('should verify that `English level` field is displayed ', function () {
        const selector = '//label[@for="englishLevel"]/../../select';
        const isDisplayed = $(selector).isDisplayed();
        expect (isDisplayed).to.be.true;
    });

    it('should verify that `Submit` button is displayed', () => {
        const submitButton = '//button[@type="submit"]';
        const isDisplayed = $(submitButton).isDisplayed();
        expect(isDisplayed).to.be.true;
    });

    it('should verify that `Submit` button is disabled', () => {
        const submitButton = $('//button[@type="submit"]');
        const isEnabled = submitButton.isEnabled();

        expect(isEnabled).equal(false);
    });

});