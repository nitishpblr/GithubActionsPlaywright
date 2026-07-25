import test, { chromium } from "@playwright/test";
import getExcelData from "../utils/ExcelUtils.js";
import BaseClass from "../utils/CommonUtils.js";
import LoginPage from "../pages/LoginPage.js";

test('browser launch', async () => {

    const jsonData = getExcelData("login")
    let base = new BaseClass()
    let page = await base.launchBrowser("CHROMIUM")
    await base.loadAppURL("https://adactinhotelapp.com/index.php")
    let loginPage = new LoginPage(page)
    await loginPage.loginToApp(jsonData[0].UserName, jsonData[0].Password)
    await base.closeBrowser()

})