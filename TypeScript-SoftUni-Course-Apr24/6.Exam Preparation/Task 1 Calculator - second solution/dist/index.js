"use strict";
function calculator(num1, operator, num2) {
    const dictionaryCalculator = {
        '+': (num1 + num2).toFixed(2),
        '-': (num1 - num2).toFixed(2),
        '/': (num1 / num2).toFixed(2),
        '*': (num1 * num2).toFixed(2),
    };
    if (!dictionaryCalculator[operator]) {
        return 'Non valid operaton';
    }
    else {
        return dictionaryCalculator[operator];
    }
}
console.log(calculator(7, "*", 5));
//# sourceMappingURL=index.js.map