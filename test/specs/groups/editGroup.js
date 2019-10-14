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
    groupNames: '//h4/a',
    editButton: '//a[@qa="edit-button"]',
    editGroupDescription: '//textarea[@name="description"]',
    slackWebhook: '//input[@name="slackWebhook"]',
    searchQuiz: '//input[@name="searchQuiz"]',
    successMessage: '//div[@class="notification notification-success notification-visible"]',
    descriptionButton: '//a[contains(text(),"Description")]',
    descriptionText: '//div/p',
    lecturesButton: '//a[contains(text(),"Lectures")]',
    createLectureButton: '//a[@qa="create-lecture-button"]',
    lectureName: '//input[@name="name"]',
    youtubeLink: '//input[@name="video"]',
    date: '//input[@placeholder="Date"]',
    checkbox: '//label[@for="Active"]',
    lectureDescription: '//textarea[@name="description"]',

};
const expected = {
   // h1Groups: 'Groups',
   // h1CreateGroup: 'Create new Group',
   // successMessageText: 'Group created\n×',
    editGroupH1: 'Edit Group',
    createLectureH1: 'Create lecture',
};
const data = {
    groupName: 'Codewars gamers',
    groupDescription: 'Group for those who like to think',
    accessType: 'All',
    newGroupName: 'Codewars winners',
    newGroupDescription: 'Group for those who like to think and win.',
    newAccessType: 'Members',
    lectureLink: 'https://www.youtube.com/watch?v=pPJOen-1-mw',
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

    it('should verify that new group is displayed in the list of groups', () => {
        browser.pause(1000);
        const lastGroup = $$(selector.groupListItem)[0];
        const lastGroupText = lastGroup.getText();
        expect(lastGroupText.includes(data.groupName)).to.be.true;
    });

    it('should verify that clicking on group name in the list of groups redirect to group`s page', () => {
        const lastGroupName = $$(selector.groupNames)[0];
        lastGroupName.click();
        browser.pause(1000);
        const actualH1 = $(selector.h1).getText();
        const expectedH1 = `Group ${data.groupName}`;
        expect(actualH1).equal(expectedH1);
    });

    it('should verify that clicking on `Edit`button redirect to `Edit Group` page', () => {
        $(selector.editButton).click();
        browser.pause(1000);
        const actualH1 = $(selector.h1).getText();
        expect(actualH1).equal(expected.editGroupH1);
    });

    it('should verify that `Group name` field is displayed on `Edit Group` page', () => {
        expect($(selector.groupNameField).isDisplayed()).to.be.true;
    });

    it('should verify that `Group description` field is displayed on `Edit Group` page', () => {
        expect($(selector.editGroupDescription).isDisplayed()).to.be.true;
    });

    it('should verify that `Access type` field is displayed on `Edit Group` page', () => {
        expect($(selector.accessTypeField).isDisplayed()).to.be.true;
    });

    it('should verify that `Slack Webhook slug` field is displayed on `Edit Group` page', () => {
        expect($(selector.slackWebhook).isDisplayed()).to.be.true;
    });

    it('should verify that `Assign quiz` field is displayed on `Edit Group` page', () => {
        expect($(selector.searchQuiz).isDisplayed()).to.be.true;
    });

    it('should verify that after editing and clicking on save button will redirect to `Groups` page', () => {
        $(selector.groupNameField).setValue(data.newGroupName);
        $(selector.editGroupDescription).setValue(data.newGroupDescription);
        $(selector.accessTypeField).selectByVisibleText(data.newAccessType);
        $(selector.submitButton).click();
        browser.pause(1000);
        const actualUrl = browser.getUrl();
        expect(actualUrl).equal('https://stage.pasv.us/groups');
    });

    it('should verify that success message is displayed', () => {
        expect($(selector.successMessage).isDisplayed()).to.be.true;
    });

    it('should verify that name of group was changed', () => {
        $(selector.menuGroups).click();
        browser.pause(1000);
        const lastGroup = $$(selector.groupListItem)[0];
        const lastGroupText = lastGroup.getText();
        expect(lastGroupText.includes(data.newGroupName)).to.be.true;
    });

    it('should verify that Description on group page is correct', () => {
        const lastGroupName = $$(selector.groupNames)[0];
        lastGroupName.click();
        browser.pause(1000);
        $(selector.descriptionButton).click();
        const actualDescriptionText = $(selector.descriptionText).getText();
        expect(actualDescriptionText).include(data.newGroupDescription)
    });

    // https://app.pasv.us/group/5bf301f5b17cc43d5332d75a/lecture/5bf316dbb17cc43d5332d76a

    it('should verify that after click on `Lectures` item button `Create lecture` is displayed', () => {
        $(selector.lecturesButton).click();
        browser.pause(1000);
        expect($(selector.createLectureButton).isDisplayed()).to.be.true;
    });

    it('should verify that click on `Create lecture` button redirect to `Create lecture` page', () => {
        $(selector.createLectureButton).click();
        browser.pause(1000);
        const actualH1 = $$(selector.h1)[1].getText();
        expect(actualH1).equal(expected.createLectureH1);
    });

    it('should verify that `Lecture name` field is displayed on `Create lecture` page', () => {
        expect($(selector.lectureName).isDisplayed()).to.be.true;
    });

    it('should verify that `YouTube link` field is displayed on `Create lecture` page', () => {
        expect($(selector.youtubeLink).isDisplayed()).to.be.true;
    });

    it('should verify that `Date` field is displayed on `Create lecture` page', () => {
        expect($(selector.date).isDisplayed()).to.be.true;
    });

    it('should verify that checkbox `Active` is displayed on `Create lecture` page', () => {
        expect($(selector.checkbox).isDisplayed()).to.be.true;
    });

    it('should verify that `Lecture description` textarea is displayed on `Create lecture` page', () => {
        expect($(selector.lectureDescription).isDisplayed()).to.be.true;
    });

    it('should verify that `Save` button is displayed on `Create lecture` page', () => {
        expect($(selector.submitButton).isDisplayed()).to.be.true;
    });

    it('should verify that `Save` button is disabled when fields are empty', () => {
        expect($(selector.submitButton).getAttribute('class')).includes('disabled');
    });

    it('should verify that `Lecture description` textarea is displayed on `Create lecture` page', () => {
        expect($(selector.lectureDescription).isDisplayed()).to.be.true;
    });
});


