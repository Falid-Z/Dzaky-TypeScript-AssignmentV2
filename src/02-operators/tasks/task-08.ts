/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

const previousMeter = 25640;
const currentMeter = 25892;
const electricityPricePerKwh = 1650;
const solarPanelInstalled = true;
const energySavingmode = false;
const totalConsumption = currentMeter - previousMeter;
const electricityBill = totalConsumption * electricityPricePerKwh; 
const finalBill = electricityBill * (solarPanelInstalled ? 0.8 : 1) * (energySavingmode ? 0.95 : 1);
const isEligibleForGreenEnergyProgram = solarPanelInstalled && totalConsumption < 300 && energySavingmode;

console.log("Total Energy Consumption(kWh):", totalConsumption);
console.log("Electricity Bill:", electricityBill);
console.log("Final Bill:", finalBill);
console.log("Eligible for Green Energy Program:", isEligibleForGreenEnergyProgram);