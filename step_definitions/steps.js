const assert = require('assert');
const { calculatorPage } = inject();

Given('I am on the calculator page', () => {
  calculatorPage.isLoaded();
});

When('I add {int} and {int}', (num1, num2) => {
  calculatorPage.add(num1, num2);
});

Then('I must see {int} as the result', async (result) => {
  const actualResult = await calculatorPage.getOperationResult();
  assert.equal(actualResult, result);
});
