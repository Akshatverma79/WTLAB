const fetchData = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    
    setTimeout(() => {
        if (success) {
            resolve("Data fetched successfully!");
        } else {
            reject("Failed to fetch data!");
        }
    }, 1000);
});

fetchData
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
