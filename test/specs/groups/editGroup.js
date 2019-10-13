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
//    successMessage: '//div[@class="notification notification-success notification-visible"]',

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

describe('Groups - Edit group - Functionality', () => {
    before(() => {
        loginAction(browser);
    });

    it('should verify URL after group is created', () => {
        $(selector.menuGroups).click();
        $(selector.createGroupbutton).click();
        $(selector.groupNameField).setValue(data.groupName);
        $(selector.groupDescriptionField).setValue(data.groupDescription);
        $(selector.accessTypeField).selectByVisibleText(data.accessType);
        $(selector.submitButton).click();
        browser.pause(1000);
        const actualUrl = browser.getUrl();
        expect(actualUrl).equal(url.group);
    });





});