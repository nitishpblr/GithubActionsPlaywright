import BaseClass from "../utils/CommonUtils.js";

export default class LoginPage extends BaseClass {

    constructor(page) {
        super();
        this.page = page;
        this.txtUserName = this.page.locator("#username")
        this.txtPassword = this.page.locator("#password")
        this.btnLogin = this.page.locator("//input[@value='Login']")
    }


    async enterUserNameAndPassword(username, password) {
        await this.fillValue(this.txtUserName, username)
        await this.fillValue(this.txtPassword, password)
    }

    async clickLoginButton() {
        await this.clickOnElement(this.btnLogin)
    }


    async loginToApp(username, password) {
        await this.enterUserNameAndPassword(username, password)
        await this.clickLoginButton()
    }





}