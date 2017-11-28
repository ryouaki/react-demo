
'use strict';

const moment = require('moment');

const defaultOptions = {
  filter: ''
}

function defaultListener(options) {
  let date = new Date();
  let count = date.getTime() - this.__startTime ;
  let memory = process.memoryUsage();
  console.log(
    `[${moment().format('YYYY-MM-DD HH:mm:ss:SSS')}][rss:${memory.rss},heapTotal:${memory.heapTotal},heapUsed:${memory.heapUsed},external:${memory.external}] ${this.__method}[${this.statusCode}] ${this.__baseUrl} ${count+'ms'}`
);
}

exports = module.exports = (cb, options) => {
  return (req, res, next) => {

    let opts = options || defaultOptions;

    if (req.originalUrl.startsWith(opts.filter)) {
      res.__startTime = new Date().getTime();
      res.__method = req.method;
      res.__baseUrl = req.originalUrl;
      
      let _listener = null;
      if (cb) {
        _listener = cb;
      } else {
        _listener = defaultListener;
      }
      res.on('finish', _listener.bind(res, opts));
    }
    
    next();
  }
}