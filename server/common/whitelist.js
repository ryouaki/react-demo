const config = require('./../config');

exports = module.exports = (req, res, next) => {
  if (req.originalUrl !== config.api) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  } else {
    next();
  }
}