const assert = require('assert');
describe('Header ', () => {
    it('should have the button Register', () => {
        browser.url('https://app.pasv.us/');
        const reg = $('//a[@class=\'btn btn-outline-primary\']');
        const r = reg.getText();
        assert.strictEqual(r, 'Register');
        //reg.click();
    });
});
describe('Header ', () => {
    it('should have the button Login', () => {
        const log = $('//a[@class=\'nav-link\']');
        const l = log.getText();
        assert.strictEqual(l, 'Login');
        log.click();
    });
});


