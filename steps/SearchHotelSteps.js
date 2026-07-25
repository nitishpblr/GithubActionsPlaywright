import { Given, When, Then } from "@cucumber/cucumber";
import SearchHotel from "../pages/SearchPage.js";
import { expect } from "@playwright/test";

let searchPage;

When('User select {string} ,{string} ,{string},{string} and click on search button', async function (location, hotels, roomType, noOfRooms) {
    searchPage = new SearchHotel(this.page);
    await searchPage.searchHotelWithValidDetails(location, hotels, roomType, noOfRooms)
});

Then('User verify select hotel page is displayed {string}', async function (selectMsg) {
    console.log(selectMsg)
    await expect(this.page.locator("//td[text()='Select Hotel ']")).toHaveText(selectMsg)
});


When('User click on search button', async function () {
    searchPage = new SearchHotel(this.page);
    await searchPage.clickSearchButton()
});

Then('User verify location error message {string} is displayed', async function (locationErrorMsg) {
    console.log(locationErrorMsg)
    await expect(this.page.locator("#location_span")).toHaveText(locationErrorMsg)
});