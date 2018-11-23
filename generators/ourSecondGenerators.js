// Generators
// The asterics indicates a generator function declaration
const getNumbers = function* (numbers) {
    for(var 1=0;i<numbers.length;i++>) {
// Yield is used to return result just like the return keyword 
        yield numbers[i];
    }
}

// Calling geNumbers function assigned to a new variable
const getNumbersGen = getNumbers([1,2,3,4,5]);

const interval = setINterval(() => {
    const next = getNumbersGen.next();
    if(next.done) {
        console.log("This generator is done");
        clearInterval(interval);
    }else{
        const number = next.value;
        console.log(number);
    }
}, 1000);