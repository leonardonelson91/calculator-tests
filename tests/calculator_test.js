const assert = require('assert');
const { I, calculatorPage } = inject();

Feature('Calculator Tests');

Before(() => {
    calculatorPage.isLoaded();
});

Scenario('Add 2 numbers', async () => {
    calculatorPage.add(10, 20);
    const result = await calculatorPage.getOperationResult();
    assert.equal(30, result);
});
