import { Before, After } from "@cucumber/cucumber";
import BaseClass from "../utils/CommonUtils.js";

Before({ timeout: 30000 }, async function () {
    console.log("Before...")
    this.base = new BaseClass()
    this.page = await this.base.launchBrowser("CHROMIUM")
    await this.base.loadAppURL("https://adactinhotelapp.com/")
})


After({ timeout: 30000 }, async function (scenario) {
    console.log("After...")
    const screenshot = await this.base.takePageScreenshot(`./report/${scenario.pickle.name}.png`)
    this.attach(screenshot, "image/png");
    await this.base.closePage()
    await this.base.closeContext()
    await this.base.closeBrowser()
})