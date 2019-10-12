import {expect} from 'chai';
import { url } from '../../actions/constants';

const registerButton = '//div[@id="user-section"]//a[text()="Register"]'
const globalHeader = '//div[@id="main-bar"]';
const header = '//h1';
const footer = '//footer[@class="pt-5 pb-5"]';
const firstNameField = '//input[@name="firstName"]';
const lastNameField = '//input[@name="lastName"]';

describe('Registration -- Redirect', () => {
    before(() => {
        browser.url(url.baseUrl);
    });

    it('should verify that clicking on Register button from Home Page gets redirected to Register Page ', function () {
        $(registerButton).click();
        const redirectUrl = browser.getUrl();
        expect(redirectUrl).to.equal(url.register);
    });

    it('should verify that Global header is displayed', () => {
        const actualGlobalHeader = $(globalHeader).isDisplayed();
        expect(actualGlobalHeader).to.be.true;
    });

    it('should  verify that h1 is correct', function () {
        const h1 = $(header).getText();
        expect(h1).to.equal('User Register');
    });

    it('should verify that First name` field is displayed ', function () {
        const isDisplayed = $(firstNameField).isDisplayed();
        expect (isDisplayed).to.be.true;
    });

    it('should verify that Last name` field is displayed ', function () {
        const isDisplayed = $(lastNameField).isDisplayed();
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

    it('should verify that Global footer is displayed', function () {
        const footerIsDisplayed = $(footer).isDisplayed();
        expect(footerIsDisplayed).to.be.true;
    });
});