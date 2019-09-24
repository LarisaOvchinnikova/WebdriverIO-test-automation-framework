import { expect }  from 'chai';
const eng = ['Zero','Beginner', 'Elementary', 'Pre-Intermediate', 'Intermediate', 'Upper intermediate', 'Advanced', 'Proficient', 'Native'];

const { baseUrl } = require('./../../../../constants');

const url = `${baseUrl}/user/register`;


describe('User Register page - design', () => {
    before(() => {
        browser.url(url);
        browser.maximizeWindow();
    });

    it('should have text `User Register` above registration form', function () {
        const h1 = $('//h1').getText();
        expect(h1).to.equal('User Register');
    });

    it('should verify that text `User Register` is left-aligned', function () {
        const element = $('//h1');
        const actualAlign = element.getCSSProperty('text-align').parsed.string
        const expectAlign = 'left';
        expect(actualAlign).to.equal(expectAlign);
    });

    it('should validate that text `User Register` has correct color', () => {
        const element = $('//h1');
        const actualColor = element.getCSSProperty('color').parsed.hex;
        const expectColor = '#333333';
        expect(actualColor).to.equal(expectColor);
    });

    it('should validate that text `User Register` has correct font-size', () => {
        const selector = $('//h1');
        const actualSize = selector.getCSSProperty('font-size').parsed.string;
        const expectFontSize = '42.5px';
        expect(actualSize).to.equal(expectFontSize);
    });

    it('should validate that text `User Register` has correct font-weight', () => {
        const selector = $('//h1');
        const actualWeight = selector.getCSSProperty('font-weight').parsed.string;
        const expectFontWeight = '500';
        expect(actualWeight).to.equal(expectFontWeight);
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
