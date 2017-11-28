
class DBError extends Error {
  constructor(msg, code) {
    super(msg);
    this.name = 'DBError';
    this.code = code || -1;
  }
}

exports = module.exports = DBError;
