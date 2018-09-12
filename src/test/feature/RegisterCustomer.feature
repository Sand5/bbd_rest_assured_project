Feature: Register a new customer
  In order to register new users to the customer registration
  As a super user of the customer registration system
  I would like to be able enter the details of any new customer and register them

  Background: The super user is on the registration system

    Given I am on the customer register end point

  Scenario: Add a new user to the registration system

    When I send the details the of the new customer
      | FirstName | LastName | UserName | Password | Email          |
      | Simon     | Jones    | sil      | lo       | ps@hotmail.com |

    And  The status code is "201"

    Then The SuccessCode is "OPERATION_SUCCESS"
