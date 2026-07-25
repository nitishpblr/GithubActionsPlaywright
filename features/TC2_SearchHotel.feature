@SearchHotel
Feature: Verify Adactin Search Hotel Page

    @smoke @regression
    Scenario Outline: Validate Search Hotel With Valid Data
        Given User is on adactin hotel login Page
        When User enters username and password and click on login button
            | nitish123 |
            | 0BQX5U    |
        Then User verify search hotel page is displayed by verifying "Welcome to Adactin Group of Hotels"
        When User select "<location>" ,"<hotels>" ,"<roomType>","<numberOfRooms>" and click on search button
        Then User verify select hotel page is displayed "Select Hotel"

        Examples:
            | location | hotels         | roomType | numberOfRooms |
            | Sydney   | Hotel Sunshine | Standard | 2 - Two       |

    @sanity @regression
    Scenario: Validate Search Hotel With empty fields
        Given User is on adactin hotel login Page
        When User enters username and password and click on login button
            | nitish123 |
            | 0BQX5U    |
        Then User verify search hotel page is displayed by verifying "Welcome to Adactin Group of Hotels"
        When User click on search button
        Then User verify location error message "Please Select a Location" is displayed
