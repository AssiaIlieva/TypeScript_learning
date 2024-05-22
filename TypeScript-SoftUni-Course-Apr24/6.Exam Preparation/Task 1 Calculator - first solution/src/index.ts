function calculator(num1:number, operator: string, num2: number):string{

    switch(operator){
        case '+': return (num1 + num2).toFixed(2);
            break;
        case '-': return (num1 - num2).toFixed(2);
            break;
        case '/': return (num1 / num2).toFixed(2);
            break;
        case '*': return (num1 * num2).toFixed(2);
            break;
        default: return 'non existing operator'
    }
    
}

console.log(calculator(7, "*", 5));
