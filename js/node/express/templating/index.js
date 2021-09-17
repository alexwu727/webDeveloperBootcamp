const path = require("path")
const redditData = require("./data.json")
const express = require("express");
const exp = require("constants");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, 'public')))


app.get("/", (req, res) => {
    console.log("Welcome to the home page");
    res.render("home")
})
app.get("/rand", (req, res) => {
    num = Math.floor(Math.random() * 10) + 1
    console.log("Welcome to the random number page");
    res.render("rand", { num }) // {num} = {num : num}
})
app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit]
    if (data) {
        res.render("subreddit", { ...data })
    } else {
        res.render("notfound", { subreddit })
    }

})
app.get("/cats", (req, res) => {
    const cats = ["Blue", "Rocket", "Monty", "Stephanie", "Winston"]
    res.render("cats", { cats }) // {num} = {num : num}
})
app.listen(3000, () => {
    console.log("Listening on port 3000");
})

