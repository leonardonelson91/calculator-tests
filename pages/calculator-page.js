const { I } = inject();

module.exports = {
    fields: {
        numButton: (num) => `//button[text() = '${num}']`,
        plusButton: "//button[text() = '+']",
        equalButton: "//button[text() = '=']",
        resultDisplay: "//div[contains(@class, 'component-display')]"
    },

    add(num1, num2) {
        const num1Digits = String(num1).split("");
        const num2Digits = String(num2).split("");

        num1Digits.forEach(digit => {
            I.click(this.fields.numButton(digit));
        });
        
        I.click(this.fields.plusButton);

        num2Digits.forEach(digit => {
            I.click(this.fields.numButton(digit));
        });
        
        I.click(this.fields.equalButton);
    },

    getOperationResult() {
        return I.grabTextFrom(this.fields.resultDisplay);
    },

    isLoaded() {
        I.amOnPage('/');
        I.seeElement(this.fields.plusButton);
        I.seeElement(this.fields.equalButton);
    }
};
