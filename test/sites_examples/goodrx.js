import { expect } from 'chai' ;

const URL = 'https://www.goodrx.com/';
const drugName = 'Amoxicillin';
const searchInputSelector = '//div[@class="search-wrap"]//input[@name="drug-name"]';
const searchDropdownFirstResult = '//div[@class="search-wrap"]//ul[@class="typeahead dropdown-menu"]/li[1]';
const drugPagePrescriptionSettingsSelector = '//div[@aria-label="Prescription Settings"]';
const drugPageRows = '//div[@id="a11y-prices-start"]//button[contains(text(), "Get free")]/../..';
describe('Amoxicillin', () => {
    before(() => {
        browser.url(URL);
        // Set cookies to be trusted user
        browser.setCookies([
            { name: 'grx_internal_user', value: 'true' },
        ]);
        browser.refresh();
    });
    it('should open the main page with correct h1', () => {
        const h1Text = $('//h1').getText();
        const h1TextExpected = 'Stop paying too much for your prescriptions';
        expect(h1Text).to.eq(h1TextExpected);
    });
    it('should open the main page with search input', () => {
        const searchInputIsDisplayed = $(searchInputSelector).isDisplayed();
        expect(searchInputIsDisplayed).to.be.true;
    });
    it('should type drug name into search input', () => {
        const searchInput = $(searchInputSelector);
        searchInput.setValue(drugName);
        $(searchDropdownFirstResult).click();
    });
    it('should check price page for correct drug name', () => {
        const h1Text = $('//h1/a').getText();
        expect(h1Text).to.eq(drugName);
    });
    it('should check price page for Prescription Settings is displayed', () => {
        const prescriptionSettingsIsDisplayed = $(drugPagePrescriptionSettingsSelector).isDisplayed();
        expect(prescriptionSettingsIsDisplayed).to.be.true;
    });
    it('should check every price row', () => {
        const allRows = $$(drugPageRows);
        const currentWindowId = browser.getWindowHandles()[0];
        let rowPrice, buttonCoupon;
        allRows.forEach(row => {
            rowPrice = row.$('.//div[@data-qa="drug_price"]').getText().split('\n')[1].substring(1);
            buttonCoupon = row.$('.//button[@data-qa="coupon_button"]');
            buttonCoupon.click();
            const modalHeyDoctor = $('//div[@id="modal-heyDoctorModal"]//button[@aria-label="click to close modal"]');
            if (!modalHeyDoctor.error && modalHeyDoctor.isDisplayed()) {
                modalHeyDoctor.click();
            }
            const handles = browser.getWindowHandles();
            const newTabId = handles.filter(el => el !== currentWindowId)[0];
            console.log('HANDLES', handles);
            if (newTabId) {
                browser.switchToWindow(newTabId);
                const price = $('//div[@class="price-info"]//span').getText();
                console.log('PRICE', price);
                expect(price).to.eq(rowPrice);
                browser.closeWindow();
                browser.switchToWindow(currentWindowId);
                const modalPostCoupon = $('//div[@id="modal-PostCoupon"]//span[@role="button"]');
                if (!modalPostCoupon.error && modalPostCoupon.isDisplayed()) {
                    modalPostCoupon.click();
                }
            }
        });
    });
});