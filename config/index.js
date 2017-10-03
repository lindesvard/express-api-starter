let environment = 'development';

switch (process.env.NODE_ENV) {
  case 'development':
    environment = 'development';
    break;
  case 'production':
    environment = 'production';
    break;
}

module.exports = require(`./${environment}`);
