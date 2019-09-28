//import {expect} from 'chai';
const expect = require('chai').expect;
import { baseUrl } from './../../../../constants';
import { admin } from './../../userConstants';
const url = `${baseUrl}/user/register`;

describe('User Register page - submit button enabled after filling all fields correctly - functionality', () => {
    before(() => {
        browser.url(url);
        browser.maximizeWindow();

        const nameField = $('//input[@name="name"]');
        const phoneField = $('//input[@name="phone"]');
        const emailField = $('//input[@name="email"]');
        const passwordField = $('//input[@name="password"]');
        const aboutField = $('//textarea[@name="about"]');
        const goalsField = $('//textarea[@name="goals"]');
        const englishLevelField = $('//label[@for="englishLevel"]/../../select');

        nameField.setValue(admin.name);
        phoneField.setValue(admin.phone);
        emailField.setValue(admin.email);
        passwordField.setValue(admin.password);
        aboutField.setValue(admin.about);
        goalsField.setValue(admin.goals);
        englishLevelField.selectByVisibleText('Elementary');

    });





});