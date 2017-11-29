
const express = require('express');
const apiRoutes = express.Router();

var account_controller = require('./../controllers/c_account');

apiRoutes.get('/test', account_controller.test);

exports = module.exports = apiRoutes;
