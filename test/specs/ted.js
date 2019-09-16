const { expect } = require('chai');

describe ("TED", () => {
    before(() => {
        browser.url('http://www.google.com');
    });

    it('should open google and type TED in search bar', function () {
       const input = $('');
       input.setValue('TED');
       browser.keys("Enter");
    });

    it('should check the first title', function () {
       const firstResultTitle = $('//div')
    });
})