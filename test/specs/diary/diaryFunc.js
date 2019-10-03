import { expect } from 'chai';
import { user } from './../../actions/userConstants';
import { url } from './../../actions/constants';
import loginAction from '../../actions/loginActions';

const menuDiarySelector = '//div[@id="site-menu"]//a[text() = "Diary"]';
const headerSelector = '//h1';
const diaryRecordSelector = '//div[@class="mt-2"]';
const createDayReportButtonSelector = '//a[text()="Create day report"]';
const saveButtonSelector = '//button[@type="submit"]';
const checkBoxSelector = '//input[@type="checkbox"]';
const descriptionFieldSelector = '//textarea[@name="description"]';

const diaryH1 = 'Day reports';
const createDiaryH1 = 'Create day report';
const dayReportText = 'Today I watched 2 lectures and solved 3 tasks on codewars. Also I wrote tests.'

describe('Diary - Func', () => {
    before (() => {
        loginAction(browser);
        browser.pause(1000);
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

    it('should verify that `Day reports` page has at least one record',  () => {
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
    it('should veryfy that there are checkboxes on `Create day report` page',  () => {
        const countOfCheckBoxes = $$(checkBoxSelector).length;
        expect(countOfCheckBoxes>1).to.be.true;
    });

    it('should verify that `Save` button is disabled', () => {
        const isEnabled = $(saveButtonSelector).isEnabled();
        expect(isEnabled).to.be.false;
    });

    it('should verify that `Save` button is disabled when there are checkmarks, but there is no day report', () => {
        //check marks
        for (let i = 0; i <= 6; i++) {
            const selector = $('//input[@id="input-[' + i + ']"]');
            selector.click();
        }
        const isEnabled = $(saveButtonSelector).isEnabled();
        expect(isEnabled).to.be.false;
    });

    it('should verify that `Save` button is disabled when there is the day report, but there are no checkmarks', () => {
        //uncheck marks
        for (let i = 0; i <= 6; i++) {
            const selector = $('//input[@id="input-[' + i + ']"]');
            selector.click();
        }
        $(descriptionFieldSelector).setValue(dayReportText);
        const isEnabled = $(saveButtonSelector).isEnabled();
        expect(isEnabled).to.be.false;
    });

    it('should verify that `Save` button is enabled when there is the day report and checkmarks',  () => {
        //check marks
        for (let i = 0; i <= 6; i++) {
            const selector = $('//input[@id="input-[' + i + ']"]');
            selector.click();
        };
        $(descriptionFieldSelector).setValue(dayReportText);
        const isEnabled = $(saveButtonSelector).isEnabled();
        expect(isEnabled).to.be.true;
    });
});
