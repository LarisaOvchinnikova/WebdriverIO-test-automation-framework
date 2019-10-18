import { expect } from 'chai';
import { url } from './../constants';
import loginAction from './../user/_actions/loginAction';
//import flashCardGroupGetAll from './_actions/flashCardGroupGetAll';

const selector = {
    menuCards: '//li/a[@qa="cards-link"]',
    h1: '//h1',
    createNewFlashGroupButton: '//a[@class="btn btn-secondary"]',
    flashGroupName: '//h4[@qa="name"]',
    groupNameField: '//input[@name="name"]',
    groupDescriptionField: '//input[@name="description"]',
    groupDescription: '//div[@qa="description"]',
    createButton: '//button[@class="btn btn-primary"]',
    successMessage: '//div[@class="notification notification-success notification-visible"]',
    editButton: '//a[@class="edit"]',
};

const expected = {
    h1Cards: 'FlashCards',
    buttonText: 'Create new FlashGroup',
    h1CreateNewFlashGroup: 'Create new Flash Group',
};

const data = {
    flashCardGroupName: 'QA',
    flashCardGroupDescription: 'common questions',
};

//const token = process.env.TOKEN_ADMIN;
//let allGroups;
let numberOfFlashGroups;

describe('Cards - Create FlashCardGroup - Functionality', () => {
    before(() => {
        loginAction(browser);
    });
    /*
    it('should get all FlasfCardGroups throw API amd verify that is array', async () => {
      allGroups = await flashCardGroupGetAll(token);
      expect(allGroups).to.be.an('array');
    });
  */
    it('should verify that `Cards` item is displayed in main menu', () => {
        $(selector.menuCards).waitForDisplayed(1000);
        const cardsIsDisplayed = $(selector.menuCards).isDisplayed();
        expect(cardsIsDisplayed).to.be.true;
    });

    it('should verify that click to `Cards` in main menu should redirect to `FlashCards` page', () => {
        $(selector.menuCards).click();
        const actualUrl = browser.getUrl();
        expect(actualUrl).to.equal(url.card);
    });
});