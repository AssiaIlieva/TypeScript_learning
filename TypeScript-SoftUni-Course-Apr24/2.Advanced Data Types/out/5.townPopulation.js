"use strict";
function generateTownsObject(stringArray) {
    let townObject = {};
    for (let town of stringArray) {
        let [name, populationAsString] = town.split(' <-> ');
        let population = Number(populationAsString);
        if (!townObject[name]) {
            townObject[name] = population;
        }
        else {
            townObject[name] += population;
        }
    }
    return townObject;
}
function printTownObject(object) {
    for (let key in object) {
        console.log(`${key} : ${object[key]}`);
    }
}
printTownObject(generateTownsObject(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']));
//# sourceMappingURL=5.townPopulation.js.map