const assert = require('chai').assert;
import { expect }  from 'chai';

describe('Register page', () => {
    before(() => {
        browser.url('https://stage.pasv.us/');
    });

     it('should have Register button', () => {
        const reg = $('//a[@class=\'btn btn-outline-primary\']');
        const actual = reg.getText();
        const expected = 'Register';
        expect(actual).to.equal(expected);
        reg.click();
        browser.pause(1000);
    });
});