import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, expect, test } from "@playwright/test"
import BaseClass from "../utils/CommonUtils.js";
import LoginPage from "../pages/LoginPage.js";


let loginPage;

Given('User is on adactin hotel login Page', { timeout: 10000 }, async function () {
    console.log("User is on adactin hotel login Page")
});

When('User enters username and password and click on login button', async function (dataTable) {
    const x = dataTable.raw().flat()
    console.log(x)
    loginPage = new LoginPage(this.page)
    await loginPage.loginToApp(x[0], x[1])
    // await loginPage.loginToApp("nitish123", "0BQX5U")
});

Then('User verify search hotel page is displayed by verifying {string}', async function (searchPageTitleBarMsg) {
    await expect(this.page.locator("//td[contains(text(),'Welcome to Adactin')]")).toHaveText(searchPageTitleBarMsg)
});


When('User enters username and leaves password as empty field', async function () {
    loginPage = new LoginPage(this.page)
    await loginPage.loginToApp("nitish123", "")
});

Then('User verify password error message is displayed {string}', async function (expPasswordErrorMsg) {
    await expect(this.page.locator("#password_span")).toHaveText(expPasswordErrorMsg);
});

When('User enters {string} and {string} and click on login button', async function (username, password) {
    loginPage = new LoginPage(this.page)
    await loginPage.loginToApp(username, password)
});

Then('User verify search hotel page is displayed', async function () {
    console.log(await this.page.locator(".auth_error").textContent())
});