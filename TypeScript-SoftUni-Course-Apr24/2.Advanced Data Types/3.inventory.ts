type Hero = {hero: string, level: number, items: string};



function generateHeroes(arr: string []): Hero []{
    let heroes: Hero [] = [];

    for(let hero of arr){
        let [name, levelAsString, items] = hero.split(" / ");
        let heroLevel = Number(levelAsString);
        const currentHero: Hero = {
            hero: name,
            level: heroLevel,
            items: items
        }
        heroes.push(currentHero);
    }
    heroes.sort((a, b) => a.level - b.level)
    return heroes
}

const printHeroes = (heroesArr: Hero []):void => {
    heroesArr.forEach((hero: Hero) => {
        console.log(`Hero: ${hero.hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    })
}
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
    ]
    ))