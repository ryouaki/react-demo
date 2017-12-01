exports = module.exports = {
  api: '/api/v1',
  session: {
    secret: 'www.hi1896.com',
    encoding: ['utf8', 'hex'],
    ttl: 24 * 60 * 60,
    host: 'mongodb://kanban:qwert12345@111.231.222.199:10086/kanban'
  },
  db: {
    url: 'mongodb://kanban:qwert12345@111.231.222.199:10086/kanban', // mongodb://user:pass@localhost:port/database
    server: {
      useMongoClient: true,
      poolSize: 10,
      autoIndex: false
    }
  }
  
}