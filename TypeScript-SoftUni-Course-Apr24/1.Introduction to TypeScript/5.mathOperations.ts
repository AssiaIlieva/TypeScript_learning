function mathOperations(num1: number, num2: number, operand: string): void {
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
