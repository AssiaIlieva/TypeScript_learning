"use strict";
let caloryObj = {};
const createObject = (foodArr) => {
    for (let i = 0; i <= foodArr.length - 1; i += 2) {
        const key = foodArr[i];
        const value = Number(foodArr[i + 1]);
        caloryObj[key] = value;
    }
    console.log(caloryObj);
};
createObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
createObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
//# sourceMappingURL=1.calorie%20Object.js.map