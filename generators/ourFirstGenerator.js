// Generators

const getNumbers = function* () {
    yield 1;
    yield 'hello';
    yield true;
    yield {name: 'Alex'};
    return 'I am done';
}

const numbersGen = getNumbers();

console.log(numbersGen.next().value);
console.log(numbersGen.next().value);
console.log(numbersGen.next().value);
console.log(JSON.stringify(numbersGen.next().value));
console.log(numbersGen.next().value);