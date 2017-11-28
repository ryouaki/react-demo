console.log('System initialize for mongodb');

if (process.argv[2] === 'prod') {
  process.env.NODE_ENV = 'production';
} else {
  process.env.NODE_ENV = 'development';
} 

const models = require('./server/dao');
const DBError = require('./server/common/db_error');

let dbInit = () => {
  console.log('Init document Mongodb start!');
  let admin = accountInit();
  console.log('Please use admin/123456 to login system ,and delete it before you set the new adminstrator!');
  console.log('Init document Mongodb end! press any key to exit!');
  process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
      process.exit();
    }
  });
}

let accountInit = async () => {
  
  try {
    console.log('insert initialize data into Account');
    const admin = {
      account: 'admin',
      password: '123456',
      mobile: '13940923382',
      name: 'administrator'
    };
    let ret = await models.account.save(admin);
    ret = await models.account.indexes();
    ret = await models.account.findByAccount('admin');
    ret = await models.account.updateAccount({_id: ret._id, name: 'ryouaki'});
    ret = await models.account.deleteAccount({_id: ret._id});
    ret = await models.account.save(admin);
    return ret;
  } catch(e) {
    console.error(e);
  }
}

dbInit();
