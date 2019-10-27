import { expect } from 'chai';

const url = 'https://tjmaxx.tjx.com/store/index.jsp';

const selector = {
   logo: '//img[@itemprop="logo"]',
    searchField: '//input[@id="search-text-input"]',
    searchResult: '//div[@class="products-header"]',
    product: '//p/a[@class="product-link"]',
    productDescription: '//a//span[@class="product-title equal-height-cell"]',
    productBrand: '//span[@class="product-brand"]',
    productLink: '//a[@class="product-link"]',
    h1Product: '//h1[@class="product-brand"]',

};

const data = {
    search: 'linen dress Italy',
};

let countOfResults;
const arrayOfKeyWords = data.search.toLowerCase().split(' ');
let nameOfBrand;

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

    it('should verify that first product description contains key search words', () => {
        const productDescriptionText = $$(selector.productDescription)[0].getText().toLowerCase();
        let k = 0;
        for (let i = 0; i < arrayOfKeyWords.length; i++){
           if (productDescriptionText.includes(arrayOfKeyWords[i])) k++;
        }
        expect(k).equal(arrayOfKeyWords.length);
    });

    it('should find count of product brands and verify that it = count of results', () => {
        const productBrandCount = $$(selector.productBrand).length;
    //    nameOfBrand = $(selector.productBrand)[0].getText();
        expect(productBrandCount).equal(+countOfResults);
    });

    it('should verify that click on first product brand redirect to product page', () => {
         const product = $(selector.productLink).click()
 //       console.log('=============================================================')
  //      console.log(product);
 //       console.log('=============================================================')
        browser.pause(600);
  //      const actualH1 = $(selector.h1Product).getText();
 //       expect(actualH1).equal(nameOfBrand);
    });

});
