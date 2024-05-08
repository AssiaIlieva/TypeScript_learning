"use strict";
class Cat {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}
function createCats(catArr) {
    catArr.forEach((el) => {
        const [name, ageString] = el.split(' ');
        const age = Number(ageString);
        const cat = new Cat(name, age);
        return (cat.meow());
    });
}
createCats(['Mellow 2', 'Tom 5']);
//# sourceMappingURL=8.cats.js.map