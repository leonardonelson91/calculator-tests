Feature: Add numbers

    As an User, I want to know the result of the addition of numbers, so that I don't have to calculate it myself.

    Scenario: Add two numbers
        Given I am on the calculator page
        When I add 10 and 20
        Then I must see 30 as the result