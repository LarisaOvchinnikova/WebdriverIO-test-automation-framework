import { expect } from 'chai';

const url = 'http://gymn22.minsk.edu.by/';

const selector = {
    minEdu: '//div[@id="wb_Text1"]',
    nameGymn: '//div[@id="wb_Image2"]//img[@id="Image1"]',
    searchField: '//input[@type="search"]',
    loupe: '//input[@class="ya-site-form__submit"]',
    h2: '//h2',

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

    it('should verify that loupe is displayed', () => {
        const loupeIsDisplayed  = $(selector.loupe).isDisplayed();
        expect(loupeIsDisplayed).true;
    });

    it('should enter  data in search field', () => {
        $(selector.searchField).setValue('расписание');
        $(selector.loupe).click();
        browser.pause(1000);
        const actualh2Head = $$(selector.h2).length;
        expect(actualh2Head > 0).true;
    });

    it('should verify redirect to page поиск', () => {
        const actualh2Text = $(selector.h2).getText().toLowerCase();
        expect(actualh2Text).equal('поиск по сайту');
    });

});
