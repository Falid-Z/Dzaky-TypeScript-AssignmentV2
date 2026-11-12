/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

function totalStudents(): number {
    return submissions.length;
}

function submittedAssignments(): number {
    let count = 0;
    for (const submission of submissions) {
        if (submission.submitted) {
            count++;
        }
    }
    return count;
}

function missingAssignments(): number {
    return totalStudents() - submittedAssignments();
}

function passedStudents(): number {
    let count = 0;
    for (const submission of submissions) {
        if (submission.submitted && submission.score >= 75) {
            count++;
        }
    }
    return count;
}

function requiringRevision(): number {
    let count = 0;
    for (const submission of submissions) {
        if (submission.submitted && submission.score < 75) {
            count++;
        }
    }
    return count;
}

function averageScore(): number {
    let totalScore = 0;
    for (const submission of submissions) {
        totalScore += submission.score;
    }
    return totalScore / totalStudents();
}

function highestScore(): number {
    let highest = 0;
    for (const submission of submissions) {
        if (submission.score > highest) {
            highest = submission.score;
        }
    }
    return highest;
}

function lowestScore(): number {
    let lowest = 100;
    for (const submission of submissions) {
        if (submission.submitted && submission.score < lowest) {
            lowest = submission.score;
        }
    }
    return lowest;
}

function submissionReport(): void {
    console.log(`Total students: ${totalStudents()}`);
    console.log(`Submitted assignments: ${submittedAssignments()}`);
    console.log(`Missing assignments: ${missingAssignments()}`);
    console.log(`Passed students: ${passedStudents()}`);
    console.log(`Students requiring revision: ${requiringRevision()}`);
    console.log(`Average score: ${averageScore()}`);
    console.log(`Highest score: ${highestScore()}`);
    console.log(`Lowest score: ${lowestScore()}`);
}
submissionReport();