const processData = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    
    setTimeout(() => {
        if (success) {
            resolve({ status: "success", data: "Operation completed successfully!" });
        } else {
            reject({ status: "error", message: "Operation failed! Please try again." });
        }
    }, 1500);
});

processData
    .then((response) => {
        console.log("SUCCESS:", response.data);
    })
    .catch((error) => {
        console.log("ERROR:", error.message);
    })
    .finally(() => {
        console.log("Process completed.");
    });
