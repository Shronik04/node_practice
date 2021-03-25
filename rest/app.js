const express = require('express')
const mongoose=require('mongoose')
const app = express()

//middleware

//route
app.get("/", (req, res) => {
    res.send("this is home")
})
app.get("/post", (req, res) => {
    res.send("this is post")
})


app.listen(3001)