const bcrypt = require('bcrypt-nodejs');

exports.hash = password => bcrypt.hashSync(password);
exports.compare = (password, hashed) => bcrypt.compareSync(password, hashed);
