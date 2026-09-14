/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

const keyboardPrice = 850000;
const keyboardQuantity = 1;
const mousePrice = 275000;
const mouseQuantity = 2;
const monitorstandPrice = 420000;
const monitorstandQuantity = 1;
const voucherValue = 100000;
const premiumMember = true;
const rewardPointRate = 50000;
const vat = 0.11; 

const productSubtotal =
  keyboardPrice * keyboardQuantity +
  mousePrice * mouseQuantity +
  monitorstandPrice * monitorstandQuantity;
const membershipDiscount = premiumMember ? productSubtotal * 0.1 : 0;
const paymentwithoutVoucher = productSubtotal - membershipDiscount;
const finalPaymentBeforeTax = paymentwithoutVoucher - voucherValue;
const vatAmount = finalPaymentBeforeTax * vat;
const finalPayment = finalPaymentBeforeTax + vatAmount;

const rewardPoints = Math.floor(finalPaymentBeforeTax / rewardPointRate);

const freeShippingEligibility = premiumMember || (finalPaymentBeforeTax) > 1500000;

console.log("Product Subtotal:", productSubtotal);
console.log("Membership Discount:", membershipDiscount);
console.log("Voucher Deduction:", voucherValue);
console.log("Payment Before Tax:", finalPaymentBeforeTax);
console.log("VAT:", vatAmount);
console.log("Final Payment:", finalPayment);
console.log("Reward Points:", rewardPoints);
console.log("Free Shipping Eligibility:", freeShippingEligibility);