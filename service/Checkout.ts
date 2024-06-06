import { Item } from "../types/Item";
import { itemsStock } from "../ItemsStock";
import { Discount } from './Discount'

export class Checkout {
    private items: Item[] =[];
    private discountApp : Discount;
    constructor(discount: Discount ){
        this.discountApp = discount;
    }
    scan(sku: String): void {
    const product = itemsStock.find(product => product.sku === sku);
    if (product) {
      this.items.push(product);
    } else {
      throw new Error(`Product with SKU ${sku} not found.`);
    }
    }


    total(): number {
        const total = this.items.reduce((sum, item) => sum + item.price, 0);
        const discount = this.discountApp.apply(this.items)
        return total - discount;
    }

}