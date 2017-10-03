const express = require('express');
const routes = express.Router();

// Use the following names in the controller
// create, all, get, update, delete

// Helper function
const get = (ctrl) => require('../controllers/' + ctrl);

// Controllers
const user = get('users');

// Routes
routes.get('/users', user.all);
routes.post('/users/', user.create);
routes.get('/users/:id', user.get);
routes.put('/users/:id', user.update);
routes.delete('/users/:id', user.delete);

module.exports = routes;
