/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let numA = 0;
let numB = 0;
let numC = 0;
let numD = 0;
let highestScore = -Infinity;
let lowestScore = Infinity;
let totalScore = 0;

for (const student of students) {
    const score = student.score;
    totalScore += score;

    if (score > highestScore) {
        highestScore = score;
    }

    if (score < lowestScore) {
        lowestScore = score;
    }

    if (score >= 90) {
        numA++;
    } else if (score >= 80) {
        numB++;
    } else if (score >= 70) {
        numC++;
    } else {
        numD++;
    }
}

const averageScore = totalScore / students.length;

console.log(`Number of A students: ${numA}`);
console.log(`Number of B students: ${numB}`);
console.log(`Number of C students: ${numC}`);
console.log(`Number of D students: ${numD}`);
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore.toFixed(2)}`);