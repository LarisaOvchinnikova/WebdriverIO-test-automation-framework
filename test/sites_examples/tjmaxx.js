import { expect } from 'chai';

const url = 'https://tjmaxx.tjx.com/store/index.jsp';

const selector = {
   logo: '//img[@itemprop="logo"]',
    searchField: '//input[@id="search-text-input"]',

};
const expected = {

};
const data = {
    search: 'linen dress Italy',
};

describe('TJMAXX - Search field -  functionality', () => {
    before (() => {
        browser.url(url);
        browser.maximizeWindow();
    });

    it('should verify that logo is displayed', () => {
       expect($(selector.logo).isDisplayed()).true;
    });

    it('should verify that search field is displayed', () => {
        expect($(selector.searchField).isDisplayed()).true;
    });

    it('should enter text in search field', () => {
        $(selector.searchField).setValue(data.search);
        browser.keys('Enter');
        browser.pause(6000);
    });


});
