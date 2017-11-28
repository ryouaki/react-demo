'use strict';

const express = require('express');
const http = require('http');
const path = require('path');
// express的session中间件
const session = require('express-session'); 
// 利用mongodb管理session实现session的持久化，为将来集群做准备。如果使用redis使用connect-redis
const MongoStore = require('connect-mongo')(session); 
// 资源压缩，优化网页加载速度
const compress = require('compression'); 

const config = require('./config'); // 用于系统配置
const logger = require('./common/logger'); // 系统日志中间件
// const route = require('./api'); // 系统后台api

const app = express();

app.use(compress());

app.use(session({
  secret: config.session.secret,
  store: new MongoStore({
      url: config.session.host,
      ttl: config.session.ttl
  }),
  resave: false,
  saveUninitialized: false,
}));

app.use(logger(null, {filter: config.api}));

app.use(express.static(path.join(__dirname, '..', 'build')));
// app.use(config.api, route);

app.use(function (req, res) {
  return res.status(404).json({success:false}).end();
});

app.use(function (err, req, res, next) {
  return res.status(500).json({success:false}).end();
});

var server = http.createServer(app);

exports = module.exports = () => {
  server.on('error', (error) => {
    console.log(error);
  });
  server.on('listening', () => {
    console.log('Start with port: ' + (process.env.PORT || 3000));
  });

  server.listen(process.env.PORT || 3000);
};
