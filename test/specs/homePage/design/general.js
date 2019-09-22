const expect = require('chai').expect;
const assert = require('chai').assert;
//import {expect} from 'chai';

const { baseUrl } = require('../../../constants');
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

    it('should verify that h1 header is correct', function () {
        const selector = '//div[@class ="header-title"]'
        const h1Actual = $(selector).getText();
        console.log('_________________________________________________________');
        console.log(h1Actual);
        console.log('_________________________________________________________');
        const h1Expected = 'System that considers\nindividual features of\neach student';
        expect(h1Actual).equal(h1Expected);
     });

    it('verify that container on main page contains 7 images', function () {
        let imgCount = $$('//img').length;
        console.log('_________________________________________________________');
        console.log(imgCount);
        console.log('_________________________________________________________');
        const expectedCountOfImages = 7;
        expect(imgCount).to.equal(expectedCountOfImages);
    });

    it('verify that container on main page contains 8 blocks', function () {
        let imgCount = $$('//img').length;
        console.log('_________________________________________________________');
        console.log(imgCount);
        console.log('_________________________________________________________');
        const expectedCountOfImages = 7;
        expect(imgCount).to.equal(expectedCountOfImages);
    });
    it('application has global footer', function () {
        const selector = '//footer/div[@class="container"]';
        const footerIsDisplayed = $(selector).isDisplayed();
        expect(footerIsDisplayed).to.be.true;
    });

});
