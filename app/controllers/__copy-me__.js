const routes = require('express').Router({ mergeParams: true });
const xxxxx = require('./xxxxx');

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

routes.route('/:yyyyyId')
  .get(get)
  .put(update)
  .delete(remove);

routes.use('/:yyyyyId/xxxxx', xxxxx);

module.exports = routes;
