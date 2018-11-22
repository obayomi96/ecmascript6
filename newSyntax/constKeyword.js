// The const keyword is used to create a variable whose value can never change

// The value of name can be reassigned
let name = "Maria";
name = {};
name = 2;

document.write(name);

/* ************************************************ */

const person = {};

person['name'] = "Maria";
document.write(person.name);

const array = [];
array.push(`${person.name} from Array`);

document.write(array[0]);