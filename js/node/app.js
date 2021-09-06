const fs = require("fs")
const folderName = process.argv[2]
fs.mkdirSync(folderName)
fs.closeSync(fs.openSync(`${folderName}/index.html`, 'w'));
fs.closeSync(fs.openSync(`${folderName}/styles.css`, 'w'));
fs.closeSync(fs.openSync(`${folderName}/app.js`, 'w'));

