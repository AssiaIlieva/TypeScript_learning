"use strict";
function generateTowns(townsArray) {
    let towns = [];
    for (let town of townsArray) {
        let [name, latitudeAsString, longitudeAsString] = town.split(' | ');
        const latitude = Number(latitudeAsString).toFixed(2);
        const longitude = Number(longitudeAsString).toFixed(2);
        const currentTown = {
            town: name,
            latitude: latitude,
            longitude: longitude,
        };
        towns.push(currentTown);
    }
    return towns;
}
function printTownsObj(arr) {
    for (let town of arr) {
        console.log(town);
    }
}
printTownsObj(generateTowns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']));
//# sourceMappingURL=4.towns.js.map