const express = require('express');
const routes = express.Router();
const controller = require('../controllers/UserController');

routes.get('/users', controller.getAllUser);
routes.post('/create-user',controller.createUser);
routes.put('/update-user',controller.updateUser);


module.exports = routes;

