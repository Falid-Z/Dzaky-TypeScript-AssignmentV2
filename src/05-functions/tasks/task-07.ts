/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

const totalStudents = students.length;

function countActiveStudents(active: boolean): number {
  let count = 0;
  for (const student of students) {
    if (student.active === active) {
      count++;
    }
  }
  return count;
}

function countInactiveStudents(active: boolean): number {
  return countActiveStudents(!active);
}

function countStudentsByMajor(major: string): number {
  let count = 0;
  for (const student of students) {
    if (student.major === major) {
      count++;
    }
  }
  return count;
}

function printEnrollmentReport(){
console.log(`Total students: ${totalStudents}`);
console.log(`Active students: ${countActiveStudents(true)}`);
console.log(`Inactive students: ${countInactiveStudents(true)}`);
console.log(`Software Engineering students: ${countStudentsByMajor("Software Engineering")}`);
console.log(`Networking students: ${countStudentsByMajor("Networking")}`);
console.log(`Multimedia students: ${countStudentsByMajor("Multimedia")}`);
}
printEnrollmentReport();