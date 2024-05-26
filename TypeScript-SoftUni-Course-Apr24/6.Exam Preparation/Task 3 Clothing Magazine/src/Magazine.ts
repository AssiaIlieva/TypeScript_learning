import { Cloth } from "./Cloth";

export class Magazine {
   private type: string;
   private capacity: number;
   private clothes: Cloth [];
        constructor(type: string, capacity: number){
            this.type = type;
            this.capacity = capacity;
            this.clothes = [];
        }

        addCloth(cloth: Cloth):void {
            if(this.clothes.length < this.capacity){
                this.clothes.push(cloth);
            }
        }
        removeCloth(color: string):boolean{
            const index = this.clothes.findIndex((el) => el.color === color);
            if(index !== -1){
                this.clothes.splice(index, 1);
                return true
            }else{
                return false;
            }
        }
        getSmallestCloth():Cloth | undefined{
            const smallest = [...this.clothes].sort((a, b) => a.size - b.size)[0];
            return smallest;
        }
        getCloth(color: string): Cloth | undefined{
            const cloth: Cloth | undefined = this.clothes.find(el => el.color === color);
            return cloth;
        }
        getClothCount():number{
            return this.clothes.length;
        }
        report():string {
            const sorted: Cloth [] = [...this.clothes].sort((a, b) => a.size - b.size);
            const reportCloth: string = sorted.map(el => el.toString()).join('\n');
            const report: string = `${this.type} magazine contains:\n${reportCloth}`
            return report
        }
}