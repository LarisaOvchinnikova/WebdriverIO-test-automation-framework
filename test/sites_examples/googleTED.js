import { expect } from 'chai';

const url = 'https://www.google.com';

const selector = {
    inputField: '//input[@title="Search"]',
};
const expected = {
    h1Groups: 'Groups',
};
const data = {
    groupName: 'Codewars gamers',
};

describe('Google page - functionality', () => {
    before (() => {
        browser.url(url);
    });

    it('should verify that input field is displayed', () => {
       expect($(selector.inputField).isDisplayed()).true;
    });

});
