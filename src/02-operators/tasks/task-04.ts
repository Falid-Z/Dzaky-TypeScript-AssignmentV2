/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const keyboardPrice = 850000;
const keyboardQuantity = 1;
const mousePrice = 275000;
const mouseQuantity = 2;
const mousepadPrice = 120000;
const mousepadQuantity = 1;
const premiumMember = true;

const subtotal =
  keyboardPrice * keyboardQuantity +
  mousePrice * mouseQuantity +
  mousepadPrice * mousepadQuantity;

let totalItems = 0;
totalItems += keyboardQuantity;
totalItems += mouseQuantity;
totalItems += mousepadQuantity;

const isDiscountApplied = subtotal > 1000000;
const discount = isDiscountApplied ? subtotal * 0.1 : 0;
const shippingCost = premiumMember ? 0 : 20000;

const finalPayment = subtotal - discount + shippingCost;

console.log("Subtotal:", subtotal);
console.log("Total Items:", totalItems);
console.log("Discount Applied:", isDiscountApplied);
console.log("Discount:", discount);
console.log("Shipping Cost:", shippingCost);
console.log("Final Payment:", finalPayment);
