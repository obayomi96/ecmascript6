const person = {
    name: "Obayomi",
    cars: ['benz', 'Limosine'],
    toString: function() {
// This will output The name and cars together        
        document.write(`${this.name} has ${this.cars}`);
        this.cars.forEach(car => {
// This will output the name and each car seperately            
            document.write(`${this.name} has ${car}`);
        });
    }
}
person.toString();