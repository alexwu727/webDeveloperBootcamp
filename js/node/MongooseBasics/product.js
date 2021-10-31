const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/shopApp", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connection open!");
    })
    .catch(err => {
        console.log("Oh no!");
        console.log(err);
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price must be a positive number!"]
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ["S", "M", "L"]
    }

})

const Product = mongoose.model("Product", productSchema);

const bike = new Product({ name: "Mountain Bike", price: 599, categories: ["Cycling", "Safety"] })
bike.save()
    .then(data => {
        console.log("It worked");
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

Product.findOneAndUpdate({ name: "Mountain Bike" }, { price: -599 }, { new: true, runValidators: true }) // update with validators
    .then(data => {
        console.log("It worked");
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

// enum test
const jersey = new Product({ name: "Cycling Jersey", price: 28.50, categories: ["Cycling", "Safety"], size: "XS" }) // can not use size: "XS"
jersey.save()
    .then(data => {
        console.log("It worked");
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })