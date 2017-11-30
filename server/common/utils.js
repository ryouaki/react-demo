const fs = require('fs');
const url = require('url');

class Utils {

  getPublicUrl() {
    const appPath = fs.realpathSync(process.cwd());
    const json = fs.readFileSync(appPath + '/package.json');
    let servedUrl = '/';
    try {
      let packageJson = JSON.parse(json);
      servedUrl = packageJson.homepage ? url.parse(packageJson.homepage).pathname : '/';
      servedUrl = servedUrl[servedUrl.length - 1] === '/' ? servedUrl.substring(0, servedUrl.length -2) : servedUrl;
      return servedUrl;
    } catch(e) {
      return '/';
    }
  }
}

exports = module.exports = new Utils();
