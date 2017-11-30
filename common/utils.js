const fs = require('fs');
const url = require('url');

class Utils {

  getPublicUrl() {
    const appPath = fs.realpathSync(process.cwd());
    const json = fs.readFileSync(appPath + '/package.json');
    try {
      let packageJson = JSON.parse(json);
      const servedUrl = packageJson.homepage ? url.parse(packageJson.homepage).pathname : '/';
      
      return servedUrl;
    } catch(e) {
      return '/';
    }
  }
}

exports = module.exports = new Utils();
