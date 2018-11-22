// Enhanced object Properties

const pricePropName = "PRICE";

const calculate = (name, price) => {
    return {
        name,
        add(n1, n2) {
            return n1 + n2;
        },
        [pricePropName.toLowerCase()] : price
    }
}

// Store the values of calculate in calc variable and access them from there
const calc = calculate('casio', 19.99);

document.write(calc.name);
document.write(calc.add(20, 20));
document.write(calc.price);