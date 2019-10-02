const { expect } = require ('chai');
const loginAction = require('../../actions/adminLoginActions');

//import loginHelpers from '../../actions/loginAction';
const menuDiarySelector = '//a[contains(text(),"Diary")]';


describe('Diary List', () => {
    before (() => {
        loginHelpers.login();
    });

    it('should have main menu with item Diary ', () => {
        const isDisplayed = $(menuDiarySelector).isDisplayed();
        expect(isDisplayed).to.be.true;
    });

    it('click to Diary in main menu should redirect to Day reports page ', () => {
        $(menuDiarySelector).click();
        const actualh1Text = $('//h1').getText();
        const expected = 'Day reports';

        expect(actualh1Text).to.equal(expected);
    });

    it('should have a few records ', function () {
        browser.pause(1000);

        const selector = '//div[@class ="pb-4 mb-4 border-bottom"]';
        const element = $(selector);
        console.log("------------------------------------------------------------")
        console.log(element);
    });
});