const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    name:{type:String, required:[true, ' please enter your name']},

    email: {
        type: String, required: [true, 'please enter a valid email'], unique: true,
validate:[isEmail,'please enter a valid email']    },
    password:{type:String,minLength:[6,"min length req is 6 characters"], required:[true, "Enter a password"]},
    
})


userSchema.post('save', function (doc,next) {
    console.log("new user was created & saved",doc);
})
const User = mongoose.model('user', userSchema);
module.exports = User;