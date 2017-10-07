const express = require('express');

const routes = express.Router();

// Helper function
const get = ctrl => require(`../controllers/${ctrl}`);

// Controllers
const authentication = get('authentication');
const users = get('users');

// Routes
routes.use('/auth', authentication);
routes.use('/users', users);

module.exports = routes;
