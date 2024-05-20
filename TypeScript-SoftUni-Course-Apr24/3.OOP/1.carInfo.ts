class Car {
    brand: string;
    model: string;
    horsePower: number;

    constructor(brand: string, model: string, horsePower: number){
        this.brand = brand;
        this.model = model;
        this.horsePower = horsePower;
    }

    get getBrand(): string {
        return this.brand;
    }
    set carBrand(brand: string){
        this.brand = brand;
    }
    get getModel(): string{
        return this.model;
    }
    set carModel(model: string){
        this.model = model;
    }
    get getHorsePower(): number{
        return this.horsePower;
    }
    set carHorsePower(horsePower: number){
        this.horsePower = horsePower
    }

    printCarInfo():string{
        return `The car is: ${this.brand} ${this.model} - ${this.horsePower} HP.`;
        
    }
}

function solve(input: string):void{
    let [brand, model, stringHP] = input.split(' ');

    let car = new Car(brand, model, Number(stringHP));
    console.log(car.printCarInfo());
}

solve("Skoda Karoq 150")