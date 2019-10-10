import { expect } from 'chai';
//import { user } from './../../actions/userConstants';
import { url } from './../../actions/constants';
import loginAction from '../../actions/loginActions';

const selector = {
    menuGroups: '//li/a[@qa="groups-link"]',
    h1: '//h1',
    createGroupbutton: '//a[@qa="create-group-button"]',
    h4: '//h4',
    submitButton: '//button[@type="submit"]',
};
const expected ={
    h1Groups: 'Groups',
    h1CreateGroup: 'Create new Group',
};

let numberOfGroups;

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
        expect(actualH1Text).to.equal(expected.h1Groups);
    });

    it('should verify that button `Create new Group` is displayed', () => {
        expect($(selector.createGroupbutton).isDisplayed()).to.be.true;
    });

    it('should verify that count of existing groups > 0', () => {
        numberOfGroups = $$(selector.h4).length;
        expect(numberOfGroups > 0).to.be.true;
    });

    it('should verify URL after clicking on `Create new group` button', () => {
        $(selector.createGroupbutton).click();
        const actualUrl = browser.getUrl();
        expect(actualUrl).equal(url.createGroupUrl);
    });

    it('should verify h1 on the page `Create new Group`', () => {
        const actualH1 = $(selector.h1).getText();
        expect(actualH1).equal(expected.h1CreateGroup);
    });

    it('should verify that `Create` button is disabled when fields are empty', () => {
        expect($(selector.submitButton).isEnabled()).to.be,false;
    });

});