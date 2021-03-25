const express = require("express");
const mongoose = require("mongoose");
const auth = require("./routes/auth");
const cookieParser = require('cookie-parser')
const requireAuth = require('./middleware/authMid')
const cons = require('cors')
require('dotenv/config')
// const authCont=require('./controllers/authCont')
const app = express();

//use of middleware
app.use(express.static('public'))
app.use(express.json());
app.use(cookieParser());


//ve
app.set("view engine", "ejs");

//connection

mongoose
	.connect(process.env.DB_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then((result) => app.listen(3001))
	.catch((err) => console.log(err));

app.get("/", (req, res) => {
	res.render("home");
});
app.get('/show', requireAuth, (req, res) => res.render('show'));
app.get("/datas", (req, res) => res.render("data"));
app.get('/admin', requireAuth, (req, res) => res.render('show'));
app.use(auth);

//cookies
// app.get('/set-cookeis', (req, res) => {
//     res.cookie('newUser', true);
//     res.send('you got the cookie')
// })
// app.get('/read-cookies', (req, res) => {
//     const cookies = req.cookies;
//     console.log(cookies.newUser);
//     res.json(cookies);
//  })