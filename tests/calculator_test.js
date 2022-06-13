const assert = require('assert');

Feature('Calculator Tests');

Scenario('Add 2 numbers', async ({ I }) => {
    const num1 = 5;
    const num2 = 2;
    I.amOnPage('/');
    I.seeElement(`//button[text() = '${num1}']`);
    I.seeElement(`//button[text() = '${num2}']`);
    I.seeElement(`//button[text() = '+']`);
    I.seeElement(`//button[text() = '=']`);
    I.click(`//button[text() = '${num1}']`);
    I.click(`//button[text() = '+']`);
    I.click(`//button[text() = '${num2}']`);
    I.click(`//button[text() = '=']`);
    let result = await I.grabTextFrom('//div[contains(@class, \'component-display\')]');
    assert.equal(num1 + num2, result);
});
