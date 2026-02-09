// Student Registration System using ES6 features

// Rest parameter - collects all scores into an array
function calculateAverage(...scores) {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

function registerStudent({ id, name, course = "General", ...otherDetails }) {
    return { id, name, course, ...otherDetails };
}

const student1Scores = [85, 90, 78];
const student2Scores = [92, 88, 95];
const allScores = [...student1Scores, ...student2Scores];

const student = registerStudent({ 
    id: "S001", 
    name: "Akshat", 
    age: 20 
});

console.log(`Student: ${student.name} (${student.id})`);
console.log(`Course: ${student.course}`);
console.log(`Average Score: ${calculateAverage(...student1Scores)}`);
console.log(`All Scores: ${allScores}`);

	