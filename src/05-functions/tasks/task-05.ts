/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

const scores = [
  82,
  91,
  76,
  88,
  69,
  94,
  73,
  85,
  79,
  97
];

function findHighestScore(scores: number[]): number {
  let highestScore = scores[0];
  for (const score of scores) {
    if (score > highestScore) {
      highestScore = score;
    }
  }
  return highestScore;
}
console.log(`Highest score: ${findHighestScore(scores)}`);

function findLowestScore(scores: number[]): number {
  let lowestScore = scores[0];
  for (const score of scores) {
    if (score < lowestScore) {
      lowestScore = score;
    }
  }
  return lowestScore;
}
console.log(`Lowest score: ${findLowestScore(scores)}`);

function calculateAverage(scores: number[]): number {
  let avr = 0;
  for (const score of scores) {
    avr += score;
  }
  return avr / scores.length;
}
console.log(`Average score: ${calculateAverage(scores)}`);

function countPassedStudents(scores: number[]): number {
  let passedCount = 0;
  for (const score of scores) {
    if (score >= 75) {
      passedCount++;
    }
  }
  return passedCount;
}
console.log(`Passed students: ${countPassedStudents(scores)}`);