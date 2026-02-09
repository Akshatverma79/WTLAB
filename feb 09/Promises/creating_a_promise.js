let myPromise=new Promise((resolve, reject) => {
    let success=true;
    if(success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected.");
    }
});