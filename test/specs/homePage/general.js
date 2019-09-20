const expect = require('chai').expect;
const assert = require('chai').assert;
//import {expect} from 'chai';

const { baseUrl } = require('./../../constants');
const url = `${baseUrl}`;

describe('Home page - General', () => {
    before (() => {
        browser.url(url);
    });

    it('should verify URL', function () {
        const applicationURL = browser.getUrl();
        const expectedURL = 'https://stage.pasv.us/';
        expect(applicationURL).to.equal(expectedURL);
    });

    it('should veryfy that favicon.ico is existing', function () {
        const selector = '//link[@href="/favicon.ico"]';
        const faviconIsDisplayed = $(selector).isExisting();
        expect(faviconIsDisplayed).to.be.true;

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

    it('verify that header contains application name', () => {
        const selector = '//span[@id="site-name"]';
        const actual = $(selector).getText();
        const expected = 'Progress Monitor';

        expect(actual).to.equal(expected);
    });

    it('application has global footer', function () {
        const selector = '//footer/div[@class="container"]';
        const footerIsDisplayed = $(selector).isDisplayed();
        expect(footerIsDisplayed).to.be.true;
    });

    it('application has container with functional parts 8 images and  8 blocks', function () {


    });
    it('should have correct year in the footer copywrite line', () => {
        const element = $('//small[@class="d-block mb-3 text-muted"]');
        const text = element.getText();
        const currentYear = '2019';
        const isIncludes = text.includes(currentYear);
        expect(isIncludes).to.be.true;
    });

    it('should have correct text in the footer copywrite line', () => {
        const element = $('//small[@class=\"d-block mb-3 text-muted\"]');
        const actual = element.getText();
        const currentText = 'eat(); sleep(); code(); repeat();';
        expect(actual).to.include(currentText);
    });

});
