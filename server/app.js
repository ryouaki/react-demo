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
// 对于请求的body部分进行解析的中间件，但是不能用于解析multipart bodies
const bodyParser = require('body-parser');

const config = require('./config'); // 用于系统配置
const logger = require('./common/logger'); // 系统日志中间件
const route = require('./routers'); // 系统后台api
const spa = require('./common/spa');
const utils = require('./../common/utils');

let root = utils.getPublicUrl();
root = root[root.length - 1] === '/' ? root.substring(0, root.length -2) : root;

const staticPath = path.join(__dirname, '..', 'views');

const app = express();

app.use(compress());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: config.session.secret,
  store: new MongoStore({
      url: config.session.host,
      ttl: config.session.ttl
  }),
  resave: false,
  saveUninitialized: false,
}));

if (process.env.NODE_ENV != 'production') {
  root = '';
  const cors = require('cors');//跨域中间件
  app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    Origin: '*'
  }));//设置跨域
}

app.use(logger(null, {filter: root + config.api}));
app.use(express.static(staticPath, {
  maxAge: 1000*60*60*24
}));
app.use(spa({
  whiteList: [root + config.api],
  htmlList: [
    {
      route: root,
      html: path.join(process.cwd(), '/views/index.html')
    }
  ]
}));
app.use(root + config.api, route);

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
