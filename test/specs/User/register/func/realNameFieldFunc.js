import { expect }  from 'chai';
import { baseUrl } from '../../../../actions/constants';

const url = `${baseUrl}/user/register`;

const positiveNames = ["John Johnson", "Johnjohnjohnjoh Johnjohnjohnjoh", "Jo Jo"];
const negativeNames = ["John1 Johnson1", "Johnjohnjohnjohnnn Johnjohnjohnjohnnn", "J J"];
describe("Verify the functionality of Real Name field on Registion page", () => {
    before(() => {
        browser.url(url);
        browser.maximizeWindow();
    });
        positiveNames.forEach(name => {
            it(`Verify that '${name}' is be valid`, () => {
                const realNameField = $('//input[@name="name"]');
                realNameField.setValue(name);
                browser.keys('Tab');
                const hasValidClass = realNameField.getAttribute('class').includes('is-valid');
                expect(hasValidClass).true;
            });
        });
});