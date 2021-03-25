const jwt = require('jsonwebtoken')
const User = require('../models/user')
const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    
    if (token) {
        jwt.verify(token, 'ninja secret',async (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.redirect('/login')
            }  
            else {
                
                const verified =await User.findById(decodedToken.id)
                console.log(verified, "hello");
              
                // if (verified.role === 1) {
                //     res.redirect("admin");
                //     console.log("bitches");
                     
                // }
                // else {
                //    res.redirect("/user");
                // }
                next();
            }
        })
    }
    else {
        res.redirect('/login')
    }
}

module.exports = requireAuth