const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/shopApp", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connection open!");
    })
    .catch(err => {
        console.log("Oh no!");
        console.log(err);
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

// virtuals
personSchema.virtual("fullName").get(function () {
    return `${this.first} ${this.last}`
})

// middleware
personSchema.pre("save", async function () {
    console.log("Above to save");
})
personSchema.post("save", async function () {
    console.log("Just saved");
})

const Person = mongoose.model("Person", personSchema);
const tammy = new Person({ fisrt: "Tammy", last: "Chow" })
console.log(tammy);
console.log(tammy.fullName);
