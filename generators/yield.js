// yield with generator functions
// You can find this example at mozilla developers network

function* countSales() {
    const saleList = [5, 10, 15];
    for(let i=0;i<saleList.length;i++) {
// Yield is used to pause and continue a result value in generator functions        
        yield saleList[i];
    }
}

var appleStore = countSales(); // Generator { }
console.log(appleStore.next()); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }