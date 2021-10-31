const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/movieApp", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connection open!");
    })
    .catch(err => {
        console.log("Oh no!");
        console.log(err);
    })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model("Movie", movieSchema)

// insert
const amadeus = new Movie({ title: "Amadeus", year: 1986, score: 9.2, rating: "R" })
amadeus.save()

Movie.insertMany([
    { title: "Amelie", year: 2001, score: 8.3, rating: "R" },
    { title: "Alien", year: 1979, score: 8.1, rating: "R" },
    { title: "The Iron Giant", year: 1999, score: 7.5, rating: "PG" },
    { title: "Stand By Me", year: 1986, score: 8.6, rating: "R" },
    { title: "Moonrise Kingdom", year: 2012, score: 7.3, rating: "PG-13" }
])
    .then(data => {
        console.log("It worked");
        console.log(data);
    })

// find
Movie.find({}).then(data => console.log(data))
Movie.find({ rating: "PG-13" }).then(data => console.log(data))
Movie.find({ year: { $gt: 2000 } }).then(data => console.log(data))
Movie.findOne({ year: { $lt: 2000 } }).then(data => console.log(data))
Movie.find({ year: { $gt: 2000 } }).then(data => console.log(data.id))     // the object is the model we defined

Movie.findById("617dea44355111bfe7a51f45").then(data => console.log(data))
Movie.find({ _id: "617dea44355111bfe7a51f45" }).then(data => console.log(data))

// update
Movie.updateOne({ title: "Amadeus" }, { year: 1984 }).then(res => console.log(res))
Movie.updateMany({ title: { $in: ["Amadeus", "Stand By Me"] } }, { score: 10 }).then(res => console.log(res))
Movie.findOneAndUpdate({ title: "The Iron Giant" }, { score: 7.0 }).then(res => console.log(res))
Movie.findOneAndUpdate({ title: "The Iron Giant" }, { score: 7.8 }, { new: true }).then(res => console.log(res)) // add {new: true} can get the updated result back

// delete
Movie.remove({ title: "Amadeus" }).then(msg => console.log(msg))
Movie.deleteMany({ year: { $lt: 1990 } }).then(msg => console.log(msg))
Movie.findOneAndDelete({ title: "Alien" }).then(msg => console.log(msg))
