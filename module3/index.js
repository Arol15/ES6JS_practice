const dogs = [
    {name: "S", age: 2}, 
    {name: "H", age: 8}, 
    {name: "Sunny", age: 1}
]; 

const arrayOfDogs = dogs.map(dog => `${dog.name} is ${dog.age}`).join("")

const markup = `
<ul class="dogs">
    ${dogs.map(dog => `
    <li>
        ${dog.name} 
        is 
        ${dog.age * 7}
    </li>
    `)}
</ul>
`
console.log(arrayOfDogs)