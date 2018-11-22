// Arrow functions are a much cleaner and easier way of writing functions in javascript

const hello = () => {
    const martins = "Martins";
    return `Hello ${martins}`;
};

const powers = [1, 2, 3, 4, 5].map((number, index) => Math.pow(number, index));

const add = (n1, n2) => n1 + n2;

const milesToKilometer = miles => miles * 1.60934;

// Using document.write() to view output directly in browser for testing

document.write(hello())
document.write(powers)
document.write(add(50, 100))
document.write(milesToKilometer(500));