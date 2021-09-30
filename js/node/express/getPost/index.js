const path = require("path");
const methodOverride = require("method-override");
const express = require("express");
const app = express();
const { v4: uuid } = require("uuid");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(methodOverride("_method"))

let comments = [
    {
        id: uuid(),
        username: "Todd",
        comment: "lol that is so funny!"
    },
    {
        id: uuid(),
        username: "Skyler",
        comment: "I like to go birdwatching with my dog"
    },
    {
        id: uuid(),
        username: "sk8erBoi",
        comment: "Plz delete your account, Todd"
    },
    {
        id: uuid(),
        username: "onlysayswoof",
        comment: "woof woof woof"
    }
]

app.get("/comments", (req, res) => {
    res.render("comments/index", { comments })
})

app.get("/comments/new", (req, res) => {
    res.render("comments/new")
})

app.post("/comments", (req, res) => {
    const { username, comment } = req.body
    comments.push({ id: uuid(), username, comment })
    res.redirect("/comments")
})

app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    if (!comment) {
        res.send("404")
    } else {
        res.render("comments/show", { comment })
    }
})

app.get("/comments/:id/edit", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/edit", { comment })
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newComment = req.body.comment
    const comment = comments.find(c => c.id == id);
    comment.comment = newComment;
    res.redirect("/comments")
})

app.delete("/comments/:id", (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect("/comments")
})
app.get("/tacos", (req, res) => {
    res.send("get tacos!");
})
app.post("/tacos", (req, res) => {
    const { meat, qty } = req.body;
    if (meat && qty) {
        const taco = qty == 1 ? "taco" : "tacos"
        res.send(`${qty} ${meat} ${taco} right away!`);
    } else {
        res.send("What was that?")
    }
})

app.listen(3000, () => {
    console.log("Listen on port 3000");
})