import { expect } from 'chai';

const url = 'https://www.kmart.com/';

const selector = {
    logo: '//a[@class="ribbon-kmart-logo"]',
    searchField: '//div[@class="KeySearch"]',
    buttonSignIn: '//button[@id="yourAccount"]',
    menuHealthBeauty: '//a[@class="gnf_tree_junction"][contains(text(),"Health & Beauty")]',
};

describe('Kmart - Search field -  functionality', () => {
    before (() => {
        browser.url(url);
        browser.maximizeWindow();
        browser.pause(1000);
   });

   it('should open the main page and verify that logo is displayed', () => {
       expect($(selector.logo).isDisplayed()).true;
    });

    it('should verify that search field is displayed on the main page', () => {
        expect($(selector.searchField).isDisplayed()).true;
    });

    it('should verify sign in button is displayed', () => {
       expect($(selector.buttonSignIn).isDisplayed()).true;
    });

    it('should click menu Health and Beauty', () => {
        $(selector.menuHealthBeauty).click();
    });


});
