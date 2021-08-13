// json intro
const data = `{"time":{"updated":"Aug 13, 2021 01:32:00 UTC","updatedISO":"2021-08-13T01:32:00+00:00","updateduk":"Aug 13, 2021 at 02:32 BST"},"disclaimer":"This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org","bpi":{"USD":{"code":"USD","rate":"44,765.1051","description":"United States Dollar","rate_float":44765.1051},"BTC":{"code":"BTC","rate":"1.0000","description":"Bitcoin","rate_float":1}}}`;
const parseData = JSON.parse(data);

// fetch
fetch("https://api.cryptonator.com/api/full/btc-usd") // return a promise
    .then(res => {
        console.log("Response, waiting to parse...", res);
        return res.json();
    })
    .then(data => {
        console.log("Data parsed...");
        console.log(data.ticker.price);
    })
    .catch(err => {
        console.log("Oh no! Error!", err);
    })

// async function
const fetchPrice = async (coin) => {
    try {
        const res = await fetch(`https://api.cryptonator.com/api/full/${coin}-usd`);
        const data = await res.json();
        console.log(data.ticker.price);
    } catch (err) {
        console.log("Oh no! Error!", err);
    }
}