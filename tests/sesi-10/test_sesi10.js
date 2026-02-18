const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

describe('Transaction Test', function () {
    let driver;

    after(async function () {
        
    })

    it('TC1', async function () {
        options = new chrome.Options();
        options.addArguments("--headless");
        options.addArguments("--incognito");

        driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

        // driver = await new Builder().forBrowser('chrome').build();

        await driver.get('https://www.saucedemo.com');
        const title = await driver.getTitle();

        await driver.sleep(3000);
        await driver.quit()
    })

    it('TC11', async function () {
        options = new chrome.Options();
        options.addArguments("--headless");
        options.addArguments("--incognito");

        driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

        // driver = await new Builder().forBrowser('chrome').build();

        await driver.get('https://www.saucedemo.com');
        const title = await driver.getTitle();

        await driver.sleep(3000);
        await driver.quit()
    })

    it.skip('TC2', async function () {
        options = new firefox.Options()
        options.addArguments("--headless");

        driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();

        // driver = await new Builder().forBrowser('chrome').build();

        await driver.get('https://www.saucedemo.com');
        const title = await driver.getTitle();

        await driver.quit()
    })

    it.skip('TC3', async function () {
        options = new firefox.Options()
        options.addArguments("--headless");

        driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();

        // driver = await new Builder().forBrowser('chrome').build();

        await driver.get('https://www.saucedemo.com');
        const title = await driver.getTitle();

        await driver.quit()
    })

    it('TC4', async function () {
        options = new firefox.Options()
        options.addArguments("--headless");

        driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();

        // driver = await new Builder().forBrowser('chrome').build();

        await driver.get('https://www.saucedemo.com');
        const title = await driver.getTitle();

        await driver.quit()
    })
});
