const expect = require('chai').expect;
const assert = require('chai').assert;
//import {expect} from 'chai';

describe('Home page - functionality', () => {
    before(() => {
        browser.url('https://stage.pasv.us/');
    });

    it('should verify that clicking on Register button from Home Page gets redirected to Register Page ', function () {
        const selector = '//a[@class="btn btn-outline-primary"]';
        const element = $(selector).click();
        browser.pause(1000);
        const redirectUrl = browser.getUrl();
        const expected = 'https://stage.pasv.us/user/register';

        expect(redirectUrl).to.equal(expected);
    });

});