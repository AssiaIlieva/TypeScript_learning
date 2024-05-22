type DictCalc = {
    [key: string]: string;
}

function calculator(num1:number, operator: string, num2: number):string{

  const dictionaryCalculator: DictCalc = {
    '+': (num1 + num2).toFixed(2),
    '-': (num1 - num2).toFixed(2),
    '/': (num1 / num2).toFixed(2),
    '*': (num1 * num2).toFixed(2),
  }

  if(!dictionaryCalculator[operator]){
    return 'Non valid operaton'
  }else{
    return dictionaryCalculator[operator]
  }
    
}

console.log(calculator(7, "*", 5));
