const { expect } = require('chai');
const { baseUrl } = require('./../../../../constants');

const url = `${baseUrl}/user/login`;

describe('User -- Login Form -- Design', () => {
    before(() => {
        browser.url(url);
    });

    it('should have correct header', () => {
        const selector = $('//h1');
        const actual = selector.getText();
        const expected = 'User Login';
        expect(actual).to.equal(expected);
    });

    it('should validate h1 is displayed', () => {
        const selector = $('//h1');
        const isDisplayed = selector.isDisplayed();
        expect(isDisplayed).to.be.true;
    });


});
