// Using Promises to access and get multiple data simultaneously with Promise.All


const namesPromise = new Promise((resolve, reject) => {
   setTimeout(() => {
       resolve(['Martins', 'Fransisca', 'Anthony']);
   }, 2000);
   
   setTimeout(() => {
   // Note that you can alway handle errors how you like    
       reject("Did not get any data from the server, there was an error")
   }, 4000);
});

// Surnames data
const surnamesPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['Obayomi', 'Obayomi', 'Obayomi']);
    }, 2000);
    
    setTimeout(() => {
        reject("Did not get any data from the server, there was an error");
    }, 4000);
});

// Using the Promise.All method, let us access both Promises data at the same time
Promise.all([namesPromise, surnamesPromise]).then(data => {
    const [names, surnames] = data;
    for(var i = 0; i < names.length; i++) {
        const name = names[i];
        const surname = surnames[i];
// Using document.write to output directly in the browser for testing        
        document.write(`${name} ${surname}`);
    }
}).catch(error => {
    document.write(error);
})