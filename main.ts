import { DiscountonSKUs } from "./types/DiscountonSKUs";
import { Discount } from './service/Discount';
import { Checkout } from './service/Checkout';

//  The only change needed to be made in future is this array 
const discounts: DiscountonSKUs[] = [
    { sku: 'atv', minQuantity: 3, discountedPrice: 109.50 * 2 / 3 }, 
    { sku: 'ipd', minQuantity: 5, discountedPrice: 499.99 } 
];

const discountApp = new Discount(discounts);


const co = new Checkout(discountApp);

// Scenario 1 : 3 TV 1 VGA
co.scan('atv');
co.scan('atv');
co.scan('atv');
co.scan('vga');
console.log(co.total()); 

// Scenario 2  : 5 Ipads 2TV
const co2 = new Checkout(discountApp);
co2.scan('atv');
co2.scan('ipd');
co2.scan('ipd');
co2.scan('atv');
co2.scan('ipd');
co2.scan('ipd');
co2.scan('ipd');
console.log(co2.total()); 


// Scenario 3 : 5 ipads 3 TV
const co3 = new Checkout(discountApp);
co3.scan('atv');
co3.scan('ipd');
co3.scan('ipd');
co3.scan('atv');
co3.scan('ipd');
co3.scan('ipd');
co3.scan('ipd');
co3.scan('atv');
console.log(co2.total()); 