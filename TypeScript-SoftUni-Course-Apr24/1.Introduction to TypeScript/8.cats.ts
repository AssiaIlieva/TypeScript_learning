
class Cat {
    constructor(public name: string, public age: number){
        this.name = name;
        this.age = age;
    }

    meow (): void{
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}

function createCats(catArr: string []){
    catArr.forEach((el)=>{
        const [name, ageString] = el.split(' ');
        const age = Number(ageString);
        const cat = new Cat(name, age);
        return (cat.meow());
        
        
    })
}

createCats(['Mellow 2', 'Tom 5'])