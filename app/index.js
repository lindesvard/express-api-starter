const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const { transformer } = require('./middlewares');
const routes = require('./routes');
const config = require('../config');

const app = express();

if (config.logLevel !== false) {
  app.use(logger(config.logLevel));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1', transformer, routes);
app.get('*', (req, res) => res.status(404).send('not found'));

module.exports = app;
