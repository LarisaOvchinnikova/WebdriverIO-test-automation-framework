import { expect } from 'chai';

const url = 'https://www.google.com';

const selector = {
    inputField: '//input[@title="Search"]',
    resultTitle: '//div[@id="res"]//h3',
};
const expected = {
    textOfResult: 'TED: Ideas worth spreading',
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
});
