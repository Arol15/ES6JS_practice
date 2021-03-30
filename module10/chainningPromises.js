const posts = [
    { title: "I love JavaScript", author: "Wes Bos", id: 1 }, 
    { title: "CSS!", author: "Chris Coyier", id: 2 }, 
    { title: "Dev tools tricks", author: "Addy Osmani", id: 3}, 
]; 

const authors = [
    { name: "Wes Bos", twitter: "@wesbos", bio: "Canadian Developer" }, 
    { name: "Chris Coyier", twitter: "@chriscoyier", bio: "CSS Tricks and CodePen" }, 
    { name: "Addy Osmani", twitter: "@addyosmani", bio: "Googler" }
]; 

function getPostById(id) {
    //create a new promise
    return new Promise((resolve, reject) => {
        //using settimeout to mimic database
        setTimeout(() => {
            //find the post we want
            const post = posts.find(post => post.id === id); 
            if (post) {
                resolve(post); //send the post back
            } else {
                reject(Error("No Post Was Found!"))
            }
        }, 2000)
    })
}
function hydrateAuthor(post) {
    //create a new promise
    return new Promise((resolve, reject) => {
        //find the author
        const authorDetails = authors.find(person => person.name === post.author)
        //"hydrate" the post object with the author object
        if (authorDetails) {
            post.author = authorDetails; 
            resolve(post); 
        } else {
            reject(Error("Can't find the author!"))
        }
    })
}

getPostById(2)
    .then(post=> {
        console.log(post)
        return hydrateAuthor(post)
    })
    .then(post => {
        console.log(post)
    })
    .catch(err => {
        console.log(err)
    }); 