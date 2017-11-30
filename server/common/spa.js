exports = module.exports = (options) => {
  
  const defaultOption = {

  }

  return (req, res, next) => {

    let opts = { ...defaultOption, ...options };
    const requestUrl = req.originalUrl;

    const isWhiteList = opts.whiteList.findIndex( (url) => {
      return requestUrl.startsWith(url);
    });
    if ( isWhiteList > -1) {
      next();
    } else {
      const isHtmlRequest = opts.htmlList.findIndex( (htmlOpt) => {
        return requestUrl.startsWith(htmlOpt.route);
      });
      if ( isHtmlRequest > -1 ) {
        res.status(200).sendFile(opts.htmlList[isHtmlRequest].html);
      } else {
        res.status(404).json({success: false, msg: 'Request resources not found!'})
      }
    }
  }
}

// app.get('*', function (request, response){
//   response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// })