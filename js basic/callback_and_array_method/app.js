const nums = [1, 3, 4, 5, 6, 7, 10, 44];
const doubles = nums.map(function (num) {
    return num * 2;
})

// previous syntax

// function add(x, y) {
//     return x + y;
// }

// const add = function (x, y) {
//     return x + y;
// }

// arrow function
const add = (x, y) => {
    return x + y;
}

// implicit function
const add2 = (x, y) => x + y


const movies = [
    {
        title: "Amadeus",
        score: 99
    },
    {
        title: "Stand By Me",
        score: 85
    },
    {
        title: "Parasite",
        score: 95
    },
    {
        title: "Alien",
        score: 90
    }
]

const movies2 = movies.map(function (movie) {
    return `${movie.title} - ${movie.score} / 100`
})

const movies3 = movies.map((movie) => {
    return `${movie.title} - ${movie.score} / 100`
})

const movies4 = movies.map((movie) => `${movie.title} - ${movie.score} / 100`)

// set timeout and set interval
console.log("hello")
setTimeout(() => {
    console.log("...are you still there?")
}, 3000)

setTimeout(() => {
    console.log("hello?")
}, 6000)
console.log("goodbye")

const id = setInterval(() => {
    console.log(Math.random())
}, 1000);
// using clearInterval to stop it
// clearInterval(id)

