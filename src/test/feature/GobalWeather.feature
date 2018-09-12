Feature:Get a countries weather details
  In order to see what weather status is for country
  As a user of the weather app
  I want to be able to search for a country current weather status

  Background: The user has navigated to the weather app

    Given I am on the country search endpoint

  Scenario Outline: Search for a given city weather details

    When I enter_a "<City>"
    Then the correct "<City>" details are returned
    Examples:
      | City  |
      | Leeds |


  Scenario: Search for a valid city

    When I enter a city
      | London |
    Then The a status code of "200" is returned


