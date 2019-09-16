const expect = require('chai').expect;

describe('Create day report page', () => {
    before (() => {
            browser.url('https://stage.pasv.us/user/login');
        });
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
        for (let i = 1; i <= 5; i++) {
            const selector = $('//input[@id=\'input-[' + i + ']\']');
            selector.click();
            browser.pause(1000);
        }
    });


});

