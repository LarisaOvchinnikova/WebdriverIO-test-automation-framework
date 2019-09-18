//import { expect } from 'chai';
const { expect } = require ('chai');
import loginHelpers from '../../actions/loginAction';

describe('Diary List', () => {
    before (() => {
        loginHelpers.login();
    });

    it('should have main menu with item Diary ', () => {
      //  const selector = '//div[@id="site-menu"]//a[text() ="Diary"]';
        const selector = '//a[contains(text(),\'Diary\')]';
        const isDisplayed = $(selector).isDisplayed();
        expect(isDisplayed).to.be.true;
    });

    it('should redirect to Diary page ', () => {
        const selector = '//a[contains(text(),\'Diary\')]';
        $(selector).click();

        const actualh1Text = $('//h1').getText();
        const expected = 'Day reports';

        expect(actualh1Text).to.equal(expected);
    });
});