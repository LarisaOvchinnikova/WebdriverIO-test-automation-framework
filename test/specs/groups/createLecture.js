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
    lectureName: 'Solving four tasks',
    lectureLink: 'https://www.youtube.com/watch?v=pPJOen-1-mw',
    lectureDescription: 'Analysis of the solution of four codewars tasks',
};

let day = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();
let date = month + '.' + day + '.' + year;

describe('Groups - Edit group - Functionality', () => {
    before(() => {
        loginAction(browser);
    });


    it('should verify that clicking on group name in the list of groups redirect to group`s page', () => {
        const lastGroupName = $$(selector.groupNames)[0];
        lastGroupName.click();
        browser.pause(1000);
        const actualH1 = $(selector.h1).getText();
        const expectedH1 = `Group ${data.groupName}`;
        expect(actualH1).equal(expectedH1);
    });

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

    it('should verify that `Save` button is enabled after filling in the required fields', () => {
        $(selector.lectureName).setValue(data.lectureName);
        $(selector.youtubeLink).setValue(data.lectureLink);
        $(selector.date).setValue(date);
        browser.keys('Tab');
        $(selector.lectureDescription).setValue(data.lectureDescription);
        browser.pause(1000);
        const isDisabled = $(selector.submitButton).getAttribute('class').includes('disabled');
        expect(isDisabled).to.be.false;
    });

    it('should verify that after click on `Save` button successful message displayed', () => {
        $(selector.submitButton).click();
        browser.pause(2000);
        expect($(selector.successMessage).isDisplayed()).to.be.true;
    });

    it('should verify that successful message text is correct', () => {
        const actualMessageText = $(selector.successMessage).getText();
        expect(actualMessageText.includes('Lecture created')).to.be.true;
    });
});


