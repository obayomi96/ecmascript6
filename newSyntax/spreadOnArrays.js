// Using spread operators on arrays

const arrayOne = ['Martins', 'Anthony', 'Franca'];
const arrayTwo = ['Joan', 'Timothy', 'Obayomi'];

const concatArray = [...arrayOne, ...arrayTwo];

concatArray.forEach(function(name) {
    document.write(name);
});

const name = 'Seun';
const nameToArray = [...name];
nameToArray.forEach(function(letter){
    document.write(letter);
});

const addNumbers = function(n1, n2, n3) {
    return n1 + n2 + n3;
}

const numbers = [1,5,19];
/* Instead of adding all numbers with const addition =addNumbers(numbers[0], numbers[1], numbers[2]); */

const addition = addNumbers(...numbers);
document.write(addition);