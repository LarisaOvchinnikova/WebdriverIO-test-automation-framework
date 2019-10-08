import { expect }  from 'chai';
import { url } from '../../actions/constants';
import loginAction from './../../actions/loginActions';
import { user } from '../../actions/userConstants';

const selector = {
    numberOfDayReports: '//h3/span[@class="badge badge-light"]',
    createDayReportButton: '//a[@qa="create-day-report-button"]',
    diaryRecord: '//div[@qa="description"]',
    saveButton: '//button[@type="submit"]',
    checkBox: '//input[@type="checkbox"]',
    descriptionField: '//textarea[@name="description"]',
    headerH1: '//h1',
    headerH3: '//h3',
};

    const expectedButtonText = 'Create day report';
    const expectedUserPageH1 = `${user.admin.firstName} ${user.admin.lastName}`;
    const expectedDiaryCreateH1 = 'Create day report';
    const expectedDiaryListH1 = 'Daily reports';
    const roles = ['admin', 'student'];
    const headers = ['About', 'Goals', 'Completed Challenges', 'Day reports '];
    const dayReportText = `Today I watched ${Math.trunc(
    Math.random() * 10)} lectures and solved ${Math.trunc(Math.random() * 10)} tasks on codewars. Also I wrote tests.`;

describe('Create day report from User\'s page by clicking button `Create day report`', () => {

    before (() => {
        loginAction(browser);
        browser.pause(1000);
    });
/*
    it('should  verify redirect page URL', () => {
        const actualUrl = browser.getUrl();
        const expectedUrl = `${url.baseUrl}/user/${user.admin.id}/`;
        expect(actualUrl).equal(expectedUrl);
    });
*/
    it('should verify that after login actions it was redirect to user page', function () {
        const actualUserPageH1 = $(selector.headerH1).getText();
        expect(actualH1).to.equa(expectedUserPageH1);
    });

    it('should verify that user\'s page has 4 headers h3', () => {
        const countOfHeaderH3= $$(selector.headerH3).length;
        expect(countOfHeaderH3).to.equal(4);
    });

    it('should verify that header #`${i}` is `${header[i]}',  () => {
       for (let i = 0 ; i < 4; i++){
           const actualH3 = $$(selector.headerH3)[i].getText();
           const expectedH3 = headers[i];
           expect(actualH3).equal(expectedH3);
       }
    });

    it('should verify that initial number of day reports > 0', function () {
        const initialNumber = $(selector.numberOfDayReports).getText();
        expect(initialNumber > 0).to.be.true;
    });

    it ("should verify that button `Create day report` is displayed on user\'s page", () => {
        const buttonIsDisplayed = $(createDayReportButton).isDisplayed();
        expect(buttonIsDisplayed).to.be.true;
    });

    it('should verify that button has correct text', function () {
        const actualButtonText = $(createDayReportButton).getText();
        expect(actualButtonText).to.equal(expectedButtonText);
    });

    it ("should verify that click to button `Create day report` redirect to Create day report` page`", () => {
        $(selector.createDayReportButton).click();
        browser.pause(5000);
        const actualUrl = browser.getUrl();
        expect(actualUrl).to.equal(url.createDayReportUrl);
    });

    it ("should verify that `Create day report` page has correct h1", () => {
        const actualH1 = $(selector.headerH1).getText();
        expect(actualH1).to.equal(expectedDiaryCreateH1);
    });

    it('should verify that `Save` button is-enabled after creating day report',  () => {
        for (let i = 1; i < 12; i++) {
            const selector = $('//input[@id="input-[' + i + ']"]');
            selector.click();
        }
        const descriptionArea = $(selector.descriptionField);
        descriptionArea.setValue(dayReportText);
        const isEnabled = $(selector.saveButton).isEnabled();
        expect(isEnabled).to.be.true;
    });

    it('should verify that click to `Save` button should redirect to `Day reports` page', () => {
        const saveButton = $(selector.saveButton);
        saveButton.click();
        browser.pause(1000);
        const actualUrl = browser.getUrl();
        expect(actualUrl).to.equal(url.diaryUrl);
    });

    it('should verify that `Day reports` page has correct h1', () => {
        const actualH1 = $(selector.headerH1).getText();
        expect(actualH1).to.equal(expectedDiaryListH1);
    });

//перейти на страницу юзера и проверить, что количество записей увеличилось на 1

});

