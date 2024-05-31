"use strict";
function printAndSum(startNum, endNum) {
    let sum = 0;
    const numArray = [];
    for (let i = startNum; i <= endNum; i++) {
        sum += i;
        numArray.push(i);
    }
    console.log(numArray.join(" "));
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
//# sourceMappingURL=index.js.map