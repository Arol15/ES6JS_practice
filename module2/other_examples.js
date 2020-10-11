const race = "100m Dash";
const winners = ["Hunter Gath", "Singa Song", "Imda Bos"]

//data can come in different formats, ideally we would want an obg

// {
//     name: "John Doe", 
//     place: 1, 
//     race: race
// }

//to return an object literal we need to put the function block in parantheses when using implicit return 
// const win = winners.map((winner,i) => ({name: winner, race: race, place: i + 1}))

//new feature of ES6 is to use race instead of race: race; 
const win = winners.map((winner,i) => ({name: winner, race, place: i + 1}))
console.log(win)

//filter the list for people who are older than 60 years old
const ages = [23, 62, 45, 234, 2, 62, 234, 62, 34]; 

const old = ages.filter(age => age >= 60)
console.log(old)
