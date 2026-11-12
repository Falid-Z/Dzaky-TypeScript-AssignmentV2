/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

function totalEnrollment(): number {
    return enrollments.length;
}

function completedEnrollment(): number {
    let count = 0;
    for (const enrollment of enrollments) {
        if (enrollment.completed) {
            count++;
        }
    }
    return count;
}

function incompleteEnrollment(): number {
    return totalEnrollment() - completedEnrollment();
}

function completionPercentage(): number {
    return (completedEnrollment() / totalEnrollment()) * 100;
}

function highestScore(): number {
    let highest = enrollments[0].score;
    for (const enrollment of enrollments) {
        if (enrollment.score > highest) {
            highest = enrollment.score;
        }
    }
    return highest;
}

function lowestScore(): number {
    let lowest = enrollments[0].score;
    for (const enrollment of enrollments) {
        if (enrollment.score < lowest) {
            lowest = enrollment.score;
        }
    }
    return lowest;
}

function averageScore(): number {
    let totalScore = 0;
    for (const enrollment of enrollments) {
        totalScore += enrollment.score;
    }
    return totalScore / totalEnrollment();
}

function passingStudents(): number {
    let count = 0;
    for (const enrollment of enrollments) {
        if (enrollment.score >= 75) {
            count++;
        }
    }
    return count;
}

function countStudentsByCourse(course: string): number {
    let count = 0;
    for (const enrollment of enrollments) {
        if (enrollment.course === course) {
            count++;
        }
    }
    return count;
}

function averageScoreByCourse(course: string): number {
    let totalScore = 0;
    let count = 0;
    for (const enrollment of enrollments) {
        if (enrollment.course === course) {
            totalScore += enrollment.score;
            count++;
        }
    }
    return count > 0 ? totalScore / count : 0;
}

function totalLearningHours(): number {
    let totalHours = 0;
    for (const enrollment of enrollments) {
        totalHours += enrollment.duration;
    }
    return totalHours;
}

function averageLearningDuration(): number {
    return totalLearningHours() / totalEnrollment();
}



console.log(`Total enrollments: ${totalEnrollment()}`);
console.log(`Completed enrollments: ${completedEnrollment()}`);
console.log(`Incomplete enrollments: ${incompleteEnrollment()}`);
console.log(`Completion percentage: ${completionPercentage().toFixed(2)}%`);
console.log(`Highest score: ${highestScore()}`);
console.log(`Lowest score: ${lowestScore()}`);
console.log(`Average score: ${averageScore().toFixed(2)}`);
console.log(`TypeScript students: ${countStudentsByCourse("TypeScript")}`);
console.log(`Average score for TypeScript: ${averageScoreByCourse("TypeScript").toFixed(2)}`);
console.log(`Database students: ${countStudentsByCourse("Database")}`);
console.log(`Average score for Database: ${averageScoreByCourse("Database").toFixed(2)}`);
console.log(`Backend students: ${countStudentsByCourse("Backend")}`);
console.log(`Average score for Backend: ${averageScoreByCourse("Backend").toFixed(2)}`);
console.log(`Students with passing scores: ${passingStudents()}`);
console.log(`Total learning hours: ${totalLearningHours()}`);
console.log(`Average learning duration: ${averageLearningDuration().toFixed(2)} hours`);