// Object Descruting

const getUser = () => {
    return {
        name: 'Martins',
        surname: 'Obayomi',
        gender: 'male',
        address: {
            country: 'Nigeria',
            city: 'lagos',
            postCode: 'LG',
            fullAddress: {
                doorNumber: 10,
                street: "Neto street"
            }
        },
        age: 22
    }
};

const user = getUser();

// const name = user.name;
// const age = user.age;
// const country = user.address.country;

const doorNumber = user.address.fullAddress.foorNumber;
const {name: theName, age: theAge, address: { country: theCountry}} = user;
const {address : {funAddress : {doorNumber : number}}} = user;

document.write(thename);
document.write(theAge);
document.write(theCountry);
document.write(number);