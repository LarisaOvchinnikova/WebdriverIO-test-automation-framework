import { expect } from 'chai';

const url = 'https://www.google.com';

const selector = {
    inputField: '//input[@title="Search"]',
    resultTitle: '//div[@id="res"]//h3',
    videosButton: '//a[contains(text(),"Videos")]',
    imagesButton: '//a[contains(text(),"Images")]',
    firstImage: '//div[@class="mVDMnf nJGrxf"]',
};
const expected = {
    textOfResult: 'TED: Ideas worth spreading',
    videoTitle: 'TED - YouTube',
    imageTitle: 'TED Talks',
};
const data = {
    search: 'TED',
};

describe('Google page - TED - functionality', () => {
    before (() => {
        browser.url(url);
    });

    it('should verify that input field is displayed', () => {
       expect($(selector.inputField).isDisplayed()).true;
    });

   it('should type TED in search bar', () => {
       $(selector.inputField).setValue(data.search);
       browser.keys("Enter");
    });

    it('should check the first result', () => {
        const firstResult = $(selector.resultTitle).getText();
        expect(firstResult).to.include(expected.textOfResult);
    });

    it('should verify that URL contains `TED`', () => {
        const actualUrl = browser.getUrl();
        expect(actualUrl.includes('TED')).to.be.true;
    });

    it('should verify that click on button Videos redirect to videos page and first result contains text `TED-YouTube`', () => {
        $(selector.videosButton).click();
        browser.pause(1000);
        const firstVideo = $(selector.resultTitle).getText();
        expect(firstVideo).to.include(expected.videoTitle);
    });

    it('should verify that click on button Images redirect to images page and first result contains text `TED-Talks`', () => {
        $(selector.imagesButton).click();
        browser.pause(1000);
        const firstImageText = $(selector.firstImage).getText();
        expect(firstImageText).to.include(expected.imageTitle);
    });


});
