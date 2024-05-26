import { Cloth } from "./Cloth";
import { Magazine } from "./Magazine";

function main():void{
const magazine: Magazine = new Magazine('Zara', 20);

const cloth1: Cloth = new Cloth('red', 36, 'dress');

console.log(cloth1.toString());

magazine.addCloth(cloth1);

console.log(magazine.removeCloth('black'));

const cloth2: Cloth = new Cloth('brown', 34, 't-shirt');
const cloth3: Cloth = new Cloth('blue', 32, 'jeans');

magazine.addCloth(cloth2);
magazine.addCloth(cloth3);

const smallestCloth: Cloth | undefined = magazine.getSmallestCloth();
console.log(smallestCloth?.toString());

const getCloth: Cloth | undefined = magazine.getCloth('brown');
console.log((getCloth?.toString()));

console.log(magazine.report());

}
main()

