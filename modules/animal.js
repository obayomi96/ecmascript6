// using export to export a class for use in another file code

export default class Animal{
    constructor() {
        console.log("I am an Animal");
    }
    getClassType() {
        return "Animal";
    }
}

// Now the Animal class can be imported in another js text file and its properties can be accessed