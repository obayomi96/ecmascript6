// ES6 classes

class Animal {
    constructor(name, age) {
        console.log(`${name} is a animal and was created`);
        this.name = name;
        this.age = age;
    }
    
    static aStaticMethod() {
        document.write('I am a Static method inside of an Animal class');
    }
    
    eat() {
        document.write(`${this.name} is eating`);
    }
    
    sleep() {
        document.write(`${this.name} is sleeping`);
    }
    
    wakeUp() {
        console.log(`${this.name} is waking up`);
    }
    
    logAge() {
        document.write(`${this.name} is ${this.age} year old`);
    }
}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age)
        this.breed = breed;
    }
    
    logBreed() {
        document.write(`${this.name} is a ${this.breed}`);
    }
    
    logAgeFromDog() {
        super.logAge();
    }   
}
const jerry = new Dog('Jerry', 4, 'GSD');
jerry.logBreed();
jerry.logAgeFromDog();

document.write('-----');

const bur = new Cat('Bur', 1);
bur.logAgeFromCat();
bur.eat();
bur.sleep();
bur.wakeUp();
bur.logAge();
