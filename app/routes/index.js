const express = require('express');

const routes = express.Router();

// Helper function
const get = ctrl => require(`../controllers/${ctrl}`);

// Controllers
const users = get('users');
const items = get('items');
const tasks = get('tasks');

// Routes
routes.use('/users', users);
routes.use('/items', items);
routes.use('/tasks', tasks);

module.exports = routes;
