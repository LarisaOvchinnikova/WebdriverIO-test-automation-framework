import { expect } from 'chai';
import { url } from './../../actions/constants';
import loginAction from '../../actions/loginActions';

const selector = {
    menuGroups: '//li/a[@qa="groups-link"]',
    h1: '//h1',
    createGroupbutton: '//a[@qa="create-group-button"]',
    groupListItem: '//div[@qa="group-list-item"]',
    submitButton: '//button[@type="submit"]',
    groupNameField: '//input[@name="name"]',
    groupDescriptionField: '//input[@name="description"]',
    accessTypeField: '//select[@name="accessType"]',
    successMessage: '//div[@class="notification notification-success notification-visible"]',

};
const expected = {
    h1Groups: 'Groups',
    h1CreateGroup: 'Create new Group',
    successMessageText: 'Group created\n×',
};
const data = {
    groupName: 'Codewars gamers',
    groupDescription: 'Group for those who like to think',
    accessType: 'All',
};

let numberOfGroups;

describe('Groups - Create group - Functionality', () => {
    before(() => {
        loginAction(browser);
    });

    it('should verify that click to `Groups` in main menu should redirect to `Groups` page', () => {
        $(selector.menuGroups).click();
        const actualUrl = browser.getUrl();
        expect(actualUrl).to.equal(url.group);
    });

    it('should verify URL after clicking on `Create new group` button', () => {
        $(selector.createGroupbutton).click();
        const actualUrl = browser.getUrl();
        expect(actualUrl).equal(url.createGroup);
    });

    it('should verify that `Create` button is enabled when required fields are filled', () => {
        $(selector.groupNameField).setValue(data.groupName);
        $(selector.groupDescriptionField).setValue(data.groupDescription);
        $(selector.accessTypeField).selectByVisibleText(data.accessType);
        expect($(selector.submitButton).isEnabled()).to.be.true;
    });

    it('should verify URL after clicking on `Create` button', () => {
        $(selector.submitButton).click();
        browser.pause(1000);
        const actualUrl = browser.getUrl();
        expect(actualUrl).equal(url.group);
    });



});