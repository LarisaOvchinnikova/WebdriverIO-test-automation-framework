//const expect = require('chai').expect;
//const assert = require('chai').assert;
import {expect} from 'chai';
import { baseUrl } from '../../../constants';


describe('Home page - General - Design', () => {
    before (() => {
        browser.url(baseUrl);
    });

    it('should verify URL', function () {
        const actualURL = browser.getUrl();
        expect(actualURL).to.equal(baseUrl+'/');
    });

    it('should verify that favicon.ico is existing', function () {
        const selector = '//link[@href="/favicon.ico"]';
        const faviconIsDisplayed = $(selector).isExisting();
        expect(faviconIsDisplayed).to.be.true;

    });

    it('should have correct title', () => {
        const title = browser.getTitle();
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

    it('should verify that h1 header is correct', function () {
        const selector = '//div[@class ="header-title"]';
        const h1Actual = $(selector).getText();
        const h1Expected = 'System that considers\nindividual features of\neach student';
        expect(h1Actual).equal(h1Expected);
     });

    it('verify that container on main page contains 7 images', function () {
        let imgCount = $$('//img').length;
        const expectedCountOfImages = 7;
        expect(imgCount).to.equal(expectedCountOfImages);
    });

    it('verify that container on main page contains 7 blocks', function () {
        let blockCount = $$('//p[@class="intro"]').length;
        const expectedCountOfBlocks = 7;
        expect(blockCount).to.equal(expectedCountOfBlocks);
    });
    it('application has global footer', function () {
        const selector = '//footer/div[@class="container"]';
        const footerIsDisplayed = $(selector).isDisplayed();
        expect(footerIsDisplayed).to.be.true;
    });

});
