Feature: Add numbers

    As an User, I want to know the result of the addition of numbers, so that I don't have to calculate it myself.

    Scenario: Add two numbers
        Given I am on the calculator page
        When I add two numbers
        Then I must see the result of the operation