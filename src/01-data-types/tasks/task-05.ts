/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type Attendance = {
    employeeId: string;
    employeeName: string;
    date: string;
    checkInTime: string;
    checkOutTime: string;
    totalWorkingHours: number;
    isPresent: boolean;
};

const employee1: Attendance = {
    employeeId: "24001",
    employeeName: "Araya",
    date: "03/10/2026",
    checkInTime: "08:00",
    checkOutTime: "17:12",
    totalWorkingHours: 8,
    isPresent: true,
};

const employee2: Attendance = {
    employeeId: "24002",
    employeeName: "Rien",
    date: "03/10/2026",
    checkInTime: "08:30",
    checkOutTime: "17:31",
    totalWorkingHours: 8,
    isPresent: true,
};

const employee3: Attendance = { 
    employeeId: "24003",
    employeeName: "Dante",
    date: "03/10/2026",
    checkInTime: "",
    checkOutTime: "",
    totalWorkingHours: 0,
    isPresent: false,
};

console.log(employee1, employee2, employee3);
