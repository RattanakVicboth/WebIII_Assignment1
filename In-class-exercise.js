
// Sample data: An array of objects representing students
const students = [
  { id: 1, name: 'Both', score: 84 },
  { id: 2, name: 'Roth', score: 92 },
  { id: 3, name: 'Kawin', score: 78 },
  { id: 4, name: 'Muni', score: 65 }
];

// Using forEach() to iterate over the array and log each student's information
// forEach() executes a provided callback function once for each array element
students.forEach((student) => {
  console.log(`ID: ${student.id}, Name: ${student.name}, Score: ${student.score}`);
});

// Using find() to locate the first student who scored above 85
// find() returns the first element in the array that satisfies the provided testing function
const highScorer = students.find((student) => student.score > 85);

if (highScorer) {
  console.log(`\nThe first student who scored above 85 is: ${highScorer.name} (Score: ${highScorer.score})`);
} else {
  console.log('\nNo student scored above 85.');
}

// Using find() to locate the first student who scored below 85
const lowScorer = students.find((student) => student.score < 85);

if(lowScorer){
    console.log(`\nThe first student who scored below 85 is: ${lowScorer.name} (Score: ${lowScorer.score})`);
} else {
    console.log('\nNo student scored below 85.');
}