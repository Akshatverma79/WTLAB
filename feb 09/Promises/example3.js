const dividePromise = new Promise((resolve, reject) => {
    const numerator = 10;
    const denominator = 0;

    if (denominator === 0) {
        reject("Error: Cannot divide by zero!");
    } else {
        const result = numerator / denominator;
        resolve(result);
    }
});

dividePromise
    .then((result) => {
        console.log("Result:", result);
    })
    .catch((error) => {
        console.error(error);
    });
