const express = require('express')
const mongoose =require('mongoose')
const app = express();

//mongo connection
const dbURI= "mongodb+srv://Ninja19:Nin1to9@cluster0.rwgx4.mongodb.net/practice?retryWrites=true&w=majority"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
    console.log("connected to db");
    })
    .catch((err) => {
    console.log(err);
})


app.set('view engine','ejs')
app.set('views','view')
//request
app.listen(3000);



app.get('/', (req, res) => {
    const blogs = [{ title: 'abc', snippet: 'bsf' },
    { title: 'abcss', snippet: 'bsfsadasdasdasdsadas' }
    ]
    res.render('index',{blogs});
 
})


app.use((req,res,next) => {
    console.log("sachin ");
    next();
})


app.get('/about',(req, res)=> {
    
    res.render('about');
})



// app.get('/about-us',(req, res)=> {
    
//     res.redirect('/about')
// })

// app.use((req, res) => {
//     res.sendFile('./pages/404.html',{root:__dirname})
// })

