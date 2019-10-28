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
    h1Product: '//h1[@class="product-brand"]',

};

const data = {
    search: 'linen dress Italy',
};

let countOfResults;
const arrayOfKeyWords = data.search.toLowerCase().split(' ');
let nameOfBrand;
let oldPrice;
let newPrice;
let oldPriceOfProduct;


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
        countOfResults = text.match(/\d/g).join('');
        expect(+countOfResults > 0).to.be.true;
    });

    it('should find count of product links and verify that it = count of results', () => {
        const productLinksCount = $$(selector.product).length;
        expect(productLinksCount).equal(+countOfResults);
    });

    it('should find count of brands and verify that it = count of results', () => {
        const allBrands = $$(selector.productBrand).length;
        expect(allBrands).equal(+countOfResults);
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

    it('should find names of brands in the loop', () => {
        const allBrandsCount = $$(selector.productBrand).length;
        const allBrands = $$(selector.productBrand);
        for(let i = 0; i < allBrandsCount; i++) {
            const name = $$(selector.productBrand)[i].getText();

            console.log('=+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=')
            console.log(name);
            console.log('=++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=')
        }
    });


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

    it('should navigate back to result page ', () => {
        browser.back();
        browser.pause(6000);
        const h1actual = $(selector.h1).getText();
        expect(h1actual).includes(data.search);
    });
});
