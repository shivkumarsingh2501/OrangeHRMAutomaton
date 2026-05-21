Feature: OrangeHRM Login Functionality
  Background:
    Given user navigates to login page

    Scenario: Valid Login
        When user enters valid username and password
        And clicks on login button
        Then user should see dashboard
    @negative
    Scenario: Login with invalid password
        When user enters username "Admin" and password "wrong123"
        And clicks on login button
        Then error message "Invalid credentials" should be displayed
    @negative
    Scenario: Login with empty credentials
        When user enters username "" and password ""
        And clicks on login button
        Then error message "Required" should be displayed

    @security
    Scenario: Login attempt with SQL injection
        When user enters username "' OR '1'='1" and password "' OR '1'='1"
        And clicks on login button
        Then error message "Invalid credentials" should be displayed

    @boundary
    Scenario Outline: Multiple login attempts with different data
        When user enters username "<username>" and password "<password>"
        And clicks on login button
        Then login result should be "<result>"

        Examples:
            | username | password | result  |
            | Admin    | admin123 | success |
            | Admin    | wrong    | failure |
            | invalid  | admin123 | failure |