const http = require("http")
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res) => {
    
    res.setHeader("Content-Type", "text/html");


    let path = './pages/';
    switch (req.url) {
        case '/':
            path += 'index.html'
            break;
            case '/about':
                path += 'about.html'
            break;
        default:
                path += '404.html'
                break;
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        }
        res.end(data);
    })
}) 
server.listen(3000)


fs.appendFile("p.js", "Hello", (err) => {
    console.log("file appended");
    
})