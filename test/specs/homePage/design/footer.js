import {expect} from 'chai';
//const footer = '//div[contains(text(),"Version")]';
const footer = '//footer[@class="pt-5 pb-5"]';

describe('Home page - Footer - design', () => {
    before (() => {
        browser.url('https://stage.pasv.us/');
    });

    it('footer is displayed',  () => {
        const footerIsDisplayed = $(footer).isDisplayed();
        expect(footerIsDisplayed).to.be.true;
    });

    it('should verify that word `Version` is displayed',  () => {
        const textOfFooter = $(footer).getText();
        console.log('-------------------------------------------------------')
        console.log(textOfFooter);
        console.log('-------------------------------------------------------')
        const version = textOfFooter.includes('Version');
        expect(version).to.be.true;
    });

    it('should  verify that current version is displayed',  () =>{
        const actualVersion = $('//span[@class="badge badge-light"]').getText();
        const expectedVersion = '0.1.74';
        expect(actualVersion).equal(expectedVersion);
    });

    it('should have sign `copyright` © in the second line of footer', () => {
        const actualText = $(footer).getText();
        expect(actualText).to.include('©');
    });

    it('should have current year in the second line', () => {
        const text = $(footer).getText();
        let currentYear = new Date().getFullYear();
        const isIncludes = text.includes(currentYear);
        expect(isIncludes).to.be.true;
    });

    it('should have correct text in the second line of footer', () => {
        const actualText = $(footer).getText();
        const expectedText = 'eat(); sleep(); code(); repeat();';
        expect(actualText).to.include(expectedText);
    });

    it('text in footer is left-aligned', () => {
        const actualAlign = $(footer).getCSSProperty('text-align').parsed.string;
        const expectAlign = 'left';
        expect(actualAlign).to.equal(expectAlign);
    });

    it('text in the footer has correct color', () => {
        const actualColor = $(footer).getCSSProperty('color').parsed.hex;
        const expectColor = '#212529';
        expect(actualColor).to.equal(expectColor);
    });

    it('should verify that word `Version` (inherited from body) has font-size 17px',  () => {
        const actualSize = $(footer).getCSSProperty('font-size').parsed.string;
        console.log(actualSize);
        const expectFontSize = '17px';
        expect(actualSize).to.equal(expectFontSize);
    });

    it('number of version in fist line of footer has font-size 12.75px', () => {
        const versionText = $('//span[@class="badge badge-light"]');
        const actualSize = versionText.getCSSProperty('font-size').parsed.string;
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
        const actualWeight = $(footer).getCSSProperty('font-weight').parsed.string;
        const expectFontWeight = '400';
        expect(actualWeight).to.equal(expectFontWeight);
    });

    it('text in footer has correct font-family ',  () => {
        const font = $(footer).getCSSProperty('font-family').parsed.string ;
        expect(font).to.equal('"sf pro display", "sf pro icons", "helvetica neue", helvetica, arial, sans-serif');
    });

});
