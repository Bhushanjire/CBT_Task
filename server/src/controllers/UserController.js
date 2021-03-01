const UserSchema = require('../models/UserModel');
const ResponceFormat = require('../utility/ResponceFormat');
const UserController = {
    getAllUser: (req, res) => {
        UserSchema.find({}, (error, result) => {
            error ? res.status(400).send(ResponceFormat.generateResponce(400, 'Error in user list', true, error))
                : res.status(200).send(ResponceFormat.generateResponce(200, 'User List', true, result))
        })
    },
    createUser: (req, res) => {
        UserSchema.create(req.body, (error, result) => {
            error ? res.status(400).send(ResponceFormat.generateResponce(400, 'User Not Created', false, error))
                : res.status(200).send(ResponceFormat.generateResponce(200, 'User Created', true, result))
        })
    },
    updateUser: (req, res) => {
        const { id, user } = req.body
        UserSchema.findByIdAndUpdate(id, user, (error, result) => {
            error ? res.status(400).send(ResponceFormat.generateResponce(400, 'User Not Updated', false, error))
                : res.status(200).send(ResponceFormat.generateResponce(200, 'User Updated', true, result))
        })
    }
}

module.exports = UserController;