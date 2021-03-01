const mongoose = require('mongoose');
let UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    marathi : {
        type : String,
        require : true
    },
    english : {
        type : String,
        require : true
    },
    hindi : {
        type : String,
        require : true
    },
    math : {
        type : String,
        require : true
    },
    science : {
        type : String,
        require : true
    },
    createdAt : {
        type : Date,
        default : mongoose.now()
    },
    updatedAt : {
        type : Date,
        default : mongoose.now()
    }

})
let userSchema = mongoose.model('user', UserSchema);
module.exports = userSchema
