const express = require('express')
const mongoose = require('mongoose')
const auth = require('./routes/auth')
// const authCont=require('./controllers/authCont')
const app = express();

//use of middleware
app.use(express.static('public'))
app.use(express.json())
//ve
app.set('view engine', 'ejs')

const dbURI = 'mongodb+srv://Ninja19:Nin1to9@cluster0.rwgx4.mongodb.net/node-auth';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => app.listen(3000))
    .catch((err)=>console.log(err))


app.get('/', (req, res) => {
    res.render('home')
})
app.get('/datas', (req, res) => res.render('data'))
app.use(auth);
