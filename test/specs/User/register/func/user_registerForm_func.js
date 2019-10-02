import { expect }  from 'chai';
const { baseUrl } = require('../../../../actions/constants');

const url = `${baseUrl}/user/register`;

describe('User Register Form page - Func - Form is displayed', () => {
    before(() => {
        browser.url(baseUrl);
        browser.maximizeWindow();
    });

    it('should validate Register button is displayed on the top on Home page', () => {
        const element = $(elements.registerButton.selector);
        expect(element.isDisplayed()).true;
    });

    it('should have text User Register above registration form', function () {
        const h1 = $('//h1').getText();
        expect(h1).to.equal('User Register');
    });

    it('should have `Real name` text above input field', function () {
        const selector = $('//label[contains(text(),"Real name")]');
        const actual = selector.getText();
        expect(actual).to.equal('Real name');
    });

    it('should verify that input name field is displayed ', function () {
        const selector = '//input[@name="name"]';
        const isDisplayed = $(selector).isDisplayed();
        expect (isDisplayed).to.be.true;
    });

    it('English level dropdown list is displayed', function () {
        const selector = '//label[@for="englishLevel"]/../../select';
        const element = $(selector);
        const isDisplayed  = element.isDisplayed();
        expect(isDisplayed).to.be.true;
    });
    it('should have correct list of english levels in dropdown ', function () {
        const selector = '//label[@for="englishLevel"]/../../select/option';
        const options = $$(selector).map(option => option.getText());
        const expectedList = ['Zero','Beginner','Elementary','Pre-Intermediate','Intermediate','Upper intermediate','Advanced','Proficient','Native' ];
        expect(options).to.deep.equal(expectedList);
    });

    it('should fill all fields', function () {

        const realNameField = $('//input[@name="name"]');
        const phoneField = $('//input[@name="phone"]');
        const emailField = $('//input[@name="email"]');
        const passwordField = $('//input[@name="password"]');
        const aboutField = $('//textarea[@placeholder="I\'m ..."]');
        const myGoalsField = $('//textarea[@placeholder="1... 2... 3..."]');

        let randomEngishLevel =  Math.trunc(Math.random()*8);
        let englishLevel = $(`//option[contains(text(),'${eng[randomEngishLevel]}')]`);

        const submitButton = $('//button[contains(@class,\'btn btn-primary disabled\')]');

        const name = 'Alice Moon';
        const phone = '+19542222222';
        const email = 'alicemoon'+ Math.trunc((Math.random()*1000))+ '@gmail.com';
        const password = 'qwerty';
        const about = 'Hi, I am student.';
        const goals = 'I want to become QA tester.';

        realNameField.setValue(name);
        browser.pause(500);
        phoneField.setValue(phone);
        browser.pause(500);
        emailField.setValue(email);
        browser.pause(500);
        passwordField.setValue(password);
        browser.pause(500);
        aboutField.setValue(about);
        browser.pause(500);
        myGoalsField.setValue(goals);
        browser.pause(500);

        englishLevel.click();
        browser.pause(1000);

        submitButton.click();
        browser.pause(10000);

    });

    it('should check if user was register successfully and redirected to login page', function () {
        const URLpage = browser.getUrl();
        const expectedURL = 'https://stage.pasv.us/user/login';
        expect(URLpage).to.equal(expectedURL);
    });

    it('should check that after registration login page was opened', function () {
        const headerH1 = $('//h1').getText();
        const expected = 'User Login';
        expect(headerH1).to.equal(expected);
    });


});
