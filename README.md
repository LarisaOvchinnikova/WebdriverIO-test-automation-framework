### Test automation with WebdriverIO
#### Setup your project
Before installing dependencies, we need to initialize an empty NPM project (this will allow us to the cli to install needed dependencies to our local project).

To do this, run:
```
mkdir webdriverio-test && cd webdriverio-test
npm init -y
```
The -y will answer 'yes' to all the prompts, giving us a standard NPM project. Feel free to omit the -y if you'd like to specify your own project details.

#### Install WebdriverIO CLI
If you want to use WebdriverIO in your project for integration testing we recommend using the test runner because it comes with a lot of useful features that makes your life easier. With WebdriverIO v5 and up, the testrunner has moved into the @wdio/cli NPM package.

Now we need to install the cli. Do that by running:
```
npm i --save-dev @wdio/cli
```
#### Generate Configuration File
We'll next want to generate a configuration file that stores all of our WebdriverIO settings. To do that just run the configuration utility:
```
./node_modules/.bin/wdio config
```
A question interface pops up. It will help to create the config easy and fast. If you are not sure what to answer follow this answers:

Q: Where should your tests be launched?
A: local

Q: Where is your automation backend located?
A: On my local machine

Q: Which framework do you want to use?
A: mocha

Q: Do you want to run WebdriverIO commands synchronous or asynchronous?
A: sync (just press enter, you can also run commands async and handle promises by yourself but for the sake of simplicity let's run them synchronously)

Q: Where are your test specs located?
A: ./test/specs/*/.js (just press enter)

Q: Which reporter do you want to use?
A: dot (just press space and enter)

Q: Do you want to add a service to your test setup?
A: choose either selenium-standalone (if you have JDK installed) or just chromedriver

Q: What is the base url?
A: http://localhost (just press enter)

That's it! The configurator now installs all required packages for you and creates a config file with the name wdio.conf.js. As we're using Geckodriver, we need to override the default path (which uses the Selenium's default of /wd/hub). Then, we'll be ready to create your first spec file (test file).

#### Create Spec Files
Now it's time to create our test file. We're going to store all of our files in a new folder. Create the test folder like this:
```
mkdir -p ./test/specs
```
Create a new file in that folder (we'll call it basic.js):

```
touch ./test/specs/basic.js
```
Open that file up and add the following code to it:
```javascript
const assert = require('assert');

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io');
        const title = browser.getTitle();
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
    });
});
```
NOTE: if you decided to use async instead of sync mode don't forget to add async/await like this:
```javascript
const assert = require('assert');

describe('webdriver.io page', () => {
    it('should have the right title', async () => {
        await browser.url('https://webdriver.io');
        const title = await browser.getTitle();
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
    });
});
```
Once added, save, then return to your terminal.

#### Kick Off Testrunner
The last step is to execute the test runner. To do so just run:
```
./node_modules/.bin/wdio wdio.conf.js
```
##### Hurray! The test should pass and you can start writing integration tests with WebdriverIO.