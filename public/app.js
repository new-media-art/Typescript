import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
/*let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("mario", "plumbing work", 200);

let docs: HasFormatter[] = [];

docs.push(docOne);
docs.push(docTwo);
console.log(docs);

const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("Luiggi", "work on the Luiggi website", 300);

//console.log(invOne, invTwo);
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.details, inv.amount, inv.format());
});*/
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    ;
    list.render(doc, type.value, 'end');
});
