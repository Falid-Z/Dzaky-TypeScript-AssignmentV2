/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

function totalPatients(): number {
    return patients.length;
}

function totalAdmittedPatients(): number {
    let count = 0;
    for (const patient of patients) {
        if (patient.admitted) {
            count++;
        }
    }
    return count;
}

function totalDischargedPatients(): number {
    return totalPatients() - totalAdmittedPatients();
}

function countPatientsByDepartment(department: string): number {
    let count = 0;
    for (const patient of patients) {
        if (patient.department === department) {
            count++;
        }
    }
    return count;
}

function highestHospitalBill(): number {
    let highestBill = 0;
    for (const patient of patients) {
        if (patient.bill > highestBill) {
            highestBill = patient.bill;
        }
    }
    return highestBill;
}

function lowestHospitalBill(): number {
    let lowestBill = patients[0].bill;
    for (const patient of patients) {
        if (patient.bill < lowestBill) {
            lowestBill = patient.bill;
        }
    }
    return lowestBill;
}

function averageHospitalBill(): number {
    let totalBill = 0;
    for (const patient of patients) {
        totalBill += patient.bill;
    }
    return totalBill / totalPatients();
}

function totalHospitalRevenue(): number {
    let totalRevenue = 0;
    for (const patient of patients) {
        totalRevenue += patient.bill;
    }
    return totalRevenue;
}   

function admittedPatientNames(): string[] {
    const names: string[] = [];
    for (const patient of patients) {
        if (patient.admitted) {
            names.push(patient.name);
        }
    }
    return names;
}

function printHospitalReport(): void {
    console.log(`Total patients: ${totalPatients()}`);
    console.log(`Total admitted patients: ${totalAdmittedPatients()}`);
    console.log(`Total discharged patients: ${totalDischargedPatients()}`);
    console.log(`Pediatrics patients: ${countPatientsByDepartment("Pediatrics")}`);
    console.log(`Cardiology patients: ${countPatientsByDepartment("Cardiology")}`);
    console.log(`Orthopedics patients: ${countPatientsByDepartment("Orthopedics")}`);
    console.log(`Highest hospital bill: ${highestHospitalBill()}`);
    console.log(`Lowest hospital bill: ${lowestHospitalBill()}`);
    console.log(`Average hospital bill: ${averageHospitalBill()}`);
    console.log(`Total hospital revenue: ${totalHospitalRevenue()}`);
    console.log(`Admitted patient names: ${admittedPatientNames().join(", ")}`);
}
printHospitalReport();