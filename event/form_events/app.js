const tweetForm = document.querySelector("#tweetForm");

tweetForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let username = tweetForm.elements.username;
    let tweet = tweetForm.elements.tweet;
    post(username.value, tweet.value);
    username.value = ""
    tweet.value = ""
})

const tweets = document.querySelector("#tweets");

const post = (username, tweet) => {
    let newTweet = document.createElement("li");
    newTweet.innerHTML = `<b>${username}</b> - ${tweet}`;
    tweets.appendChild(newTweet);
}