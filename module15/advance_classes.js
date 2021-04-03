class Animal {
    constructor(name) {
        this.name = name; 
        this.thirst = 100; 
        this.belly = []
    }

    drink() {
        this.thirst -= 10; 
        return this.thirst; 
    }

    eat(food) {
        this.belly.push(food); 
        return this.belly; 
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        //super will create an animal - calls what we extends it
        super(name)
        this.breed = breed; 
    }
    bark() {
        console.log("Bark bark I'm the dog!")
    }
   
}

const rhino = new Animal("Rhiney")
const snickers = new Dog("Snickers", "King Charles")

rhino.drink()
rhino.eat("zebra"); 

console.log(rhino.thirst)
console.log(rhino.belly)