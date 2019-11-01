import { expect } from 'chai';

const url = 'https://tjmaxx.tjx.com/store/index.jsp';

const selector = {
    h1: '//h1',
    logo: '//img[@itemprop="logo"]',
    searchField: '//input[@id="search-text-input"]',
    searchResult: '//div[@class="products-header"]',
    product: '//div[@class="product-inner"]',
    productDescription: '//a//span[@class="product-title equal-height-cell"]',
    productBrand: '//a/span[@class="product-brand"]', //array
    productLink: '//a[@class="product-link"]',
    strikePrice: '//span[@class="strike"]',
    price: '//span[@class="discounted-price  "]',
    productPrice: '//span[@class="product-price"]',
    comparePrice: '//span[@class="price-comparison"]',
    h1Product: '//h1[@class="product-brand"]',

};

const data = {
    search: 'linen dress italy',
};

let countOfResults;
const arrayOfKeyWords = data.search.toLowerCase().split(' ');
let nameOfBrand;
let oldPrice;
let newPrice;
let oldPriceOfProduct;
let k = 0;
let comparePriceText;
let comparePrice;

describe('TJMAXX - Search field -  functionality', () => {
    before (() => {
        browser.url(url);
        browser.maximizeWindow();
        browser.refresh();

        browser.pause(1000);
   });

   it('should open the main page and verify that logo is displayed', () => {
       expect($(selector.logo).isDisplayed()).true;
    });

    it('should verify that search field is displayed on the main page', () => {
        expect($(selector.searchField).isDisplayed()).true;
    });

    let test = it('should type text in search field', () => {
        $(selector.searchField).setValue(data.search);
        browser.keys('Enter');
    });

    it('should verify that result of search displays on the page', () => {
        const text = $(selector.searchResult).getText();
        expect(text).to.include(data.search);
    });

    it('should find count of results and verify count > 0', () => {
        const text = $(selector.searchResult).getText();
        countOfResults = +text.match(/\d/g).join('');
        expect(countOfResults > 0).to.be.true;
    });

    it('should find count of product links and verify that it = count of results', () => {
        const productLinksCount = $$(selector.product).length;
        expect(productLinksCount).equal(countOfResults);
    });

    it('should find count of brands and verify that it = count of results', () => {
        const allBrands = $$(selector.productBrand).length;
        expect(allBrands).equal(countOfResults);
    });

   it('should verify that first product description contains key search words', () => {
        const productDescriptionText = $$(selector.productDescription)[0].getText().toLowerCase();
        let k = 0;
        for (let i = 0; i < arrayOfKeyWords.length; i++){
           if (productDescriptionText.includes(arrayOfKeyWords[i])) k++;
        }
        expect(k).equal(arrayOfKeyWords.length);
    });

    it('should get name of product text and old and new price', () => {
        nameOfBrand = $(selector.productBrand).getText();
        oldPrice = $(selector.strikePrice).getText();
        const strikeAndNewPrice = $(selector.price).getText();
        newPrice = strikeAndNewPrice.replace(oldPrice,'').trim();
        console.log('=============================================================')
        console.log(nameOfBrand);
        console.log(oldPrice);
        console.log(strikeAndNewPrice);
        console.log(newPrice);
        console.log('=============================================================')
    });

    it('should count the amount of products on results page', () => {
        const count = $$(selector.productBrand).length;
        expect(count).equal(countOfResults);
    });
    it('should find compare price of product on results page', () => {
        const comparePriceCount = $$(selector.comparePrice).length;
        expect(comparePriceCount).equal(countOfResults);
    });

    it('should verify compare price of product on results page', () => {
        comparePriceText = $(selector.comparePrice).getText();
        const index = comparePriceText.indexOf('$');
        const comparePrice = comparePriceText.substring(index+1);
        console.log('=======================' + comparePriceText +'===================================')
        console.log('=======================' + index +'===================================')
        console.log('=======================' + comparePrice +'===================================')
    });

/*
    it('should find names of brands in the loop', () => {
        for(let i = 0; i < countOfResults; i++) {
          const name = $$(selector.productBrand)[i].getText();
          $$(selector.productBrand)[i].click();
          browser.pause(9000);
          const actualH1 = $(selector.h1Product).getText();
          if (actualH1 === name) k++;
          browser.back();
        }
        expect(k).equal(countOfResults);
    });
    it('should check product prices in the loop', () => {
        k = 0;
        const allBrandsCount = $$(selector.productBrand).length;
        for(let i = 0; i < allBrandsCount; i++) {
            const price = $$(selector.productPrice)[i].getText();
            $$(selector.productBrand)[i].click();
            browser.pause(3000);
            const productPrice = $(selector.productPrice).getText();
            if (productPrice === price) k++;
            else {
                console.log('===================== ' + i + '==============================');
                console.log(price);
                console.log(productPrice);
                console.log('______________________________________________________________');
            }
            browser.back();
            browser.pause(3000);
        }
        expect(k).equal(allBrandsCount);
    });
   */
    it('should verify that click on first product brand redirect to product page', () => {
        const product = $(selector.productLink).click();
        browser.pause(600);
        const actualH1 = $(selector.h1Product).getText();
        expect(actualH1).equal(nameOfBrand);
    });

    it('should verify that old price on product page is the same as oldPrice on the results page ', () => {
        oldPriceOfProduct = $(selector.strikePrice).getText();
        expect(oldPriceOfProduct).equal(oldPrice);
    });

    it('should verify that new price on product page is the same as new price on the results page ', () => {
        const strikeAndNewPrice = $(selector.price).getText();
        const newPriceOfProduct = strikeAndNewPrice.replace(oldPriceOfProduct,'').trim();
        expect(newPriceOfProduct).equal(newPrice);
    });

    it('should verify that compare price on product page is the same as compare price on the results page ', () => {
        const comparePriceString = $(selector.comparePrice).getText();
        expect(comparePriceString).includes(comparePriceText);
    });

    it('should navigate back to result page ', () => {
        browser.back();
        browser.pause(6000);
        const h1actual = $(selector.h1).getText().toLowerCase();
        expect(h1actual).includes(data.search);
    });

});
