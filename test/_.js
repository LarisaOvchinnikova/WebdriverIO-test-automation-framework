import { expect }  from 'chai';
//const loginAction = require('./../../actions/loginAction');
import loginHelpers from './actions/loginAction';
const { baseUrl } = require('./actions/constants');

const url = `${baseUrl}/user/login`;

describe('Login form', () => {
    before (() => {
        loginHelpers.login();
    });


    it('should have correct ', () => {
        const selector = '';
        const element = $(selector);
        const actual = element.getText();
        const expected = '';

        expect(actual).to.equal(expected);
    });

});