const mongoose = require('mongoose');
const config = require('./../config');

mongoose.connect(config.db.url, config.db.server, function (err) {
  if (err) {
    console.error('connect to %s error: ', config.db, err.message);
    process.exit(1);
  }
});

exports.account = require('./d_account');
