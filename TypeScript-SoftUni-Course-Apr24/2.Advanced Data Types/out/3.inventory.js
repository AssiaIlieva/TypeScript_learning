"use strict";
function generateHeroes(arr) {
    let heroes = [];
    for (let hero of arr) {
        let [name, levelAsString, items] = hero.split(" / ");
        let heroLevel = Number(levelAsString);
        const currentHero = {
            hero: name,
            level: heroLevel,
            items: items
        };
        heroes.push(currentHero);
    }
    heroes.sort((a, b) => a.level - b.level);
    return heroes;
}
const printHeroes = (heroesArr) => {
    heroesArr.forEach((hero) => {
        console.log(`Hero: ${hero.hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });
};
// printHeroes(generateHeroes([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
//     ]
//     ))
printHeroes(generateHeroes([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]));
//# sourceMappingURL=3.inventory.js.map