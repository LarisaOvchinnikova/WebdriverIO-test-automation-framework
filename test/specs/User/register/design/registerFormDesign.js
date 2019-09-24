import { expect }  from 'chai';
const eng = ['Zero','Beginner', 'Elementary', 'Pre-Intermediate', 'Intermediate', 'Upper intermediate', 'Advanced', 'Proficient', 'Native'];

const { baseUrl } = require('./../../../../constants');

const url = `${baseUrl}/user/register`;


describe('User Register page', () => {
    before(() => {
        browser.url(url);
        browser.maximizeWindow();
    });

    it('should have correct header', function () {
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

});
