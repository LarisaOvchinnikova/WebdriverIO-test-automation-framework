function loginAction(browser) {
    const emailField = $('//input[@name="email"]');
    const passwordField = $('//input[@name="password"]');
    const button = $('//button[@type="submit"]');

    const EMAIL = 'larisa12345@gmail.com';
    const PASSWORD = 'qwerty';
    emailField.setValue(EMAIL);
    passwordField.setValue(PASSWORD);
    button.click();
    //browser.pause(1000);
}

module.exports =  {
    loginAction
};