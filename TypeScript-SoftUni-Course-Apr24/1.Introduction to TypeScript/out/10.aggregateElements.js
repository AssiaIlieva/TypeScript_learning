"use strict";
function sumElements(array) {
    return array.reduce((acc, el) => acc + el, 0);
}
;
function sumInverse(array) {
    return array.reduce((acc, el) => acc + 1 / el, 0);
}
function concat(array) {
    return array.join('');
}
function solve(array) {
    console.log(sumElements(array));
    console.log(sumInverse(array));
    console.log(concat(array));
}
solve([1, 2, 3]);
//# sourceMappingURL=10.aggregateElements.js.map