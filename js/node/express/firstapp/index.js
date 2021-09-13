const express = require("express");
const app = express()

// app.use((req, res) => {
//     console.log("New request incomeing!");
//     // res.send("hello, we got your request!")
//     res.send({ color: "red" })
// })

// route
// /cats => "meow"
// /dogs => "woof"
app.get("/", (req, res) => {
    res.send("This is the home page")
    console.log("going to root")
})

app.get("/cats", (req, res) => {
    console.log("going to cats")
    res.send("meow")
})
app.post("/cats", (req, res) => {
    res.send("Post request to cats!")
})
app.get("/dogs", (req, res) => {
    console.log("going to dogs")
    res.send("wooffff")
})
// path params
app.get("/r/:subreddit", (req, res) => {
    // console.log(req.params);
    const { subreddit } = req.params;
    res.send(`Welcome to ${subreddit}`)
})
app.get("/r/:subreddit/:postId", (req, res) => {
    // console.log(req.params);
    const { subreddit, postId } = req.params;
    res.send(`Post ${postId} on subreddit ${subreddit}`)
})
// query params
app.get("/search", (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send("search for nothing")
    } else {
        res.send(`hello from search! Now quering ${q}`)
    }

})
app.get("*", (req, res) => {
    res.send("<h1>404!!!!!!!!!!</h1>")
})
app.listen(3000, () => {
    console.log("Listening on port 3000!");
})