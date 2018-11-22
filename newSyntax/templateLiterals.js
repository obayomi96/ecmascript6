const name = 'Obayomi';
const country = 'Nigeria';
const age = 22;

// We could do this below (old syntax)
document.write('Name: ' + name + ' Country' + country + ' age '+ age);
// We count write a cleaner and easier code below (new syntax)
/* Be sure to add the variable name in curly braces prepended with a $ sign and use backticks ``*/
document.write(`Name ${name} Country ${country} Age ${age}`);
document.write(`Name ${name.length} Country ${country} Age ${age}`);