const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');

const { loginUser, isiProfile } = require('../../helper/printouthelper');

describe('Google Search Test', function () {
    let driver;
    
    before(async function () {
        console.log('ini di dalam before() hook')
        driver = await new Builder().forBrowser('chrome').build();
        loginUser('luki');
    });

    after(async function () {
        console.log('ini di dalam after() hook')
        await driver.quit();
    });

    it('Update Profile sukses', async function () {
        await driver.get('https://www.saucedemo.com');
        const title = await driver.getTitle();

        isiProfile('luki', 'Jl. Raya No. 1', 'Indonesia');
        await driver.sleep(3000);        
    })

    it('Update Profile gagal dengan nama kosong', async function () {
        await driver.get('https://www.google.com');
        const title = await driver.getTitle();

        isiProfile('', 'Jl. Raya No. 1', 'Indonesia');
        await driver.sleep(3000);
    })

    
});
