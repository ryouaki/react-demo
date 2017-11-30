exports = module.exports = (options) => {
  
  const defaultOption = {

  }

  return (req, res, next) => {

    let opts = { ...defaultOption, ...options };
    const requestUrl = req.originalUrl;

    const isWhiteList = opts.whitelist.findIndex( (url) => {
      return requestUrl.startWith(url);
    })
    if ( isWhiteList > -1) {
      next();
    } else {
      res.json({success: false, msg: "not at whitelist"})
    }
  }
}

// app.get('*', function (request, response){
//   response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// })