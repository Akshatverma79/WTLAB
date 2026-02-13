async function submitQuiz() {
  await new Promise(r => setTimeout(r, 1000));
  console.log("Submitting quiz…");
  await new Promise(r => setTimeout(r, 1500));
  console.log("Evaluating answers…");
  await new Promise(r => setTimeout(r, 1000));
  console.log("Quiz submitted successfully!");
}

submitQuiz();
