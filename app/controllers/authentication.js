const routes = require('express').Router({ mergeParams: true });
const { User } = require('../models');
const config = require('../../config');
const jwt = require('jsonwebtoken');
const { compare } = require('../utils/hash');

const createToken = payload => jwt.sign(payload, config.jwt.secret, { expiresIn: config.jwt.expire });

const verify = (token) => {
  const decoded = jwt.verify(token, config.jwt.secret);

  if (!decoded) {
    return false;
  }

  return decoded;
};

const getCurrentUser = async (token) => {
  const { email } = verify(token);

  return await User.findOne({ where: { email } });
};


const register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).end();
  }

  try {
    const user = await User.create({ email, password });

    if (!user) {
      return res.status(400).end();
    }

    res.set('Auth-Token', createToken({ email: user.email }));

    return res.transform('user', user);
  } catch (e) {
    return res.status(500).send(e);
  }
};

const loginError = (res) => {
  res.status(403).end('wrong email or password');
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return loginError(res);
  }

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return loginError(res);
    }

    if (user && !compare(password, user.password)) {
      return loginError(res);
    }

    res.set('Auth-Token', createToken({ email: user.email }));

    return res.transform('user', user);
  } catch (e) {
    return res.status(500).end();
  }
};

const me = async (req, res) => {
  const { authorization: token } = req.headers;

  try {
    const user = await getCurrentUser(token);

    if (!user) {
      return res.status(401).send('unauthorized');
    }

    return res.transform('user', user);
  } catch (e) {
    let message = e.message;

    if (e.name === 'TokenExpiredError') {
      message = 'token has expired';
    }

    return res.status(401).end(message);
  }
};

const forgotPassword = (req, res) => {
  res.json(req.params);
};

routes
  .get('/me', me)
  .post('/login', login)
  .post('/register', register)
  .post('/forgot-password', forgotPassword);

module.exports = routes;
