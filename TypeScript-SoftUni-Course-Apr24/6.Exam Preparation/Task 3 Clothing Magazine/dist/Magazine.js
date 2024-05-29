"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    type;
    capacity;
    clothes;
    constructor(type, capacity) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }
    addCloth(cloth) {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
        }
    }
    removeCloth(color) {
        const index = this.clothes.findIndex((el) => el.color === color);
        if (index !== -1) {
            this.clothes.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    }
    getSmallestCloth() {
        const smallest = [...this.clothes].sort((a, b) => a.size - b.size)[0];
        return smallest;
    }
    getCloth(color) {
        const cloth = this.clothes.find(el => el.color === color);
        return cloth;
    }
    getClothCount() {
        return this.clothes.length;
    }
    report() {
        const sorted = [...this.clothes].sort((a, b) => a.size - b.size);
        const reportCloth = sorted.map(el => el.toString()).join('\n');
        const report = `${this.type} magazine contains:\n${reportCloth}`;
        return report;
    }
}
exports.Magazine = Magazine;
//# sourceMappingURL=Magazine.js.map