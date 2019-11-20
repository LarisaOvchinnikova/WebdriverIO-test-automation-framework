import { expect } from 'chai';

const url = 'https://www.walmart.com/';

const selector = {
    logo: '//a[@id=\'vh-home-link\']//span[@class=\'g_a g_i\']',
    search: '//input[@id="global-search-input"]',
    allDeparttmentsSearch: '//div[@id="search-category-bg"]',
    lupa: '//button[@id=\'global-search-submit\']//span[@class=\'g_a g_f\']',

};

describe('Facebook - functionality', () => {
    before (() => {
        browser.url(url);
        browser.maximizeWindow();

        browser.pause(1000);
   });

   it('should verify search field is displayed', () => {
        const searchIsDisplayed = $(selector.search).isDisplayed();
        expect(searchIsDisplayed).to.be.true;
    });

    it('should verify logo is displayed', () => {
        const logoIsDisplayed = $(selector.logo).isDisplayed();
        expect(logoIsDisplayed).to.be.true;
    });

    it('should verify All Departments drop menu is existing', () => {
        const allDepIsExisting = $(selector.allDeparttmentsSearch).isExisting();
        expect(allDepIsExisting).to.be.true;
    });

    it('should verify lupa is displaying', () => {
        const lupaIsDisplayed = $(selector.lupa).isDisplayed();
        expect(lupaIsDisplayed).to.be.true;
    });


    it('should enter text in search field', () => {
        $(selector.search).setValue('shampoo');
        browser.pause(10000);

    });
});
