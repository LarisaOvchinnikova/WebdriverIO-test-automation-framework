import { expect } from 'chai';

const url = 'https://tjmaxx.tjx.com/store/index.jsp';

const selector = {
   logo: '//img[@itemprop="logo"]',
    searchField: '//input[@id="search-text-input"]',
    searchResult: '//div[@class="products-header"]',
    product: '//p/a[@class="product-link"]',

};

const data = {
    search: 'linen dress Italy',
};

let countOfResults;

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

    let test = it('should enter text in search field', () => {
        $(selector.searchField).setValue(data.search);
        browser.keys('Enter');
    });

    it('should verify that result of search displays on the page', () => {
        const text = $(selector.searchResult).getText();
        expect(text).to.include(data.search);
    });

    it('should find count of results and verify count > 0', () => {
        const text = $(selector.searchResult).getText();
        countOfResults = text.match(/\d/g).join('');
        expect(+countOfResults > 0).to.be.true;
    });

    it('should find count of product links and verify that it = count of results', () => {
        const productLinksCount = $$(selector.product).length;
        expect(productLinksCount).equal(+countOfResults);
    });
});
