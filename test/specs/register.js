import { expect }  from 'chai';

describe('Main page', () => {
    before(() => {
        browser.url('https://stage.pasv.us/');
    });

    it('should have Register button', () => {
        const reg = $('//a[@class=\'btn btn-outline-primary\']');
        const actual = reg.getText();
        const expected = 'Register';
        expect(actual).to.equal(expected);
    });

    it('should click Register button', () => {
        const reg = $('//a[@class=\'btn btn-outline-primary\']');
        reg.click();
        browser.pause(20000);
    });

    before(() => {
        browser.url('https://stage.pasv.us/user/register');
    });

    it('should have correct header', function () {
        const h1 = $('//h1').getText();
        expect(h1).to.equal('User Register');
    });

    it('should have Real name field', function () {
       const selector = $('//label[contains(text(),\'Real name\')]');
       const actual = selector.getText();
       expect(actual).to.equal('Real name');
    });
   // const EMAIL = 'larisa12345@gmail.com';
   // const PASSWORD = 'qwerty';
   //  emailField.setValue(EMAIL);
   // passwordField.setValue(PASSWORD);

    it('should fill all fields', function () {
     const realNameField = $('//input[@name=\'name\']');
     const phoneField = $('');

    });
});
