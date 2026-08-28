/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type Product = {
    productCode: string;
    productName: string;
    sellingPrice: number;
    stockQuantity: number;
    productWeight: number;
    averageCustomerRating: number;
    isDiscounted: boolean;
};

const product1: Product = {
    productCode: "P-1771",
    productName: "Wireless Mouse",
    sellingPrice: 120000,
    stockQuantity: 45,
    productWeight: 0.12,
    averageCustomerRating: 4.8,
    isDiscounted: true,
};

const product2: Product = {
    productCode: "P-1772",
    productName: "RTX 8060",
    sellingPrice: 5000000,
    stockQuantity: 18,
    productWeight: 1.8,
    averageCustomerRating: 4.9,
    isDiscounted: false,
};

const product3: Product = { 
    productCode: "P-1773",
    productName: "Wired RGB Mouse",
    sellingPrice: 220000,
    stockQuantity: 30,
    productWeight: 0.35,
    averageCustomerRating: 4.6,
    isDiscounted: true,
};

console.log(product1);
console.log(product2);
console.log(product3);  