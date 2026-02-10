let loginPromise = new Promise((resolve, reject) => {
    let passwordCorrect=false;
    if(passwordCorrect) {
        resolve("Login successful!");
    } else {
        reject("Login failed. Incorrect password.");
    }
});
loginPromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});
