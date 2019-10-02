import { url } from '../constants';
import { user } from './../specs/User/userConstants';

export default function loginAction(browser) {
    browser.url(url.loginUrl);

    const emailField = $('//input[@name="email"]');
    const passwordField = $('//input[@name="password"]');
    const button = $('//button[@type="submit"]');

    emailField.setValue(user.admin.email);
    passwordField.setValue(user.admin.password);

    button.click();
    browser.pause(1000);
}