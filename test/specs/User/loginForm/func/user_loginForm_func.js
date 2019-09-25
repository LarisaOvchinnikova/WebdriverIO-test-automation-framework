import { expect }  from 'chai';
import loginHelpers from '../../../../actions/loginAction';
const { baseUrl } = require('../../../../constants');
const { loginUrl } = require('../../../../constants');
const userAdminId = '5d6dc5f8af023b00386c5f3b';
const userAdminName = 'Lara Lara';

describe('User - Login form - Functionality', () => {
    before (() => {
      browser.url(loginUrl);
    });

    it('should have correct h1', () => {
        const actual = $('//h1').getText();
        const expected = 'User Login';
        expect(actual).to.eq(expected);
    });

    it('should login', () => {
        loginHelpers.login();
    });
    browser.pause(10000);

    it('should redirected to user profile page', () => {
        const actualUrl = browser.getUrl();
    //  const expectedUrl = 'https://stage.pasv.us/user/5d6dc5f8af023b00386c5f3b';
        const expectedUrl = `${baseUrl}/user/${userAdminId}`;
        expect(actualUrl).equal(expectedUrl);
    });

    it('should h1 equal to user name', () => {
        const h1 = $('//h1').getText();
        expect(h1).to.equal(userAdminName);
    });

    it ("should have user name in dropdown button", () => {
       const element = $('//a[@class=\'dropdown-toggle nav-link\']') ;
       const text = element.getText();
       const expected = userAdminName;
       expect(text).to.equal(expected);
    });

    it ("displays roles", () => {
        const element = $('#root .col [class=\'ml-4rem\']:nth-of-type(3)');
        const text = element.getText();
        expect(text).to.have.lengthOf.at.least(1);
    });

    it ("User has admin role", () => {
        const selector = $('//body/div[@id=\'root\']/div/div/div/div[@class=\'container\']/div[@class=\'row\']/div[@class=\'col\']/div/div[@class=\'row\']/div[@class=\'col\']/span[3]') ;
        const actual = selector.getText();
        const expected = 'admin';
        expect(actual).to.include(expected);
    });

});