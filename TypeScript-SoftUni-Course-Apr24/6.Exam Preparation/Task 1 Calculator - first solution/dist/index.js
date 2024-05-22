"use strict";
function calculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return (num1 + num2).toFixed(2);
            break;
        case '-':
            return (num1 - num2).toFixed(2);
            break;
        case '/':
            return (num1 / num2).toFixed(2);
            break;
        case '*':
            return (num1 * num2).toFixed(2);
            break;
        default: return 'non existing operator';
    }
}
console.log(calculator(7, "*", 5));
//# sourceMappingURL=index.js.map