const transformers = require('../transformers');

module.exports = (req, res, next) => {
  res.transform = transformers(res);
  next();
};
