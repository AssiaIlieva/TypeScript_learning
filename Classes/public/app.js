"use strict";
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// const type = document.querySelector('#type') as HTMLSelectElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// form.addEventListener('submit', (e: Event) => {
//     e.preventDefault();
//     console.log(
//         type.value,
//         tofrom.value,
//         details.value,
//         amount.valueAsNumber
//     );
// })
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// console.log(invoices);
// by difault the properties of the class are public and could be rached globaly:
invOne.client = 'yoshi';
invTwo.amount = 400;
console.log(invoices);
