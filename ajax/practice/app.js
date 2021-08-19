const form = document.querySelector("form")
const TVMazeAPIEndPoint = "https://api.tvmaze.com/search/shows"

let queryParam = ""
form.addEventListener("submit", async (evt) => {
    evt.preventDefault();
    searchTerm = form.query.value;
    // if empty search, do nothing
    if (!searchTerm) return;
    // remove previous result
    const previousResult = document.querySelector("ul")
    previousResult && previousResult.remove()
    // new search result 
    const config = { params: { q: searchTerm } }
    const res = await axios.get(TVMazeAPIEndPoint, config)
    await makeList(res.data)
    form.query.value = ""
})
const makeList = async (data) => {
    const searchResult = document.createElement("ul")
    for (let d of data) {
        let li = document.createElement("li")
        let name = document.createElement("a")
        name.href = d.show.url
        name.innerText = d.show.name
        name.style.display = 'block'
        li.append(name)
        if (d.show.image) {
            let img = document.createElement("img")
            img.src = d.show.image.medium
            li.append(img)
        }
        searchResult.append(li)
    }
    document.body.append(searchResult)
}