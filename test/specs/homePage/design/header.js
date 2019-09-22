const expect = require('chai').expect;
const assert = require('chai').assert;

const { baseUrl } = require('../../../constants');
const url = `${baseUrl}`;

describe('Home page - Design', () => {
    before(() => {
        browser.url(url);
    });

    it('verify that application has global header', () => {
        const selector = '//div[@id="main-bar"]';
        const globalHeader = $(selector).isDisplayed();
        expect(globalHeader).to.be.true;
    });

    it('should veryfy that application name is displayed', function () {
        const selector = '//span[@id="site-name"]';
        const siteNameIsDisplayed = $(selector).isDisplayed();
        expect(siteNameIsDisplayed).to.be.true;

    });

    it('verify that application name is "Progress Monitor"', () => {
        const selector = '//span[@id="site-name"]';
        const siteName = $(selector).getText();
        const expectedSiteName = 'Progress Monitor';
        expect(siteName).to.equal(expectedSiteName);
    });

    it('application name is left-aligned', () => {
        const selector = $('//span[@id="site-name"]');
        const actualAlignment = selector.getCSSProperty('text-align').parsed.string;
        const expectAlignment = 'left';
        expect(actualAlignment).to.equal(expectAlignment);
    });

    it('application name should have correct font-size', () => {
        const selector = $('//span[@id="site-name"]');
        const actualSize = selector.getCSSProperty('font-size').parsed.string;
        const expectFontSize = '20px';
        expect(actualSize).to.equal(expectFontSize);
    });

    it('application name should have correct color', () => {
        const selector = $('//span[@id="site-name"]');
        const actualColor = selector.getCSSProperty('color').parsed.hex;
        const expectColor = '#000000';
        expect(actualColor).to.equal(expectColor);
    });

    it('application name should have correct font-size', () => {
        const selector = $('//span[@id="site-name"]');
        const actualSize = selector.getCSSProperty('font-size').parsed.string;
        const expectFontSize = '20px';
        expect(actualSize).to.equal(expectFontSize);
    });

    it('application name should have correct font-weight', () => {
        const selector = $('//span[@id="site-name"]');
        const actualWeight = selector.getCSSProperty('font-weight').parsed.string;
        const expectFontWeight = '500';
        expect(actualWeight).to.equal(expectFontWeight);
    });

    it('application name should have correct font-family ', function () {
        const elem = $('//span[@id="site-name"]');
        const font = elem.getCSSProperty('font-family').parsed.string ;
        expect(font).to.equal('"sf pro display", "sf pro icons", "helvetica neue", helvetica, arial, sans-serif');
    });

    it('should have Login button', () => {
        const login = $('//a[@class="nav-link"]');
        const actual = login.getText();
        const expected = 'Login';
        expect(actual).to.equal(expected);
    });

    it('should have Register button', () => {
        const registerButton = $('//a[@class=\'btn btn-outline-primary\']');
        const actual = registerButton.getText();
        const expected = 'Register';
        expect(actual).to.equal(expected);
    });




});