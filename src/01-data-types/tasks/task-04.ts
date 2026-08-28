/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */
const book1 = {
  ISBN: "978-3-16-148410-0",
  title: "Moby Dick",
  author: "Herman Melville",
  totalPages: 635,
  category: "Fiction",
  isAvailable: true
};

const book2 = {
  ISBN: "978-0-7432-7356-5",
  title: "The Adventures of Don Quixote",
  author: "Miguel de Cervantes",
  totalPages: 1072,
  category: "Fiction",
  isAvailable: false
};

const book3 = {
  ISBN: "978-0-06-112008-4",
  title: "Metamorphosis",
  author: "Franz Kafka",
  totalPages: 72,
  category: "Fiction",
  isAvailable: true
};

const book4 = {
  ISBN: "978-0-452-28423-4",
  title: "The Odyssey",
  author: "Homer",
  totalPages: 550,
  category: "Fiction",
  isAvailable: true
};

const book5 = {
  ISBN: "978-0-14-044913-6",
  title: "Metamorphosis?",
  author: "Shindo L",
  totalPages: 140,
  category: "Fiction",
  isAvailable: false
}

console.log("Book 1:", book1);
console.log("Book 2:", book2);
console.log("Book 3:", book3);
console.log("Book 4:", book4);
console.log("Book 5:", book5);
