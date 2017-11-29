exports = module.exports = (options) => {
  
  const defaultOption = {

  }

  return (req, res, next) => {
    console.log(req.originalUrl);
    next();
  }
}