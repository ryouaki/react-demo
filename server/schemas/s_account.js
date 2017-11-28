/*
 * Account - 用户表
 * field：account 用户id，用于存储会员卡号，等标示id
 * field：passowrd 登陆密码
 * field: createAt 加入系统日期
 * field：updateAt 最后登陆系统时间
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
  account: { type: Schema.Types.String, required: true },
  password: { type: Schema.Types.String, required: true },
  name: { type: Schema.Types.String, required: true },
  mobile: { type: Schema.Types.String },
  createAt: { type: Schema.Types.Date, default: Date.now },
  updateAt: { type: Schema.Types.Date, default: Date.now }
});

Account.index({ account: 1, createAt: 1 }, { unique: true });
Account.index({ account: 1, updateAt: 1 }, { unique: true });
Account.index({ mobile: 1 }, { unique: true });

exports = module.exports = Account;
