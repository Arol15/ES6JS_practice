//class expression 
// const Dog = class {

// }


//class declaration 

class Dog {
    //absolutely required methods
    constructor(name, breed) {
        this.name = name; 
        this.breed = breed; 
    }

    bark() {
        console.log(`Bark, Bark! My name is ${this.name}, and I'm a ${this.breed}`)
    }

    cuddle() {
        console.log("I love you owner!")
    }

    //only works directly on this class 
    //it won't work on instances only on Dog directly
    static info() {
        console.log("A dog is better than a cat by 10 times")
    }

    //getter - property to get info 
    get description() {
        return `${this.name} is a ${this.breed} type`
    }

    //setter 
    set nicknames(value) {
        this.nick = value.trim()
    }
    //getter for the above setter 
    get nicknames() {
        return this.nick.toUpperCase(); 
    }
}

const snickers = new Dog("Snickers", "King Charles")
const sunny = new Dog("Sunny", 'Golden Doodle')
