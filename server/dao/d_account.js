const mongoose = require('mongoose');
const sAccount = require('./../schemas/s_account');
const DBError = require('./../common/db_error');

const Account = mongoose.model('account', sAccount);

class ModelAccount {

  indexes() {
    return new Promise((resolve, reject) => {
      Account.ensureIndexes((err) => {
        if (!err) {
          return resolve({});
        } else {
          return reject(new DBError('ensureIndexes failed'));
        }
      })
    })
  }

  save(account) {
    return new Promise((resolve, reject) => {
      Account.create(account, (err, newAccount) => {
        if (!err) {
          return resolve(newAccount);
        } else {
          return reject(new DBError('new account failed'));
        }
      })
    })
  }

  findByAccount(account) {
    return new Promise((resolve, reject) => {
      Account.findOne({ account: account }, (err, account) => {
        if (!err) {
          return resolve(account);
        } else {
          return reject(new DBError('find account by account failed'));
        }
      })
    })
  }

  updateAccount(account) {
    return new Promise((resolve, reject) => {
      let {
        _id = '',
        ...newData
      } = account;
      Account.update({ _id: _id }, newData, (err, newAccount) => {
        if (!err) {
          return resolve(newAccount);
        } else {
          return reject(new DBError('update account by account failed'));
        }
      })
    })
  }

  deleteAccount(account) {
    return new Promise((resolve, reject) => {
      Account.deleteOne({ _id: _id }, (err, newAccount) => {
        if (!err) {
          return resolve(newAccount);
        } else {
          return reject(new DBError('delete account by account failed'));
        }
      })
    })
  }
}

exports = module.exports = new ModelAccount();
