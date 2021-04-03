//prototype inheritance 

function Dog(name, breed) {
    this.name = name; 
    this.breed = breed; 
}

Dog.prototype.bark = function() {
    console.log(`Bark Bark! My name is ${this.name}`)
}

const snickers = new Dog("Snickers", "King Charles")
const sunny = new Dog("Sunny", 'Golden Doodle')

//we can override methods 
Dog.prototype.bark = function() {
    console.log(`Bark Bark! My name is ${this.name} and I'm ${this.breed}`)
}

//we can create more methods even after we created new instances
Dog.prototype.cuddle = function() {
    console.log("I love you owner!")
}