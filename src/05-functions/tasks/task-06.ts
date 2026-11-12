/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

const sales = [
  125000,
  780000,
  250000,
  99000,
  540000,
  670000,
  180000,
  450000,
  310000,
  820000
];

function calculateTotalSales(sales: number[]): number {
 let totalSales = 0;
 for (const sale of sales) {
    totalSales += sale;
 }
 return totalSales;
}
console.log(`Total sales: ${calculateTotalSales(sales)}`);

function findHighestTransaction(sales: number[]): number {
  let highestTransaction = sales[0];
  for (const sale of sales) {
    if (sale > highestTransaction) {
      highestTransaction = sale;
    }
  }
  return highestTransaction;
}
console.log(`Highest transaction: ${findHighestTransaction(sales)}`);

function findLowestTransaction(sales: number[]): number {
  let lowestTransaction = sales[0];
  for (const sale of sales) {
    if (sale < lowestTransaction) {
      lowestTransaction = sale;
    }
  }
  return lowestTransaction;
}
console.log(`Lowest transaction: ${findLowestTransaction(sales)}`);

function calculateAverageSale(sales: number[]): number {
  let avr = 0;
  for (const sale of sales) {
    avr += sale;
  }
  return avr / sales.length;
}
console.log(`Average transaction: ${calculateAverageSale(sales)}`);

function countLargeTransactions(sales: number[], minimumAmount: number): number {
  let largeTransactions = 0;
  for (const sale of sales) {
    if (sale > minimumAmount) {
      largeTransactions++;
    }
  }
  return largeTransactions;
}
console.log(`Number Large Transaction: ${countLargeTransactions(sales, 500000)}`);