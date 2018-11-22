// Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
// The resolve can be handled anyhow you prefer        
        resolve("This is the data that gets returned from the server");
    }, 3000);
    
    setTimeout(() => {
// The reject can also be handled how you prefer        
        reject("This will through an error if there is one and no data can be gotten from the server")
    }, 5000);
});

// Your response and error can be handled how you prefer as well
promise.then(response => {
    log(response);
}).catch(error => {
    log(error);
})