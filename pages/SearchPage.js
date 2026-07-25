import BaseClass from "../utils/CommonUtils.js";

export default class SearchHotel extends BaseClass {

    constructor(page) {
        super();
        this.page = page;
        this.ddnLocation = this.page.locator("#location");
        this.ddnHotels = this.page.locator("#hotels");
        this.ddnRoomType = this.page.locator("#room_type");
        this.ddnNoOfRooms = this.page.locator("#room_nos");
        this.btnSearch = this.page.locator("#Submit");
        this.locationErrorMsg = this.page.locator("#location_span");
        this.homePageMsg = this.page.locator("//td[contains(text(),'Adactin Group')]");
    }

    async searchHotelWithValidDetails(location, hotels, roomType, noOfRooms) {
        await this.selectByText(this.ddnLocation, location)
        await this.selectByText(this.ddnHotels, hotels)
        await this.selectByText(this.ddnRoomType, roomType)
        await this.selectByText(this.ddnNoOfRooms, noOfRooms)
        await this.clickSearchButton();
    }

    async clickSearchButton() {
        await this.clickOnElement(this.btnSearch);
    }

    async getLocationErrorMsg() {
        return await this.getElementText(this.locationErrorMsg);
    }



}