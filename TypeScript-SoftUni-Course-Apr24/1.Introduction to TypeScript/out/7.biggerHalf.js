"use strict";
function biggerHalf(array) {
    let result = array.sort((a, b) => a - b)
        .slice(array.length / 2);
    console.log(result);
}
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
//# sourceMappingURL=7.biggerHalf.js.map