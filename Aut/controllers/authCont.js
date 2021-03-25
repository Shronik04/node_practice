const User = require('../models/user')

const handleError = (err) => {
    console.log(err.message, err.code);
    let errors = { name: '', email: '', password: '' };
    if (err.code === 11000) {
        errors.email = "This email already exists"
        return errors;
}
    if (err.message.includes('')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
       })
    }
    return errors;
}

module.exports.signup_get = (req, res) => {
    res.render('signup')
}
module.exports.login_get = (req, res) => {
    res.render('login')
}
module.exports.signup_post = async (req, res) => {
    const { name,email, password } = req.body;
    try {
        const user = await User.create({ name, email, password })
        res.status(201).json(user)
    }
    catch(err) {
       const errors= handleError(err);
        res.status(400).json(errors)
    }
}
module.exports.login_post = (req, res) => {
    const { email, password } = req.body
    console.log(req.body);
    res.send('user login')
}