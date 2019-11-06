import { expect } from 'chai';

const url = 'http://gymn22.minsk.edu.by/';

const selector = {
    minEdu: '//div[@id="wb_Text1"]',
    nameGymn: '//div[@id="wb_Image2"]//img[@id="Image1"]',
    searchField: '//input[@type="search"]',

};


describe('Gumnazia 22 Minsk - Design', () => {
    before (() => {
        browser.url(url);
        browser.maximizeWindow();
        browser.pause(1000);
   });

   it('should open the main page and verify that minEdu is displayed', () => {
       const titleIsDisplayed  = $(selector.minEdu).isDisplayed();
       expect(titleIsDisplayed).true;
   });

    it('should verify that name of school is displayed', () => {
        const titleIsDisplayed  = $(selector.nameGymn).isDisplayed();
        expect(titleIsDisplayed).true;
    });

    it('should verify that search field is displayed', () => {
        const searchIsDisplayed  = $(selector.searchField).isDisplayed();
        expect(searchIsDisplayed).true;
    });
});
