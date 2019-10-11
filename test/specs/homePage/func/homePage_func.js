const expect = require('chai').expect;
const assert = require('chai').assert;
import { url } from './../../../actions/constants';

describe('Home page - functionality', () => {
    before (() => {
        browser.url(url.baseUrl);
    });

    it('should have correct title', () => {
        const title = browser.getTitle();
        browser.pause(4000);
        const expected = 'Progress Monitor';
        expect(title).to.equal(expected);
    });

    it('should verify that clicking on `Progress Monitor` from Home Page gets redirected back to Home Page ', function () {
        const selector = '//span[@id="site-name"]';
        const element = $(selector).click();
        const redirectUrl = browser.getUrl();
        expect(redirectUrl).to.equal(url.baseUrl+'/');
    });

    it('should verify that clicking on Login button from Home Page gets redirected to Login Page ', function () {
        const selector = '//a[@class="nav-link"]';
        const element = $(selector).click();
        browser.pause(1000);
        const redirectUrl = browser.getUrl();
        expect(redirectUrl).to.equal(url.login);
    });

    it('should verify that clicking on `Progress Monitor` from Login Page gets redirected back to Home Page ', function () {
        const selector = '//span[@id="site-name"]';
        const element = $(selector).click();
        browser.pause(1000);
        const redirectUrl = browser.getUrl();
        expect(redirectUrl).to.equal(url.baseUrl+'/');
    });

    it('should verify that clicking on Register button from Home Page gets redirected to Register Page ', function () {
        const selector = '//a[@class="btn btn-outline-primary"]';
        const element = $(selector).click();
        browser.pause(1000);
        const redirectUrl = browser.getUrl();
        expect(redirectUrl).to.equal(url.register);
    });

    it('should verify that clicking on `Progress Monitor` from Register Page gets redirected back to Home Page ', function () {
        const selector = '//span[@id="site-name"]';
        const element = $(selector).click();
        browser.pause(1000);
        const redirectUrl = browser.getUrl();
        expect(redirectUrl).to.equal(url.baseUrl+'/');
    });
    browser.pause(2000);
});
