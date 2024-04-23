

// class Invoice {
//     client: string;
//     details: string;
//     amount: number;

//     constructor(c: string, d: string, a: number){
//         this.client = c;
//         this.details = d;
//         this.amount = a;
//     }

//     format() {
//         return `${this.client} owes $${this.amount} for ${this.details}`
//     }
// }

// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => {
// console.log((inv.client, inv.details, inv.amount, inv.format()));

// })

class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;


        constructor(
            readonly client: string,
            private details: string,
            public amount: number
        ){}

        format() {
            return `${this.client} owes $${this.amount} for ${this.details}`
        }
}
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
console.log(inv.client, inv.amount, inv.format());

})




