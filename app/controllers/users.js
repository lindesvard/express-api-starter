const { User } = require('../models');

exports.all = async (req, res) => {
  const users = await User.all();

  res.send({ users });
};

exports.create = (req, res) => res.send({ message: 'create users' });

exports.get = (req, res) => res.send({ message: `get user with id = ${req.params.id}` });

exports.update = (req, res) => res.send({ message: `update user with id = ${req.params.id}` });

exports.delete = (req, res) => res.send({ message: `delete user with id = ${req.params.id}` });
