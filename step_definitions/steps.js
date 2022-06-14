const assert = require('assert');
const { calculatorPage } = inject();

Given('I am on the calculator page', () => {
  calculatorPage.isLoaded();
});

When('I add two numbers', () => {
  calculatorPage.add();
});

Then('I must see the result of the operation', async () => {
  calculatorPage.add();
  const result = await calculatorPage.getOperationResult();
  assert.equal(7, result);
});
