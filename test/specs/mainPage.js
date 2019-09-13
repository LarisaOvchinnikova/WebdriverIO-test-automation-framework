const expect = require('chai').expect;
//import {expect} from 'chai';

describe('Main page', () => {
    before (() => {
        browser.url('https://app.pasv.us/');
    });
    it('should have correct site name', () => {
        const selector = $('//span[@id=\"site-name\"]');
        const actual = selector.getText();
        const expected = 'Progress Monitor';
        expect(actual).to.equal(expected);
    });
     it('should have correct year in the footer copywrite line', () => {
        const element = $('//small[@class=\"d-block mb-3 text-muted\"]');
        const actual = element.getText();
        const currentYear = '2019';
        expect(actual).to.include(currentYear);
    });
});