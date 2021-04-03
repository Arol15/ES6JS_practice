class MovieCollection extends Array {
    //...items will capture all items - movies, which is an array
    constructor(name, ...items) {
        //turning an array into objects
        super(...items); 
        this.name = name; 
    }

    add(movie) {
        this.push(movie)
    }
    //default argument 
    topRated(limit = 10) {
        return this.sort((a, b) => (a.stars > b.stars ? -1 : 1)).slice(0, limit)
    }
}

const movie = new MovieCollection("Wes's Fav Movies", 
    { name: "Bee Movie", stars: 10}, 
    { name: "star wars trek", stars: 1}, 
    { name: "Hello world", stars: 7}, 
    { name: "King of the Road", stars: 8}
); 

movie.add({name: "Titanic", stars: 5})
console.log(movie)
console.log(movie.topRated(3))