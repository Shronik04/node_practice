const express = require('express')
const mongoose = require('mongoose')
const Blog =require('./models/blogs')


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

//static
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));


app.get('/add-blog', (req, res) => {
    const blog = new Blog({
    
        title: 'new blog 4',
        snippet: 'about the blog',
        body:'new body'
        
    })
    blog.save()
        .then((result) => {
        res.send(result)
        })
        .catch((err) => {
        console.log(err);
    })
})
app.get('/find-blog', (req, res) => {
    Blog.findByIdAndDelete("605ad94334c6972986fc4203")
        .then((result) => {
        res.send(result)
        })
        .catch((err) => {
        console.log(err);
    })
})
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
      .then(result => {
        res.render('index', { blogs: result, title: 'All blogs' });
      })
      .catch(err => {
        console.log(err);
      });
  });

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: "create a new blog" });
})

app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then(() => {
            console.log(req.body);
            res.redirect('/blogs')
    })
})

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
      .then(result => {
        res.render('show', { blog: result, title: 'Blog Details' });
      })
      .catch(err => {
        console.log(err);
      });
  });

  app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/blogs' });
      })
      .catch(err => {
        console.log(err);
      });
  });
  


//vieweng & ejs
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
    console.log("nextOp");
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

