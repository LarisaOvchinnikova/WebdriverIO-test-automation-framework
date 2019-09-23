const expect = require('chai').expect;
const assert = require('chai').assert;
//import {expect} from 'chai';

describe('Home page - footer - design', () => {
    before (() => {
        browser.url('https://stage.pasv.us/');
    });

    it('footer is displayed', function () {
        const selector = '//footer/div[@class="container"]';
        const footerIsDisplayed = $(selector).isDisplayed();
        expect(footerIsDisplayed).to.be.true;
    });

    it('should verify that first line displays Version', function () {
        const footer = $('//div[contains(text(),"Version")]');
        const versionIsDisplayed = footer.isDisplayed();
        expect(versionIsDisplayed).to.be.true;
    });

    it('should display current version ', function () {
        const version = $('//span[@class="badge badge-light"]').getText();
        const expected ='0.1.74';
        expect(version).equal(expected);
    });
    it('should have correct year in the second line', () => {
        const element = $('//small[@class="d-block mb-3 text-muted"]');
        const text = element.getText();
        const currentYear = '2019';
        const isIncludes = text.includes(currentYear);
        expect(isIncludes).to.be.true;
    });

    it('should have correct text in the second line of footer', () => {
        const element = $('//small[@class="d-block mb-3 text-muted"]');
        const actual = element.getText();
        const currentText = '© 2019 eat(); sleep(); code(); repeat();';
        expect(actual).to.include(currentText);
    });

    it('text in footer is left-aligned', () => {
        const selector = $('//div[contains(text(),"Version")]');
        const actualAlign = selector.getCSSProperty('text-align').parsed.string;
        const expectAlign = 'left';
        expect(actualAlign).to.equal(expectAlign);
    });

    it('text in the footer has correct color', () => {
        const selector = $('//div[contains(text(),"Version")]');
        const actualColor = selector.getCSSProperty('color').parsed.hex;
        console.log('=====================================================')
        console.log(actualColor);
        console.log('=====================================================')
        const expectColor = '#212529';
        expect(actualColor).to.equal(expectColor);
    });

    it('number of version in fist line of footer has font-size 12.75px', () => {
        const selector = $('//span[@class="badge badge-light"]');
        const actualSize = selector.getCSSProperty('font-size').parsed.string;
        console.log('=====================================================')
        console.log(actualSize);
        console.log('=====================================================')
        const expectFontSize = '12.75px';
        expect(actualSize).to.equal(expectFontSize);
    });

    it('second line of footer has font-size 13.6px', () => {
        const selector = $('//small[@class="d-block mb-3 text-muted"]');
        const actualSize = selector.getCSSProperty('font-size').parsed.string;
        const expectFontSize = '13.6px';
        expect(actualSize).to.equal(expectFontSize);
    });

    it('text in footer has correct font-weight', () => {
        const selector = $('//footer/div[@class="container"]');
        const actualWeight = selector.getCSSProperty('font-weight').parsed.string;
        const expectFontWeight = '400';
        expect(actualWeight).to.equal(expectFontWeight);
    });

    it('text in footer has correct font-family ', function () {
        const elem = $('//footer/div[@class="container"]');
        const font = elem.getCSSProperty('font-family').parsed.string ;
        expect(font).to.equal('"sf pro display", "sf pro icons", "helvetica neue", helvetica, arial, sans-serif');
    });




});
