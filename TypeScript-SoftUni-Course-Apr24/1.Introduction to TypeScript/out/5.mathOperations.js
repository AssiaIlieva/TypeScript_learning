"use strict";
function mathOperations(num1, num2, operand) {
    switch (operand) {
        case "+":
            console.log(num1 + num2);
            break;
        case "-":
            console.log(num1 - num2);
            break;
        case "*":
            console.log(num1 * num2);
            break;
        case "/":
            console.log(num1 / num2);
            break;
        case "%":
            console.log(num1 % num2);
            break;
        case "**":
            console.log(num1 ** num2);
            break;
    }
}
mathOperations(2, 3, "**");
//# sourceMappingURL=5.mathOperations.js.map