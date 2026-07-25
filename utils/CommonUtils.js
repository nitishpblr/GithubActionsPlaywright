import { chromium, firefox, webkit } from "@playwright/test"

export default class BaseClass {


    constructor() {
        this.browser = null
        this.context = null
        this.page = null
    }

    async launchBrowser(browserName) {

        switch (browserName) {
            case "CHROMIUM":
                this.browser = await chromium.launch({ headless: false })
                console.log("****chrome browser successfully launched****")
                break;
            case "FIREFOX":
                this.browser = await firefox.launch({ headless: false })
                console.log("****firefox browser successfully launched****")
                break;
            case "WEBKIT":
                this.browser = await webkit.launch({ headless: false })
                console.log("****webkit browser successfully launched****")
                break;
            default:
                throw Error(`Invalid Browser Name: ${browserName}`)
                break;
        }

        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
        return this.page;
    }

    async loadAppURL(url) {
        await this.page.goto(url, { waitUntil: "networkidle" })
    }

    async fillValue(locator, data) {
        if (await this.enabled(locator) && await this.visible(locator)) {
            await locator.fill(data)
        }
    }

    async clickOnElement(locator) {
        await locator.click()
    }

    async closeBrowser() {
        await this.browser.close()
    }

    async closeContext() {
        await this.context.close()
    }

    async closePage() {
        await this.page.close()
    }

    async getPageTitle() {
        let title = await this.page.title()
        return title;
    }

    getPageUrl() {
        return this.page.url()
    }

    async refreshPage() {
        await this.page.reload()
    }

    async takePageScreenshot(filePath) {
        return await this.page.screenshot({ path: filePath })
    }

    async takeFullPageScreenshot(filePath) {
        await this.page.screenshot({ path: filePath, fullPage: true })
    }

    async pageScroll(locator) {
        await locator.scrollIntoViewIfNeeded()
    }

    switchToFrame(locator) {
        return this.page.frameLocator(locator)
    }

    async getElementText(locator) {
        return await locator.textContent()
    }

    async getInputValue(locator) {
        return await locator.inputValue()
    }

    async getAttributeValue(locator, name) {
        return await locator.getAttribute(name)
    }

    async enabled(locator) {
        return await locator.isEnabled()
    }

    async visible(locator) {
        return await locator.isVisible()
    }

    async dragAndDrop(src, tar) {
        await src.dragTo(tar);
    }

    async selectByIndex(locator, indexValue) {
        await locator.selectOption({ index: indexValue })
    }

    async selectByText(locator, labelValue) {
        await locator.selectOption({ label: labelValue })
    }

    async getAllOptions(locator) {
        return await locator.evaluate((select) => Array.from(select.options).map(e => e.label))
    }

    async isMultiple(locator) {
        return await locator.evaluate((select) => select.multiple)
    }



    async elementScreenshot(locator, filePath) {
        await locator.screenshot({ path: filePath })
    }


}