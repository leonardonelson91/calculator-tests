const { I } = inject();

module.exports = {
    fields: {
        num2Button: "//button[text() = '2']",
        num5Button: "//button[text() = '5']",
        plusButton: "//button[text() = '+']",
        equalButton: "//button[text() = '=']",
        resultDisplay: "//div[contains(@class, 'component-display')]"
    },

    add() {
        I.click(this.fields.num2Button);
        I.click(this.fields.plusButton);
        I.click(this.fields.num5Button);
        I.click(this.fields.equalButton);
    },

    getOperationResult() {
        return I.grabTextFrom(this.fields.resultDisplay);
    },

    isLoaded() {
        I.amOnPage('/');
        I.seeElement(this.fields.num2Button);
        I.seeElement(this.fields.num5Button);
        I.seeElement(this.fields.plusButton);
        I.seeElement(this.fields.equalButton);
    }
};
