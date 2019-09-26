const expect = require('chai').expect;
const assert = require('chai').assert;

const { baseUrl } = require('../../../constants');
const url = `${baseUrl}`;

const siteName = '//span[@id="site-name"]';
const navBar = '//div[@id="user-section"]';
const loginButton = '//a[contains(text(),"Login")]';
const registerButton = '//a[contains(text(),"Register")]';

describe('Home page - Design', () => {
    before(() => {
        browser.url(url);
    });


});