import { DiscountonSKUs } from "../types/DiscountonSKUs";
import { Item } from "../types/Item";

export class Discount {
    private discounts: DiscountonSKUs[];
    constructor(discount: DiscountonSKUs[]){
        this.discounts = discount;
    }


    apply(items: Item[]): number {
        let totalDiscount = 0;

        this.discounts.forEach(discountRule => {
            const applicableItems = items.filter(item => item.sku === discountRule.sku);
            const numberOfApplicableItems = applicableItems.length;

            if (numberOfApplicableItems >= discountRule.minQuantity) {
                const numberOfDiscounts = Math.floor(numberOfApplicableItems / discountRule.minQuantity);
                const originalPrice = applicableItems[0].price;
                const discountAmount = numberOfDiscounts * discountRule.minQuantity * (originalPrice - discountRule.discountedPrice);
                
                totalDiscount += discountAmount;
            }
        });

        return totalDiscount;
    }

}