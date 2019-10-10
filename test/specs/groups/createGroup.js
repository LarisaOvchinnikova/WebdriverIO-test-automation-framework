import { expect } from 'chai';
//import { user } from './../../actions/userConstants';
import { url } from './../../actions/constants';
import loginAction from '../../actions/loginActions';

const selector = {
    menuGroups: '//li/a[@qa="groups-link"]',
    h1: '//h1',
};
const expected ={
    h1: 'Groups',
};

describe('Groups - Create group - Functionality', () => {
    before(() => {
        browser.maximizeWindow();
        loginAction(browser);
    });

    it('should verify that `Groups` item is displayed in main menu', () => {
        const groupsIsDisplayed = $(selector.menuGroups).isDisplayed();
        expect(groupsIsDisplayed).to.be.true;
    });

    it('should verify that click to `Groups` in main menu should redirect to `Groups` page', () => {
        $(selector.menuGroups).click();
        const actualUrl = browser.getUrl();
        expect(actualUrl).to.equal(url.groupUrl);
    });

    it('should verify that `Groups` page has correct h1', () => {
        const actualH1Text = $(selector.h1).getText();
        expect(actualH1Text).to.equal(expected.h1);
    });

});