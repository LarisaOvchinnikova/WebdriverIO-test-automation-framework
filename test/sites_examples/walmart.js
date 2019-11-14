import { expect } from 'chai';

const url = 'https://www.walmart.com/';

const selector = {
    search: '//input[@id=\'global-search-input\']',

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



});
