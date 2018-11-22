// Array destructuring

const names = ['Obayomi', 'Martins', 'Franca', 'Tony', 'Seun'];

// const obayomi = names[0];
// const martins = names[1];
// const franca = names[3];

// The 3 dots before the last array variable will represent all the rest of the items in the array
const [obayomi, , franca, ...restOfTheNames] = names;

document.write(`${obayomi} : ${franca}`);
document.write(restOfTheNames); // 'Tony' 'Seun'
document.write(restOfTheNames.length);