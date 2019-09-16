import { expect }  from 'chai';
import loginHelpers from './loginAction';

describe('Create day report page', () => {
    before (() => {
            browser.url('https://stage.pasv.us/user/login');
        });

    it('should login', () => {
        //loginAction(browser);
        loginHelpers.login();
    });

    it ("should have button Create day report", () => {
        const selector = $('//a[@class=\'btn btn-secondary\']');
        const actual = selector.getText();
        const expected = 'Create day report';
        expect(actual).to.equal(expected);
    });

    it ("should click button Create day report", () => {
        const selector = $('//a[@class=\'btn btn-secondary\']');
        selector.click();
        browser.pause(5000);
        const header = $('//h1');
        const actual = header.getText();
        const expected = 'Create day report';
        expect(actual).to.equal(expected);
    });

    it('should check marks in checkbox', function () {
        for (let i = 0; i <= 6; i++) {
            const selector = $('//input[@id=\'input-[' + i + ']\']');
            selector.click();
            browser.pause(500);
        }
    });

    it('should uncheck marks 0-1 in checkbox', function () {
        for (let i = 0; i <= 1; i++) {
            const selector = $('//input[@id=\'input-[' + i + ']\']');
            selector.click();
            browser.pause(500);
        }
    });

    it('should fill diary field ', function () {
        const diaryField = $('//textarea[@name=\'description\']');
        const buttonSave = $('//button[@class=\'btn btn-primary disabled\']');
        const reportText = 'Today I solved 3 tasks on codewars and watched 2 lectures.';
        diaryField.setValue(reportText);
        buttonSave.click();
        browser.pause(5000);
    });

    browser.url('https://stage.pasv.us/diary');

    it('should redirect to Day reports page', () => {
        const h1 = $('//h1').getText();
        expect(h1).to.equal('Day reports');
    });

    it('should have active link Diary', function () {
        const selector = $('//a[@class=\'nav-link active\']');
        const actual = selector.getText();
        const expected = 'Diary';
        expect(actual).to.equal(expected);
    });
});

