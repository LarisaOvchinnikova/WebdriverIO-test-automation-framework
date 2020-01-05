import { expect } from 'chai';

const url = 'https://www.kmart.com/';

const selector = {
    logo: '//a[@class="ribbon-kmart-logo"]',
    searchField: '//div[@class="KeySearch"]',
    buttonSignIn: '//button[@id="yourAccount"]',
    buttonJoinForFree: '//button[@class="button-secondary"]',
    frame: '//div[@id="modalIframe"]',
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

    it('should sign in', () => {
       $(selector.buttonSignIn).click();
    });

    it('should verify that button Join For Free is displayed', () => {
        expect($(selector.buttonJoinForFree).isDisplayed()).true;
    });

    it('should click button Join For Free', () => {
        $(selector.buttonJoinForFree).click();
        browser.pause(2000)
    });

    it('should verify that frame is displayed', () => {
        expect($(selector.frame).isDisplayed()).true;
    });


});
