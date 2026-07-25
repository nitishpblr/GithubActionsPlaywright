@Login
Feature: Verify Adactin Hotel Login Page

    @smoke @regression 
    Scenario: Validate Login With Valid Credential
        Given User is on adactin hotel login Page
        When User enters username and password and click on login button
            | nitish123 |
            | 0BQX5U    |
        Then User verify search hotel page is displayed by verifying "Welcome to Adactin Group of Hotels"

    @sanity @regression
    Scenario: Validate Login With Empty Password
        Given User is on adactin hotel login Page
        When User enters username and leaves password as empty field
        Then User verify password error message is displayed "Enter Password"

    @smoke @sanity
    Scenario Outline: Validate Login With Different Set Of Data
        Given User is on adactin hotel login Page
        When User enters "<username>" and "<password>" and click on login button
        Then User verify search hotel page is displayed

        Examples:
            | username  | password  |
            | nitish123 | Hello@123 |
            | usman123  | Hello@123 |





