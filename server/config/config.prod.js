exports = module.exports = {
  api: '/api/v1',
  session: {
    secret: 'www.hi1896.com',
    encoding: ['utf8', 'hex'],
    ttl: 24 * 60 * 60,
    host: 'mongodb://127.0.0.1'
  },
  db: {
    url: 'mongodb://127.0.0.1/sign8', // mongodb://user:pass@localhost:port/database
    server: {
      useMongoClient: true,
      poolSize: 10,
      autoIndex: false
    }
  }
  
}