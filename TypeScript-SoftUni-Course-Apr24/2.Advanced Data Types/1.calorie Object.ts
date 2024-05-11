type Calories = {[key:string]: number}

let caloryObj: Calories = {};

const createObject = (foodArr: string []):void => {

    for(let i = 0; i <= foodArr.length - 1; i+=2){
        const key: string = foodArr[i];
        const value: number = Number(foodArr[i+1]);

        caloryObj[key] = value;
    }

    console.log(caloryObj);
    
}

createObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
createObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])