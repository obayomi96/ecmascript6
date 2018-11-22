// Spread operators on Objects

const address = {
    city: 'Lagos',
    country: 'Nigeria',
    postCode: '23401'
};

const name = {
    firstName: 'Martins',
    lastName: 'Obayomi'
};

const person = {...address, ...name};

document.write(JSON.stringify(person, null, 2));