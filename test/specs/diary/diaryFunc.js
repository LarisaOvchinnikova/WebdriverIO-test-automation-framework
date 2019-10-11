import { expect } from 'chai';
import { url } from './../../actions/constants';
import loginAction from '../../actions/loginActions';
import diaryGetAll from './_actions/diaryGetAll';

const selector = {
    menuDiary: '//li/a[@qa="diary-link"]',
    header: '//h1',
    diaryRecord: '//div[@qa="description"]',
    createDayReportButton: '//a[@qa="create-day-report-button"]',
    saveButton: '//button[@type="submit"]',
    checkBox: '//input[@type="checkbox"]',
    descriptionField: '//textarea[@name="description"]',
};

const diaryH1 = 'Daily reports';
const createDiaryH1 = 'Create day report';
const dayReportShortText = 'Today I wrote tests.';
const dayReportText = 'Today I watched 2 lectures and solved 3 tasks on codewars. Also I wrote tests.';

let countOfCheckBoxes;
let allDiaries;
let initialDiaryCount;

describe('Diary - Functionality', () => {
    before (() => {
        loginAction(browser);
    });

    it('should get all diaries from DB and store initial count', async () => {
        const allDiaries = await diaryGetAll(process.env.TOKEN_ADMIN);
        initialDiaryCount = allDiaries.length;
    });

    it('should verify that `Diary`item is displayed in main menu', () => {
      const diaryIsDisplayed = $(selector.menuDiary).isDisplayed();
      expect(diaryIsDisplayed).to.be.true;
    });

    it('should verify that click to `Diary` in main menu should redirect to `Daily reports` page', () => {
        $(selector.menuDiary).click();
        const actualUrl = browser.getUrl();
        expect(actualUrl).to.equal(url.diaryUrl);
    });

    it('should verify that `Daily reports` page has correct h1', () => {
        const actualH1Text = $(selector.header).getText();
        expect(actualH1Text).to.equal(diaryH1);
    });

    it('should verify that `Day reports` page has at least one record',  () => {
        browser.pause(1000);
        const countOfRecords = $$(selector.diaryRecord).length;
        expect(countOfRecords > 0).to.be.true;
    });

    it('should verify that click to `Create day report` button redirect to `Create day report` page', () => {
        $(selector.createDayReportButton).click();
        const actualUrl = browser.getUrl();
        expect(actualUrl).to.equal(url.createDayReportUrl);
    });

    it('should verify that `Create day report` page has correct h1', () => {
        const actualh1Text = $(selector.header).getText();
        expect(actualh1Text).to.equal(createDiaryH1);
    });

    it('should verify that there are checkboxes on `Create day report` page',  () => {
        countOfCheckBoxes = $$(selector.checkBox).length;
        expect(countOfCheckBoxes).equal(12);
    });

    it('should verify that `Save` button is disabled', () => {
        const isEnabled = $(selector.saveButton).isEnabled();
        expect(isEnabled).to.be.false;
    });

    it('should verify that `Save` button is disabled when there is the day report, but there are no checkmarks', () => {
        const descriptionArea = $(selector.descriptionField);
        descriptionArea.setValue(dayReportText);
        const isEnabled = $(selector.saveButton).isEnabled();
        expect(isEnabled).to.be.false;
    });

    it('should verify that `Save` button is disabled when there are checkmarks, but there is no day report', () => {
        //check marks
        for (let i = 0; i < countOfCheckBoxes; i++) {
            const selector = $('//input[@id="input-[' + i + ']"]');
            selector.click();
        }
        const descriptionArea = $(selector.descriptionField);
        descriptionArea.setValue('');
        const isEnabled = $(selector.saveButton).isEnabled();
        expect(isEnabled).to.be.false;
    });

    it('should verify that `Save` button is disabled when there are checkmarks, but day report is < 30 characters', () => {
        const descriptionArea = $(selector.descriptionField);
        descriptionArea.setValue(dayReportShortText);
        const isEnabled = $(selector.saveButton).isEnabled();
        expect(isEnabled).to.be.false;
    });

    it('should verify that description area is-invalid when day report length < 30', () => {
        const descriptionArea = $(selector.descriptionField);
        expect(descriptionArea.getAttribute('class')).includes('is-invalid');
    });

    it('should verify that `Save` button is enabled when there is a correct report and checkmarks',  () => {
        const descriptionArea = $(selector.descriptionField);
        descriptionArea.setValue(dayReportText);
        const isEnabled = $(selector.saveButton).isEnabled();
        expect(isEnabled).to.be.true;
    });

    it('should verify that description area is-valid when day report length >= 30', () => {
        const descriptionArea = $(selector.descriptionField);
        expect(descriptionArea.getAttribute('class')).includes('is-valid');
    });

    it('should verify that click to `Save` button should redirect to `Day reports` page', () => {
        const saveButton = $(selector.saveButton);
        saveButton.click();
        browser.pause(1000);
        const actualUrl = browser.getUrl();
        expect(actualUrl).to.equal(url.diaryUrl);
    });

    it('should verify that day report appeared on `Day reports` page', function () {
        const lastDiaryRecord = $$(selector.diaryRecord)[0].getText();
        expect(lastDiaryRecord).to.equal(dayReportText)
    });
});
