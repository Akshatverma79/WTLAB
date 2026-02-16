const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success! Promise resolved after 2 seconds.");
    }, 2000);
});

myPromise.then((message) => {
    console.log(message);
});

const conditionalPromise = new Promise((resolve, reject) => {
    const condition = false;
    
    if (condition) {
        resolve("Condition passed!");
    } else {
        reject("Error: Condition failed!");
    }
});

conditionalPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
