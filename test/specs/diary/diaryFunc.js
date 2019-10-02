import { expect } from 'chai';
import { user } from './../../actions/userConstants';
import { url } from './../../actions/constants';
import loginAction from '../../actions/loginActions';

const menuDiarySelector = '//div[@id="site-menu"]//a[text() = "Diary"]';
const headerSelector = '//h1';
const diaryRecordSelector = '//div[@class="mt-2"]';
const createDayReportButtonSelector = '//a[text()="Create day report"]';

const diaryH1 = 'Day reports';
const createDiaryH1 = 'Create day report';

describe('Diary - Func', () => {
    before (() => {
        loginAction(browser);
    });

    it('should verify that `Diary` is displayed in main menu', () => {
      const diaryIsDisplayed = $(menuDiarySelector).isDisplayed();
      expect(diaryIsDisplayed).to.be.true;
    });

    it('should verify that click to `Diary` in main menu should redirect to Diary page', () => {
        $(menuDiarySelector).click();
        const actualUrl = browser.getUrl();
        expect(actualUrl).to.equal(url.diaryUrl);
    });

    it('should verify that `Day reports` page has correct h1', () => {
        const actualh1Text = $(headerSelector).getText();
        expect(actualh1Text).to.equal(diaryH1);
    });

    it('should verify that `Day reports` page has at least one record', function () {
        browser.pause(1000);
        const countOfRecords = $$(diaryRecordSelector).length;
        expect(countOfRecords > 0).to.be.true;
    });

    it('should verify that click to `Create day report` button redirect to `Create day report` page', () => {
        $(createDayReportButtonSelector).click();
        const actualUrl = browser.getUrl();
        expect(actualUrl).to.equal(url.createDayReportUrl);
    });

    it('should verify that `Create day report` page has correct h1', () => {
        const actualh1Text = $(headerSelector).getText();
        expect(actualh1Text).to.equal(createDiaryH1);
    });
});