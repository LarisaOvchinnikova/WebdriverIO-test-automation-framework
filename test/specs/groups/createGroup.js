import { expect } from 'chai';
import { user } from './../../actions/userConstants';
import { url } from './../../actions/constants';
import loginAction from '../../actions/loginActions';

describe('Diary - Func', () => {
    before(() => {
        browser.maximizeWindow();
        loginAction(browser);
    });


});