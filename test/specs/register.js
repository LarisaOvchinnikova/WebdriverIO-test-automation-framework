import { expect }  from 'chai';

describe('User Register page', () => {
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

    it('should fill all fields', function () {

       const realNameField = $('//input[@name=\'name\']');
       const phoneField = $('//input[@name=\'phone\']');
       const emailField = $('//input[@name=\'email\']');
       const passwordField = $('//input[@name=\'password\']');
       const aboutField = $('//textarea[@placeholder="I\'m ..."]');
       const myGoalsField = $('//textarea[@placeholder=\'1... 2... 3...\']');
       const englishLevel = $('//option[contains(text(),\'Beginner\')]');

       const submitButton = $('//button[contains(@class,\'btn btn-primary disabled\')]');

       const name = 'Alice Moon';
       const phone = '+19542222222';
       const email = 'alicemoon@gmail.com';
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
       browser.pause(20000);

       submitButton.click();
       browser.pause(10000);
    });


    it('should check if user was register successfully', function () {
     //get URL
       const headerH1 = $('//h1').getText();
       const expected = 'User Login';
       expect(headerH1).to.equal(expected);
    });
});
