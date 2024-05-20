"use strict";
class Car {
    brand;
    model;
    horsePower;
    constructor(brand, model, horsePower) {
        this.brand = brand;
        this.model = model;
        this.horsePower = horsePower;
    }
    get getBrand() {
        return this.brand;
    }
    set carBrand(brand) {
        this.brand = brand;
    }
    get getModel() {
        return this.model;
    }
    set carModel(model) {
        this.model = model;
    }
    get getHorsePower() {
        return this.horsePower;
    }
    set carHorsePower(horsePower) {
        this.horsePower = horsePower;
    }
    printCarInfo() {
        return `The car is: ${this.brand} ${this.model} - ${this.horsePower} HP.`;
    }
}
function solve(input) {
    let [brand, model, stringHP] = input.split(' ');
    let car = new Car(brand, model, Number(stringHP));
    console.log(car.printCarInfo());
}
solve("Skoda Karoq 150");
//# sourceMappingURL=1.carInfo.js.map