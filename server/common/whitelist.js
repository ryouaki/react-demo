const config = require('./../config');

exports = module.exports = (options) => {
  return (req, res, next) => {
    next();
  }
}