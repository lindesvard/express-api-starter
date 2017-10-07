const routes = require('express').Router({ mergeParams: true });
const { User } = require('../models');

const list = async (req, res) => {
  const users = await User.findAll();
  res.transform('user', users);
};

const add = async (req, res) => {
  const user = await User.create(req.body);
  res.transform('user', user);
};

const get = async (req, res) => {
  const { userId: id } = req.params;

  const users = await User.findOne({ where: { id } });
  res.transform('user', users);
};

const update = async (req, res) => {
  const { userId: id } = req.params;

  const users = await User.update(req.body, { where: { id } });
  res.status(204).send('ok');
};

const remove = async (req, res) => {
  const { userId: id } = req.params;

  const users = await User.destroy({ where: { id } });
  res.transform('user', users);
};

routes.route('/')
  .get(list)
  .post(add);

routes.route('/:userId')
  .get(get)
  .put(update)
  .delete(remove);

module.exports = routes;
