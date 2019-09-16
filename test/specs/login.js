const expect = require('chai').expect;

describe('Login page', () => {
    before (() => {
        browser.url('https://stage.pasv.us/user/login');
    });

    it('should have correct header', () => {
        const header = $('//h1');
        const text = header.getText();
        const expected = 'User Login';
        expect(text).to.equal(expected);
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

        const userName = 'Lara Lara';
        const h1 = $('//h1').getText();
        expect(h1).to.equal(userName);
    });

    it ("should have user name in dropdown button", () => {
       const element = $('//a[@class=\'dropdown-toggle nav-link\']') ;
       const text = element.getText();
       const expected = 'Lara Lara';
       expect(text).to.equal(expected);
    });

    it ("displays roles", () => {
        const element = $('//body/div[@id=\'root\']/div/div/div/div[@class=\'container\']/div[@class=\'row\']/div[@class=\'col\']/div/div[@class=\'row\']/div[@class=\'col\']/span[3]') ;
        const text = element.getText();
        expect(text).to.have.lengthOf.at.least(1);
    });
    it ("User has admin role", () => {
        const selector = $('//body/div[@id=\'root\']/div/div/div/div[@class=\'container\']/div[@class=\'row\']/div[@class=\'col\']/div/div[@class=\'row\']/div[@class=\'col\']/span[3]') ;
        const actual = selector.getText();
        const expected = 'admin';
        expect(actual).to.include(expected);
    });

    it ("should have button Create day report", () => {
        const selector = $('//a[@class=\'btn btn-secondary\']');
        selector.click();
        browser.pause(10000);
        const header = $('//h1');
        const actual = header.getText();
        const expected = 'Create day report';
        expect(actual).to.equal(expected);
    })

});