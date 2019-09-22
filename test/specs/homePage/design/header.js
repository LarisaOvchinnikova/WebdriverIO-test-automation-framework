const expect = require('chai').expect;
const assert = require('chai').assert;

const { baseUrl } = require('../../../constants');
const url = `${baseUrl}`;

describe('Home page - Design', () => {
    before(() => {
        browser.url(url);
    });

    it('should veryfy that application name is displayed', function () {
        const siteName = '//span[@id="site-name"]';
        const siteNameIsDisplayed = $(selector).isDisplayed();
        expect(siteNameIsDisplayed).to.be.true;

    });

    it('verify that application name is "Progress Monitor"', () => {
        const selector = '//span[@id="site-name"]';
        const siteName = $(selector).getText();
        const expectedSiteName = 'Progress Monitor';
        expect(siteName).to.equal(expectedSiteName);
    });
    it('should have correct title', () => {
        const title = browser.getTitle();
        browser.pause(4000);
        const expected = 'Progress Monitor';
        expect(title).to.equal(expected);
    });

    it('verify that application has global header', () => {
        const selector = '//div[@id="main-bar"]';
        const globalHeader = $(selector).isDisplayed();
        expect(globalHeader).to.be.true;
    });



    it('should verify that h1 header is correct', function () {
        const selector = '//div[@class ="header-title"]'
        const h1Actual = $(selector).getText();
        console.log('_________________________________________________________');
        console.log(h1Actual);
        console.log('_________________________________________________________');
        const h1Expected = 'System that considers\nindividual features of\neach student';
        expect(h1Actual).equal(h1Expected);
    });

});