Feature: Add numbers

    As an User, I want to know the result of the addition of numbers, so that I don't have to calculate it myself.

    Scenario Outline: Add numbers
        Given I am on the calculator page
        When I add <num1> and <num2>
        Then I must see <result> as the result
        Examples:
            | num1 | num2 | result |
            | 10   | 20   | 30     |
            | 58   | 15   | 73     |
            | 100  | 150  | 250    |