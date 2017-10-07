const routes = require('express').Router({ mergeParams: true });
const { User } = require('../models');
const items = require('./items');

const list = (req, res) => {
  res.json(req.params);
};

const add = (req, res) => {
  res.json(req.params);
};

const get = (req, res) => {
  res.json(req.params);
};

const update = (req, res) => {
  res.json(req.params);
};

const remove = (req, res) => {
  res.json(req.params);
};

routes.route('/')
  .get(list)
  .post(add);

routes.route('/:userId')
  .get(get)
  .put(update)
  .delete(remove);

routes.use('/:userId/items', items);

module.exports = routes;
