//creating a promise
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        //to resolve 
        // resolve("Hey there!")
        //or reject
        reject(Error ("Err wes isn't cool"))
    }, 1000)
}); 

// console.log(p)

p
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })