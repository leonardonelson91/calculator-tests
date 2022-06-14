const assert = require('assert');
const { I, calculatorPage } = inject();

Feature('Calculator Tests');

Before(() => {
    calculatorPage.isLoaded();
});

Scenario('Add 2 numbers', async ({ I }) => {
    calculatorPage.add();
    const result = await calculatorPage.getOperationResult();
    assert.equal(7, result);
});
