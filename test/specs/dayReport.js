import { expect }  from 'chai';
import loginHelpers from './loginAction';

describe('Create day report page', () => {
    before (() => {
            browser.url('https://stage.pasv.us/user/login');
        });
/*
    it('should login', () => {
        const emailField = $('//input[@name="email"]');
        const passwordField = $('//input[@name="password"]');
        const button = $('//button[@type="submit"]');

        const EMAIL = 'larisa12345@gmail.com';
        const PASSWORD = 'qwerty';
        emailField.setValue(EMAIL);
        passwordField.setValue(PASSWORD);
        button.click();
        browser.pause(10000);
    });
*/
    it('should login', () => {
        //loginAction(browser);
        loginHelpers.login();
    });

    it ("should click button Create day report", () => {
        const selector = $('//a[@class=\'btn btn-secondary\']');
        selector.click();
        browser.pause(5000);
        const header = $('//h1');
        const actual = header.getText();
        const expected = 'Create day report';
        expect(actual).to.equal(expected);
    });

    it('should check marks in checkbox', function () {
        for (let i = 0; i <= 6; i++) {
            const selector = $('//input[@id=\'input-[' + i + ']\']');
            selector.click();
            browser.pause(500);
        }
    });

    it('should uncheck marks 0-1 in checkbox', function () {
        for (let i = 0; i <= 1; i++) {
            const selector = $('//input[@id=\'input-[' + i + ']\']');
            selector.click();
            browser.pause(500);
        }
    });


});

