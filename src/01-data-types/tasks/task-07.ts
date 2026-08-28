/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type Registration = {
    studentId: string;
    fullName: string;
    gradeLevel: number;
    courseId: string;
    courseTitle: string;
    instructorName: string;
    totalLearningHours: number;
    registrationDate: string;
    isPaymentCompleted: boolean;
};

const registration1: Registration = {
    studentId: "STD-101",
    fullName: "Hikigaya Hachiman",
    gradeLevel: 12,
    courseId: "C-031",
    courseTitle: "Web Development",
    instructorName: "Mr. Smith",
    totalLearningHours: 4,
    registrationDate: "08/08/2026",
    isPaymentCompleted: true,
};

const registration2: Registration = {
    studentId: "STD-122",
    fullName: "Lei Heng",
    gradeLevel: 11,
    courseId: "C-032",
    courseTitle: "Data Management",
    instructorName: "Mrs. Faust",
    totalLearningHours: 3,
    registrationDate: "08/08/2026",
    isPaymentCompleted: false,
};

const registration3: Registration = {
    studentId: "STD-153",
    fullName: "Ricardo Ricard",
    gradeLevel: 10,
    courseId: "C-033",
    courseTitle: "Back-end Learning",
    instructorName: "Mr. Dante",
    totalLearningHours: 4,
    registrationDate: "08/08/2026",
    isPaymentCompleted: true,
};

console.log(registration1);
console.log(registration2);
console.log(registration3); 