const weather = new Promise((resolve) => {
    setTimeout(() => {
        resolve({temp: 29, condition: "Sunny with Clouds"})
    }, 2000)
}); 

const tweets = new Promise((resolve) => {
    setTimeout(() => {
        resolve(["I like cake", "BBQ is good too!"])
    }, 500)
}); 

Promise
//will wait for all responses, doesn't matter how long each separately take. 
    .all([weather, tweets])
    .then(responses => {
        console.log(responses)
        const [weatherInfo, tweetsInfo] = responses; 
        console.log(weatherInfo, tweetsInfo)
    })

//working with actual APIs: 
const postsPromise = fetch("http://wesbos.com/wp-json/wp/v2/posts")
const streetCarsPromise = fetch("http://data.ratp.fr/api/datasets/1.0/search/?q=paris")

Promise
    .all([postsPromise, streetCarsPromise])
    .then(responses => {
        return Promise.all(responses.map(res => res.json()))
    })
    .then(responses => {
        console.log(responses)
    }); 

    